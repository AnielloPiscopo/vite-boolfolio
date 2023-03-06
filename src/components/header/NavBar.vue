<script>
import { store } from "../../store";

export default {
  name: "HeaderNavBar",

  data() {
    return {
      store,
      navLinks: [
        "home",
        "profile",
        "skills",
        "projects",
        "experiences",
        "contact",
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
          :to="{ name: navLink }"
          :title="
            'Raggiungi la sezione ' + store.upperCaseTheFirstLetter(navLink)
          "
          >{{ store.upperCaseTheFirstLetter(navLink) }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
