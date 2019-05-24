import Vue from 'vue'
import App from "./App.vue"


// import GeminiScrollbar from 'vue-gemini-scrollbar'

// Vue.use(GeminiScrollbar)



// new Vue({
//     render: h => h(App)
// }).$mount("#app")

new Vue({
    el:'#app',
    template:'<App/>',
    components:{App}
})