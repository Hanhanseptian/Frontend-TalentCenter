import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing Page",
    component: () => import("../views/pages/LandingPage.vue"),
    meta: {
      full: true,
    },
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: () => import("../views/pages/admin/Dashboard.vue"),
    meta: {
      full: false,
    },
  },
  {
    path: "/admin/talent-list",
    name: "Talent List",
    component: () => import("../views/pages/admin/TalentList.vue"),
    meta: {
      full: false,
    },
  },
  {
    path: "/admin/waiting-hired-list",
    name: "Waiting Hired List",
    component: () => import("../views/pages/admin/WaitingHiredList.vue"),
    meta: {
      full: false,
    },
  },
  {
    path: "/admin/talent-on-job",
    name: "Talent on Job",
    component: () => import("../views/pages/admin/TalentOnJob.vue"),
    meta: {
      full: false,
    },
  },
  {
    path: "/admin/manage-user",
    name: "Manage User",
    component: () => import("../views/pages/admin/ManageUser.vue"),
    meta: {
      full: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/pages/Register.vue"),
    meta: {
      full: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/pages/Login.vue"),
    meta: {
      full: true,
    },
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
