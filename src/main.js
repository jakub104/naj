// PACKAGES
import Vue from 'vue'
// TESTS
import '@/registerServiceWorker'
// COMPONENTS
import App from '@/App.vue'
// ROUTER
import router from '@/Router'
// STYLES
import '@/Styles/Global.scss'
// CONFIG
import '@/Config/FaIcons'
import '@/Config/Fragment'
import '@/Config/Firebase'

Vue.prototype.$loaded = false
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
