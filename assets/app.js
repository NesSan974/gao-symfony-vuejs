/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// start the Stimulus application
import './bootstrap';



import Vue from 'vue'
import Router from './router.js'
import Layout from './components/layout.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify) 

const app = new Vue({
	el: '#main',
	vuetify: new Vuetify({}),
	router: Router,
	components: {Layout}
})

export default new Vuetify(app)