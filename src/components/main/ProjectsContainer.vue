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
          v-for="project in projects"
          :projectDescription="project.description"
          :projectTitle="project.title"
          :projectTechnologies="project.technologies"
          :projectType="project.type"
          :projectImgPath="project.img_path"
          :projectSlug="project.slug"
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
