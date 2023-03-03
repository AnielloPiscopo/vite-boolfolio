<script>
import axios from "axios";
import ProjectsContainer from "../components/main/ProjectsContainer.vue";

export default {
  name: "ProjectsPage",

  components: {
    ProjectsContainer,
  },

  data() {
    return {
      apiUrl: "http://127.0.0.1:8000/api/projects",
      projectsList: [],
      currentPage: 1,
      numOfPages: 10,
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
          console.log(response.data.results);
          this.projectsList = response.data.results.data;
        });
    },

    previousPage() {
      this.currentPage =
        this.currentPage <= 1 ? this.numOfPages : this.currentPage - 1;
      this.getProjectsInfo();
    },

    nextPage() {
      this.currentPage =
        this.currentPage >= this.numOfPages ? 1 : this.currentPage + 1;
      this.getProjectsInfo();
    },
  },

  created() {
    this.getProjectsInfo();
  },
};
</script>

<template>
  <ProjectsContainer
    :projects="projectsList"
    @prev="previousPage()"
    @next="nextPage()"
  />
</template>

<style lang="scss"></style>
