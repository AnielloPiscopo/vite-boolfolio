<script>
export default {
  name: "PagesTitle",

  props: {
    pageTitle: {
      type: String,
      required: true,
    },

    pageSubtitle: {
      type: String,
      required: false,
    },

    specialWords: {
      type: Array,
      required: false,
    },
  },
};
</script>

<template>
  <div class="my_header">
    <h2 class="my_title text-uppercase">{{ pageTitle }}</h2>
    <div class="my_subtitle">{{ pageSubtitle }}</div>
  </div>
</template>

<style lang="scss"></style>
