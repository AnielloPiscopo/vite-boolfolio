<script>
export default {
  name: "HeaderNavBar",
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
