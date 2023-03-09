<script>
export default {
  name: "SingleList",

  props: {
    cardInfos: {
      type: Object,
      required: false,
    },

    cardClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <ul>
    <li></li>
  </ul>
</template>

<style lang="scss"></style>
