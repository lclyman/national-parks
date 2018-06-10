import Vue from 'vue'
import Router from 'vue-router'
import Parks from '@/components/Parks'
import AddPark from '@/components/AddPark'
import ParkDetails from '@/components/ParkDetails'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Parks},
    {path: '/parks', name: 'Parks', component: Parks},
    {path: '/addPark', name: 'Add Park', component: AddPark},
    {path: '/parkDetails', name: 'Park Details', component: ParkDetails}
  ]
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.configure({ easing: 'ease', speed: 500 });
      NProgress.configure({ showSpinner: false });
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
