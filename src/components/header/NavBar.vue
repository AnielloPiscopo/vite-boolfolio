<script>
export default {
  name: "HeaderNavBar",

  data() {
    return {
      navLinks: ["home", "projects"],
    };
  },
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link v-for="navLink in navLinks" :to="{ name: navLink }">{{
          navLink.toLocaleUpperCase()
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
