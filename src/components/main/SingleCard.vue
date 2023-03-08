<script>
export default {
  name: "SingleCard",

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
  <article class="my_card" :class="cardClass">
    <font-awesome-icon :icon="cardInfos.mainIcon" v-if="cardInfos.mainIcon" />
    <h3>{{ cardInfos.name }}</h3>
    <span>{{ cardInfos.detail }}</span>
  </article>
</template>

<style lang="scss"></style>
