<script>
import SingleProject from "./SingleProject.vue";

export default {
  name: "MainProjectsContainer",

  components: {
    SingleProject,
  },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <section class="my_projects-container container">
    <SingleProject
      v-for="project in projects"
      :projectDescription="project.description"
      :projectTitle="project.title"
      :projectTechnologies="project.technologies"
      :projectType="project.type"
      :projectImgPath="project.img_path"
    />
  </section>
</template>

<style lang="scss" scoped></style>
