import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Recs from '../views/Recs.vue'
import Trains from '../views/Trains.vue'
import VideoTrains from '../views/VideoTrains.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Paper from '../views/Paper.vue'
import PaperDem from '../views/PaperDem.vue'
import PaperDia from '../views/Paperdia.vue'
import PaperArt from '../views/PaperArt.vue'
import Test from '../views/Tests.vue'
import Testresult from '../views/Testresullts.vue'
import Podpiska from '../views/Podpiska.vue'

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
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/paper',
    component: Paper
  },
  {
    path:'/paperdem',
    component: PaperDem
  },
  {
    path:'/paperdiabet',
    component: PaperDia
  },
  {
    path:'/paperartrit',
    component: PaperArt
  },
  {
    path:'/test',
    component: Test
  },
  {
    path:'/results',
    component: Testresult
  },
  {
    path:'/subscribe',
    component: Podpiska
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
