<script>
import SingleList from "./SingleList.vue";

export default {
  name: "ListsContainer",

  components: {
    SingleList,
  },

  props: {
    listsInfos: {
      type: Array,
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
  <div class="my_lists-container">
    <SingleList
      v-for="(listInfos, index) in listsInfos"
      :key="index"
      :listInfos="listInfos"
      :listClass="listClass"
    />
  </div>
</template>

<style lang="scss"></style>
