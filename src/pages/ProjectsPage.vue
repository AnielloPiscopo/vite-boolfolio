<script>
import { store } from "../store";
import axios from "axios";
import SectionsHeader from "../components/main/SectionsHeader.vue";
import ProjectsContainer from "../components/main/projects/ProjectsContainer.vue";
import ProjectsBtnsContainer from "../components/main/projects/BtnsContainer.vue";

export default {
  name: "ProjectsPage",

  components: {
    SectionsHeader,
    ProjectsContainer,
    ProjectsBtnsContainer,
  },

  data() {
    return {
      title: "Progetti",
      store,
      projectsList: [],
      currentPage: 1,
      numOfPages: 10,
      apiUrlSpecificSection: "projects",
    };
  },

  methods: {
    getProjectsInfo() {
      axios
        .get(this.store.apiUrl + this.apiUrlSpecificSection, {
          params: {
            page: this.currentPage,
            api_token: this.store.apiToken,
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
  <section id="projects" class="container p-5">
    <SectionsHeader :title="title" />
    <ProjectsContainer :projects="projectsList" />
    <ProjectsBtnsContainer @prev="previousPage()" @next="nextPage()" />
  </section>
</template>

<style lang="scss"></style>
