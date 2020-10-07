const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer')
admin.initializeApp()
require('dotenv').config()
const {SENDER_EMAIL, SENDER_PASSWORD} = process.env

exports.sendEmail = functions.firestore.document('emails/{emailId}').onCreate((snap, ctx) => {
	// const data = snap.data()
	// let authData = nodemailer.createTransport({
	// 	host: 'na-j.gmail.com',
	// 	port: 465,
	// 	secure: true,
	// 	auth: {
	// 		user: SENDER_EMAIL,
	// 		pass: SENDER_PASSWORD
	// 	}
	// })
	// authData.sendMail({
	// 	from: 'jakubs929@gmail.com',
	// 	to: data.email,
	// 	subject: 'Your submission Info',
	// 	text: data.email,
	// 	html: `<strong>${data.email}</strong>`
	// }).then(res => console.log('successfully send mail', res)).catch(err => console.log(err))
	console.log('test');
})
