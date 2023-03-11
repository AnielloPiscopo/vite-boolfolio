<script>
export default {
  name: "SectionsHeader",

  props: {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
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
    <h2 class="my_title text-uppercase">{{ title }}</h2>
    <div class="my_subtitle text-uppercase">{{ subtitle }}</div>
  </div>
</template>

<style lang="scss"></style>
