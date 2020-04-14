import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

Vue.use(Vuelidate)

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: 'AIzaSyBsZoOVBs7uTs9IeSPHS9jnyzpi7f7DLcc',
  authDomain: 'notes-d193c.firebaseapp.com',
  databaseURL: 'https://notes-d193c.firebaseio.com',
  projectId: 'notes-d193c',
  storageBucket: 'notes-d193c.appspot.com',
  messagingSenderId: '953796475319',
  appId: '1:953796475319:web:e64a5394bfee4aff74d032'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
