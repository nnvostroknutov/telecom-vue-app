import Vue from 'vue'
import Router from 'vue-router'

import MainWrapper from '../components/MainWrapper.vue'
import UserProfile from '../components/UserProfile.vue'
import ActionHistory from '../components/ActionHistory.vue'
import Transactions from '../components/Transactions.vue'
import Login from '../components/Login.vue'
import Cards from '../components/Cards.vue'

Vue.use(Router);

let router = new Router( {
    routes: [
        {
            path: '/home',
            name: 'home',
            component: MainWrapper,
            children: [
                {
                  path: 'profile',
                  component: UserProfile
                },
                {
                  path: 'actions',
                  component: ActionHistory
                },
                {
                    path: 'transactions',
                    component: Transactions
                },
                {
                  path: 'cards',
                  component: Cards
                }
              ]
        },
        {
            path: '/',
            name: 'login',
            component: Login
        }
    ]
});

export default router;