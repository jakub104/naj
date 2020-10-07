import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faPhone, faEnvelope,
	faHome, faCarSide,
	faAngleRight, faAngleLeft, faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faPhone, faEnvelope,
	faHome, faCarSide,
	faAngleRight, faAngleLeft, faTimes
)

Vue.component('fa-icon', FontAwesomeIcon)