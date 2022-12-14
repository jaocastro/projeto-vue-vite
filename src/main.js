import { createApp } from 'vue'
import router from './router.js'
import '@/style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import icons from './fontawesome.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from "axios";

library.add({ ...icons })

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.config.globalProperties.$axios = axios
app.provide('axios', axios)
app.use(router)
app.mount('#app')
