import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AddContactView from '../views/AddContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/contacts',
      component: HomeView,
      // meta: {
        // contactDeleted: false,
      // }
    },
    {
      path: '/contacts/:id',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/add-contact',
      name: 'addContact',
      component: AddContactView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
