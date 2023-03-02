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
  <section class="my_projects-container container">
    <ProjectCard
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
