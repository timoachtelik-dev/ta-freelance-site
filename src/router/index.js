import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
