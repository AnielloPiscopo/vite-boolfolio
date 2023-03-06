<script>
import PagesTitle from "../components/main/PagesHeader.vue";

export default {
  name: "ContactPage",

  components: {
    PagesTitle,
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
    <PagesTitle
      :pageTitle="title"
      :pageSubtitle="subtitle"
      :specialWords="specialWords"
    />
  </section>
</template>

<style lang="scss"></style>
