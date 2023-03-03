<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "MainProjectsContainer",

  components: {
    ProjectCard,
  },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <section id="projects-list" class="container p-5">
    <div class="my_projects-container container p-5">
      <div class="row justify-content-center">
        <ProjectCard
          class="col-2 mb-5 mx-3"
          v-for="project in projects"
          :project="project"
        />
      </div>
    </div>

    <div class="my_btns-container d-flex justify-content-around pt-4">
      <a href="#" class="my_btn btn btn-primary" @click="$emit('prev')">Prev</a>
      <a href="#" class="my_btn btn btn-primary" @click="$emit('next')">Next</a>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
