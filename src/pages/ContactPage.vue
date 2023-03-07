<script>
import SectionsHeader from "../components/main/SectionsHeader.vue";

export default {
  name: "ContactPage",

  components: {
    SectionsHeader,
  },

  data() {
    return {
      title: "Area Contatti",
      subtitle: `Rimaniamo in contatto`,
      specialWords: ["contatto"],
    };
  },
};
</script>

<template>
  <section id="contact">
    <SectionsHeader
      :pageTitle="title"
      :pageSubtitle="subtitle"
      :specialWords="specialWords"
    />
  </section>
</template>

<style lang="scss"></style>
