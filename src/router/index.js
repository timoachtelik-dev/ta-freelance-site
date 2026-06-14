import Home from '../views/Home.vue'

// vite-ssg owns the router instance (it needs a memory history during the
// static build). We only export the route table + scroll behaviour. Each
// route carries a `seoKey` used by App.vue to resolve localized meta.
export const routes = [
  { path: '/', component: Home, meta: { seoKey: 'home' } },
  { path: '/services', component: () => import('../views/Services.vue'), meta: { seoKey: 'services' } },
  { path: '/about', component: () => import('../views/About.vue'), meta: { seoKey: 'about' } },
  { path: '/contact', component: () => import('../views/Contact.vue'), meta: { seoKey: 'contact' } },
  { path: '/impressum', component: () => import('../views/Imprint.vue'), meta: { seoKey: 'impressum' } },
  { path: '/datenschutz', component: () => import('../views/Privacy.vue'), meta: { seoKey: 'datenschutz' } },
]

export function scrollBehavior(to, from, savedPosition) {
  // Scroll to top when navigating to a new page.
  return savedPosition || { top: 0 }
}
