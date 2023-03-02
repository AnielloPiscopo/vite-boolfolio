<script>
import axios from "axios";

export default {
  name: "AppMain",

  components: {},

  data() {
    return {
      apiUrl: "http://127.0.0.1:8000/api/projects",
      apiCurrentPage: 1,
      projectsList: [],
    };
  },

  methods: {
    getProjectsInfo() {
      axios
        .get(this.apiUrl, {
          params: {
            page: 1,
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
  <main></main>
</template>

<style lang="scss" scoped></style>
