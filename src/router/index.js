import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AddContactView from '../views/AddContactView.vue'
import { PATH_TO_ROOT } from '../config.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATH_TO_ROOT + '/',
      name: 'home',
      alias: '/contacts',
      component: HomeView,
      // meta: {
        // contactDeleted: false,
      // }
    },
    {
      path: PATH_TO_ROOT + '/contacts/:id',
      name: 'contact',
      component: ContactView
    },
    {
      path: PATH_TO_ROOT + '/add-contact',
      name: 'add-contact',
      component: AddContactView
    },
    // {
    //   path: PATH_TO_ROOT+'/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router