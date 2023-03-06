<script>
import LogoContainer from "./header/LogoContainer.vue";
import NavBar from "./header/NavBar.vue";

export default {
  name: "AppHeader",

  components: {
    LogoContainer,
    NavBar,
  },
};
</script>

<template>
  <header>
    <LogoContainer />
    <NavBar />
  </header>
</template>

<style lang="scss"></style>
