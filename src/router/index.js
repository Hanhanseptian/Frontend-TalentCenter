import Vue from "vue";
import VueRouter from "vue-router";
// bizdev page
import Dashboard from "../views/pages/admin/Dashboard.vue";
import TalentList from "../views/pages/admin/TalentList.vue";
import RequestList from "../views/pages/admin/RequestList.vue";
import TalentOnJob from "../views/pages/admin/TalentOnJob.vue";
import TerminateHistory from "../views/pages/admin/TerminateHistory.vue";
import ManageUser from "../views/pages/admin/ManageUser.vue";
// recruiter page
import Home from "../views/pages/recruiter/Home.vue";
import MyTalent from "../views/pages/recruiter/MyTalent.vue";
// talent
import ProfileTalent from "../views/pages/talent/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing Page",
    component: () => import("../views/pages/LandingPage.vue"),
    meta: {
      full: true,
      access: 1,
    },
  },
  // admin
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/admin/talent-list",
    name: "Talent List",
    component: TalentList,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/admin/request-list",
    name: "Request List",
    component: RequestList,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/admin/talent-on-job",
    name: "Talent on Job",
    component: TalentOnJob,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/admin/terminate-history",
    name: "Terminate History",
    component: TerminateHistory,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/admin/manage-user",
    name: "Manage User",
    component: ManageUser,
    meta: {
      full: false,
      access: 1,
    },
  },
  // bizdev
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      full: false,
      access: 2,
    },
  },
  {
    path: "/my-talent",
    name: "My Talent",
    component: MyTalent,
    meta: {
      full: false,
      access: 2,
    },
  },
  // talent
  {
    path: "/talent-profile",
    name: "Profile Talent",
    component: ProfileTalent,
    meta: {
      full: false,
      access: 3,
    },
  },
  // all user
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
