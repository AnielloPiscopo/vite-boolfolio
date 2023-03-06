import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import SkillsPage from "./pages/SkillsPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import SingleProjectPage from "./pages/SingleProjectPage.vue";
import ExperiencesPage from "./pages/ExperiencesPage.vue";
import ContactPage from "./pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },

    {
      path: "/skills",
      name: "skills",
      component: SkillsPage,
    },

    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },

    {
      path: "/projects/:slug",
      name: "project",
      component: SingleProjectPage,
    },

    {
      path: "/experiences",
      name: "experiences",
      component: ExperiencesPage,
    },

    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
  ],
});

export { router };
