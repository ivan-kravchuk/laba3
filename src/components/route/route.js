import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router)

import Blog from '../Views/Blog.vue'
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Blog
        }
    ]
})

