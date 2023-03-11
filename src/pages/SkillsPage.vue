<script>
import { store } from "../store";
import axios from "axios";
import SectionsHeader from "../components/main/SectionsHeader.vue";
import ListsContainer from "../components/main/ListsContainer.vue";

export default {
  name: "SkillsPage",

  components: {
    SectionsHeader,
    ListsContainer,
  },

  data() {
    return {
      store,
      title: "Skills",
      subtitle: "Abilità , Lingue e altro",
      specialWords: ["Abilità", "Lingue"],
      skillsElementsClass: "my_skills-el",
      skillsList: [],
      apiUrlSpecificSection: "skills",
    };
  },

  methods: {
    getSkillsList() {
      axios
        .get(this.store.apiUrl + this.apiUrlSpecificSection, {
          params: {
            api_token: this.store.apiToken,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          this.skillsList = response.data.results;
        });
    },
  },

  created() {
    this.getSkillsList();
  },
};
</script>

<template>
  <section id="skills" v-if="skillsList != 0">
    <SectionsHeader
      :title="title"
      :subtitle="subtitle"
      :specialWords="specialWords"
    />

    <ListsContainer :listsInfos="skillsList" :listClass="skillsElementsClass" />
  </section>
</template>

<style lang="scss"></style>
