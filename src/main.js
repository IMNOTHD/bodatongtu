import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routers from "@/router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false;

Vue.use(VueClipboard)
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
    mode: 'history',
    routes: routers
});

const vuetify = new Vuetify({});

new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
});
