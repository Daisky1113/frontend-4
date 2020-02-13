import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyASbfmG0W3USxYnUru77Wt2wHaLbEiBjaY",
  authDomain: "frontend-4.firebaseapp.com",
  databaseURL: "https://frontend-4.firebaseio.com",
  projectId: "frontend-4",
  storageBucket: "frontend-4.appspot.com",
  messagingSenderId: "421450411930",
  appId: "1:421450411930:web:6d09e3ef6a7828a8241423"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
