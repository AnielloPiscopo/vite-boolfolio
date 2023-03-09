<script>
import SingleCard from "./SingleCard.vue";

export default {
  name: "ContactsContainer",

  components: {
    SingleCard,
  },

  props: {
    cardsInfos: {
      type: Array,
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
  <div class="my_cards-container">
    <SingleCard
      v-for="(cardInfos, index) in cardsInfos"
      :key="index"
      :cardInfos="cardInfos"
      :cardClass="cardClass"
    />
  </div>
</template>

<style lang="scss"></style>
