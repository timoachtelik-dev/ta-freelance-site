import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Imprint from '../views/Imprint.vue'
import Privacy from '../views/Privacy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/impressum', component: Imprint },
  { path: '/datenschutz', component: Privacy },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top when navigating to a new page
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})