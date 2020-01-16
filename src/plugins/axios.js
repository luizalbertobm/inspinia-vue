import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://tasks-manager-f044f.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})