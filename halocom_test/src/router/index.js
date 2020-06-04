import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ListView = () => import('../views/ListView.vue')
const ItemView = () => import('../views/ItemView.vue')
const Login = () => import('../views/Login.vue')

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/item/:id(\\d+)', name: 'item', component: ItemView },
            { path: '/', name: '', component: ListView },
            { path: '/login', name: 'login', component: Login },
        ]
    })
}
