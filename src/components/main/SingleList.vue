<script>
export default {
  name: "SingleList",

  props: {
    listInfos: {
      type: Object,
      required: false,
    },

    listClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <h3>{{ listInfos.name }}</h3>
  <ul :class="listClass">
    <li v-for="(listEl, index) in listInfos.content" :key="index">
      {{ listEl.name }}
    </li>
  </ul>
</template>

<style lang="scss"></style>
