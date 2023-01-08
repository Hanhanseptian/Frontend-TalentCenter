import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/pages/Dashboard.vue"),
  },
  {
    path: "/talent-list",
    name: "Talent List",
    component: () => import("../views/pages/TalentList.vue"),
  },
  {
    path: "/waiting-hired-list",
    name: "Waiting Hired List",
    component: () => import("../views/pages/WaitingHiredList.vue"),
  },
  {
    path: "/talent-on-job",
    name: "Talent on Job",
    component: () => import("../views/pages/TalentOnJob.vue"),
  },
  {
    path: "/manage-user",
    name: "Manage User",
    component: () => import("../views/pages/ManageUser.vue"),
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
