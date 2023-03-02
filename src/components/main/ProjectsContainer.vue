<script>
export default {
  name: "MainProjectsContainer",

  props: {
    projectsList: Array,
  },
};
</script>

<template>
  <section class="my_projects-container container">
    <article v-for="project in projectsList">
      <div>{{ project }}</div>
    </article>
  </section>
</template>

<style lang="scss" scoped></style>
