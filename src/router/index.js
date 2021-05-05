import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Recs from '../views/Recs.vue'
import Trains from '../views/Trains.vue'
import VideoTrains from '../views/VideoTrains.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/registration',
    name:'Registration',
    component: Register
  },
  {
    path:'/recomendation',
    name:'Recs',
    component: Recs
  },
  {
    path:'/trainings',
    component: Trains
  },
  {
    path:'/video',
    component: VideoTrains
  },
  {
    path:'/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
