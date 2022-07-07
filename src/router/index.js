/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout/Index.vue';

Vue.use(Router);


const constantRouter = [
  {
    path: '/', // home
    redirect: '/',
    component: Layout,
    children: [
      { // 
        path: "/",
        name: "Home",
        meta: {
          
        },
        component: () => import("@/views/Home/Index.vue"),
      },
      { // 
        path: "/Overview",
        name: "Overview",
        meta: {
          HeaderDark: true
        },
        component: () => import("@/views/Overview/Index.vue"),
      },
      { // 
        path: "/Protocols",
        name: "Protocols",
        meta: {
          HeaderDark: true
        },
        component: () => import("@/views/Protocols/Index.vue"),
      },
      { // 
        path: "/Join",
        name: "Join",
        meta: {
          HeaderDark: true,
          noFooter: true
        },
        component: () => import("@/views/Join/Index.vue"),
      },
      { // 
        path: "/Join/Edit",
        name: "JoinEdit",
        meta: {
          HeaderDark: true,
          noFooter: true
        },
        component: () => import("@/views/Join/Edit.vue"),
      },
      { // 
        path: "/ProtocolsDetails",
        name: "ProtocolsDetails",
        meta: {
          noFooter: true,
          HeaderDark: true
        },
        component: () => import("@/views/Protocols/ProtocolsDetails.vue"),
      },
      
    ],
  },
  {
    path: "/clearCache", // clearCache
    component: () => import("@/views/ClearStorage/ClearStorage"),
  },
  {
    path: "/clearStorage", // clearStorage
    component: () => import("@/views/ClearStorage/ClearStorage"),
  },
  {
    path: '*', 
    redirect: '/',
  },
];
const totalRouter = [...constantRouter];
export default new Router({
  base: '/',
  mode: 'history',
  routes: totalRouter,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
