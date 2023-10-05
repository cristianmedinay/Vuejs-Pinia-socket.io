import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { private: false }
    },
    {
      path: '/about',
      name: 'about',
      meta: { private: false },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      meta: { private: true },
      component: () => import('../views/ChatHome.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { private: false },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { private: true },
      component: () => import('../views/Dashboard.vue')
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const auth = localStorage.getItem('myCat');
  const needAuth = to.meta.private
 
  if((to.path != "/login") && (needAuth && !auth)){
      next({path:'login'})
  }else{
      next()
  }
})

export default router
