<script>
export default {
  name: "SingleList",

  props: {
    listInfos: {
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
  <h3 v-if="listInfos.name">{{ listInfos.name }}</h3>
  <ul :class="listClass" v-if="listInfos.content">
    <li v-for="(listEl, index) in listInfos.content" :key="index">
      {{ listEl.name }}
    </li>
  </ul>

  <ul v-else>
    <li v-for="(listEl, index) in listInfos">
      <span>{{ listEl.name }}:</span>
      <span>{{ listEl.value }}</span>
    </li>
  </ul>
</template>

<style lang="scss"></style>
