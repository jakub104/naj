const functions = require('firebase-functions')
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const { auth } = require('firebase-admin');
admin.initializeApp()
require('dotenv').config()
// --- http requests
// exports.randomNumber = functions.https.onRequest((req, res) => {
// 	const number = Math.round(Math.random() * 100)
// 	res.send(number.toString())
// })

// exports.toTheDojo = functions.https.onRequest((req, res) => {
// 	res.redirect('https://szulcus.pl')
// })

// --- https callable
// exports.sayHello = functions.https.onCall((data, context) => {
// 	const name = data.name
// 	return `hello, ${name}!`
// })

// --- auth trigger
// exports.newUserSignUp = functions.auth.user().onCreate((user) => {
// 	// console.log('User created: ', user.email, user.uid);
// 	return admin.firestore().collection('users').doc(user.uid).set({
// 		email: user.email,
// 		upvotedOn: []
// 	});
// })

// exports.userDeleted = functions.auth.user().onDelete((user) => {
// 	// console.log('User deleted: ', user.email, user.uid);
// 	const doc =  admin.firestore().collection('users').doc(user.uid);
// 	return doc.delete();
// })

// exports.addRequest = functions.https.onCall((data, context) => {
// 	if (!context.auth) {
// 		throw new functions.https.HttpsError(
// 			'unauthenticated',
// 			'only authenticated users can add requests'
// 		)
// 	}
// 	if (data.text.length > 30) {
// 		throw new functions.https.HttpsError(
// 			'invalid-argument',
// 			'requests must be no more than 30 characters long'
// 		)
// 	}
// 	return admin.firestore().collection('requests').add({
// 		text: data.text,
// 		upvotes: 0
// 	})
// })
const {SENDER_EMAIL, SENDER_PASSWORD} = process.env
const transport = nodemailer.createTransport({
	host: 'imap.wp.pl',
	port: 993,
	secure: true, 
	auth: {
		user: "na-j.bot@wp.pl",
		pass: "najbot123"
	}
})
exports.sendEmail = functions.firestore.document('emails/{emailId}').onCreate((snap, context) => {
	const {email,name} = snap.data()
	console.log(email, name);
	return sendWelcomeMail(email, name)
})
function sendWelcomeMail(email, name) {
	return transport.sendMail({
		from: email,
		to: "Na-J <na-j.bot@wp.pl>",
		subject: "👀",
		html: `
			<h1>Hola ${name}!</h1>
		`
	}).then(r => console.log('r: ', r)).catch(err => console.log('err: ', err))
}