import Vue from "vue";
import VueRouter from "vue-router";
// bizdev page
import Dashboard from "../views/pages/bizdev/Dashboard.vue";
import TalentList from "../views/pages/bizdev/TalentList.vue";
import RequestList from "../views/pages/bizdev/RequestList.vue";
import TalentOnJob from "../views/pages/bizdev/TalentOnJob.vue";
import ContractHistory from "../views/pages/bizdev/ContractHistory.vue";
// recruiter page
import Home from "../views/pages/recruiter/Home.vue";
import MyTalent from "../views/pages/recruiter/MyTalent.vue";
import MyCart from "../views/pages/recruiter/MyCart.vue";
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
    path: "/admin/contract-history",
    name: "Contract History",
    component: ContractHistory,
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
    path: "/my-cart",
    name: "My Cart",
    component: MyCart,
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
    name: "Sign Up",
    component: () => import("../views/pages/Register.vue"),
    meta: {
      full: true,
    },
  },
  {
    path: "/login",
    name: "Sign In",
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
