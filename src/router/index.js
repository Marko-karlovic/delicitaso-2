import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  // ovdje idu podstranice npr. Home,About,Login,Signup sto se vidi na vrhu (navigacijskom baru) stranice
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/nasiproizvodi',
    name: 'nasiproizvodi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NasiProizvodi.vue')
  },
  {
  path: '/obavijesti',
  name: 'obavijesti',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/Obavijesti.vue')
  },

  {
    path: '/registracija',
    name: 'registracija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registracija.vue')
    },
    {
      path: '/vina',
      name: 'vina',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Vina.vue')
      },
      {
        path: '/rakijeilikeri',
        name: 'rakijeilikeri',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Rakijeilikeri.vue')
        },
        {
          path: '/marmelade',
          name: 'marmelade',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/Marmelade.vue')
          },
          {
            path: '/mix',
            name: 'mix',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/Mix.vue')
            },
            {
              path: '/opisvina',
              name: 'opisvina',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ '../views/Opisvina.vue')
              }, 
              {
              path: '/opisvina2',
              name: 'opisvina2',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ '../views/Opisvina2.vue')
              },
              {
              path: '/opisvina3',
              name: 'opisvina3',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "about" */ '../views/Opisvina3.vue')
              },
              {
                path: '/opisvina4',
                name: 'opisvina4',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/Opisvina4.vue')
                },
                {
                  path: '/opisvina5',
                  name: 'opisvina5',
                  // route level code-splitting
                  // this generates a separate chunk (about.[hash].js) for this route
                  // which is lazy-loaded when the route is visited.
                  component: () => import(/* webpackChunkName: "about" */ '../views/Opisvina5.vue')
                  },
                  {
                    path: '/opisvina6',
                    name: 'opisvina6',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ '../views/Opisvina6.vue')
                    },
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
