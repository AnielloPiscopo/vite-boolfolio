<script>
import { store } from "../store";
import axios from "axios";
import ProjectCard from "../components/main/projects/ProjectCard.vue";

export default {
  name: "SingleProjectPage",

  components: {
    ProjectCard,
  },

  data() {
    return {
      store,
      project: null,
    };
  },

  methods: {
    getProjectInfo() {
      axios
        .get(this.store.apiUrl + `/${this.$route.params.slug}`, {
          params: {
            api_token: this.store.apiToken,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          this.project = response.data.results;
        });
    },
  },

  created() {
    this.getProjectInfo();
  },
};
</script>

<template>
  <section id="single-project">
    <ProjectCard :project="project" :isShow="true" />
  </section>
</template>

<style lang="scss"></style>
