import {createRouter,createWebHistory} from 'vue-router';
import DashBoard  from '../pages/DashBoard'

const routes  = [
  {
   path:"/dashboard",
   component:DashBoard,
   name:"Dashboard"
  }

];

const router = createRouter({
    routes,
    history:createWebHistory()
});

export default router;
