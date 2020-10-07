import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/functions'
import 'firebase/storage'

const config = {
	apiKey: "AIzaSyBxJNTiVmX7K8Tj3GPkMIMlXQ_F-hNkHYo",
	authDomain: "naczk-j.firebaseapp.com",
	databaseURL: "https://naczk-j.firebaseio.com",
	projectId: "naczk-j",
	storageBucket: "naczk-j.appspot.com",
	messagingSenderId: "33384051062",
	appId: "1:33384051062:web:c469469393e67bda9c8a57",
	measurementId: "G-2460ZZLRRL"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

Vue.prototype.$firebase = firebase;
Vue.prototype.$db = firebase.firestore();
Vue.prototype.$au = firebase.auth();
Vue.prototype.$auth = firebase.auth;
Vue.prototype.$fu = firebase.functions();
Vue.prototype.$st = firebase.storage();

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		Vue.prototype.$user = user;
	}
})