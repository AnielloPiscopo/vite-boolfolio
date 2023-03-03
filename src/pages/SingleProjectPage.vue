<script>
import axios from "axios";
import ProjectCard from "../components/main/ProjectCard.vue";

export default {
  name: "SingleProjectPage",

  components: {
    ProjectCard,
  },

  data() {
    return {
      apiUrl: "http://127.0.0.1:8000/api/projects",
      project: null,
    };
  },

  methods: {
    getProjectInfo() {
      axios
        .get(this.apiUrl + `/${this.$route.params.slug}`, {
          params: {},
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
  <ProjectCard :project="project" :isShow="true" />
</template>

<style lang="scss"></style>
