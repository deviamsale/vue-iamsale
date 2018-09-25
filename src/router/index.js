import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/index'
import AliasPage from '@/pages/alias'
import CheckOut from '@/components/product/checkout'
import Cart from '@/components/product/cart'

import User from '@/components/user/index'
import ChangePassword from '@/components/user/change-password'
import Login from '@/components/user/login'
import Register from '@/components/user/register'
import Profile from '@/components/user/profile'
import UserOrder from '@/components/user/order'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
          path : '/check-out',
          name : 'checkout',
          component : CheckOut
        },
        {
            path : '/login',
            name : 'Login',
            component : Login
        },
        {
            path : '/register',
            name : 'Register',
            component : Register
        },
        {
           path : '/dashboard',
           name : 'dashboard',
           component : User,
            children : [
                {
                    path : '/',
                    name : 'profile',
                    component : Profile
                },
                {
                    path : 'change-password',
                    name : 'change-password',
                    component : ChangePassword
                },
                {
                    path : 'orders',
                    name : 'orders',
                    component : UserOrder
                }
            ]
        },
        {
            path : '/cart',
            name : 'cart',
            component : Cart
        },
        {
            path: '/:alias',
            name : 'alias',
            component : AliasPage,
        },
    ],
    mode: 'history',
    history: true ,
})
