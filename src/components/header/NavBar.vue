<script>
import { store } from "../../store";

export default {
  name: "HeaderNavBar",

  data() {
    return {
      store,
      navLinks: [
        {
          name: "home",
          icon: ["fas", "fa-home"],
        },

        {
          name: "profile",
          icon: ["far", "fa-user"],
        },

        {
          name: "skills",
          icon: ["far", "fa-file-alt"],
        },

        {
          name: "projects",
          icon: ["far", "fa-file-image"],
        },

        {
          name: "experiences",
          icon: ["fas", "fa-briefcase"],
        },

        {
          name: "contact",
          icon: ["far", "fa-paper-plane"],
        },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link
          v-for="navLink in navLinks"
          :to="{ name: navLink.name }"
          :title="
            'Raggiungi la sezione ' +
            store.upperCaseTheFirstLetter(navLink.name)
          "
        >
          <font-awesome-icon :icon="navLink.icon" />
          <span>{{ store.upperCaseTheFirstLetter(navLink.name) }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
