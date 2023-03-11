<script>
import SectionsHeader from "../components/main/SectionsHeader.vue";

export default {
  name: "ProfilePage",

  components: {
    SectionsHeader,
  },

  data() {
    return {
      title: "Profilo",
      subtitle: `Ciao sono uno studente Boolean`,
      specialWords: ["Boolean"],
    };
  },
};
</script>

<template>
  <SectionsHeader
    :title="title"
    :subtitle="subtitle"
    :specialWords="specialWords"
  />
</template>

<style lang="scss"></style>
