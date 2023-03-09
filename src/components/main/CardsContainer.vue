<script>
import SingleCard from "./SingleCard.vue";

export default {
  name: "ContactsContainer",

  components: {
    SingleCard,
  },

  props: {
    objsList: {
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
      v-for="obj,index in objsList" :key="index"
      :cardInfos="obj"
      :cardClass="cardClass"
    />
  </div>
</template>

<style lang="scss"></style>
