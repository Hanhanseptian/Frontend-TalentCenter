import Vue from "vue";
import VueRouter from "vue-router";

// BIZDEV PAGE
import Dashboard from "../views/pages/bizdev/Dashboard.vue";
import TalentList from "../views/pages/bizdev/TalentList.vue";
import RequestList from "../views/pages/bizdev/RequestList.vue";
import DetailRequestList from "../views/pages/bizdev/DetailRequestList.vue";
import TalentOnJob from "../views/pages/bizdev/TalentOnJob.vue";

// RECRUITER PAGE
import Home from "../views/pages/recruiter/Home.vue";
import MyTalent from "../views/pages/recruiter/MyTalent.vue";
import MarkedTalent from "../views/pages/recruiter/MarkedTalent.vue";

// TALENT PAGE
import MyProfile from "../views/pages/talent/MyProfile.vue";

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
  // BIZDEV ROUTES
  {
    path: "/bizdev/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/bizdev/talent-list",
    name: "Talent List",
    component: TalentList,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/bizdev/request-list",
    name: "Request List",
    component: RequestList,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/bizdev/detail-request-list",
    name: "Request List",
    component: DetailRequestList,
    meta: {
      full: false,
      access: 1,
    },
  },
  {
    path: "/bizdev/talent-on-job",
    name: "Talent on Job",
    component: TalentOnJob,
    meta: {
      full: false,
      access: 1,
    },
  },

  // RECRUITER ROUTES
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
    path: "/marked-talent",
    name: "Marked Talent",
    component: MarkedTalent,
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

  // TALENT ROUTES
  {
    path: "/talent-profile",
    name: "Profile Talent",
    component: MyProfile,
    meta: {
      full: false,
      access: 3,
    },
  },

  // ALL USER
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
  {
    path: "/error-404",
    name: "Error 404",
    component: () => import("../views/pages/Error404.vue"),
    meta: {
      full: true,
    },
  },
  {
    path: "*",
    redirect: "error-404",
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
