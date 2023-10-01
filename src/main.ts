import { createApp } from 'vue'
import App from './App.vue'
import './scss/common.scss'
// import './registerServiceWorker'
// import router from './router'
// import store from './store'
/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark, faRocket } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faXmark, faRocket)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    // .use(store)
    // .use(router)
    .mount('#app')
