<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectsContainer",

  components: {
    ProjectCard,
  },

  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="my_projects-container container p-5">
    <div class="row justify-content-center">
      <ProjectCard
        class="col-2 mb-5 mx-3"
        v-for="project in projects"
        :project="project"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
