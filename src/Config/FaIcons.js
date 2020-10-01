import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faPhone, faEnvelope
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faPhone, faEnvelope
)

Vue.component('fa-icon', FontAwesomeIcon)