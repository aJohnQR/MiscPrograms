import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";

Vue.use(Router);

// export default new Router({
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/About/About.vue")
    },
    {
      path: "/EventPage",
      name: "EventPage",
      component: () => import("./views/EventPage/EventPage.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const loggedOutSetOfPages = ['/', '/about'];
  const loginRequired = !loggedOutSetOfPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');
  
  if (loginRequired && !loggedIn) {
    return next('/');
  } 

  next();
})

export default router;