<script>
import axios from "axios";
import ProjectsContainer from "./main/ProjectsContainer.vue";

export default {
  name: "AppMain",

  components: {
    ProjectsContainer,
  },

  data() {
    return {
      apiUrl: "http://127.0.0.1:8000/api/projects",
      currentPage: 10,
      projectsList: [],
    };
  },

  methods: {
    getProjectsInfo() {
      axios
        .get(this.apiUrl, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.projectsList = response.data.results.data;
          console.log(this.projectsList);
        });
    },
  },

  created() {
    this.getProjectsInfo();
  },
};
</script>

<template>
  <main>
    <ProjectsContainer :projects="projectsList" />
  </main>
</template>

<style lang="scss" scoped></style>
