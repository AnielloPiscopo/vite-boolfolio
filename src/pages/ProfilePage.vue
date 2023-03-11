<script>
import SectionsHeader from "../components/main/SectionsHeader.vue";
import MainContent from "../components/main/profile/MainContent.vue";
import SingleList from "../components/main/SingleList.vue";

export default {
  name: "ProfilePage",

  components: {
    SectionsHeader,
    MainContent,
    SingleList,
  },

  data() {
    return {
      title: "Profilo",
      subtitle: `Ciao sono uno studente Boolean`,
      specialWords: ["Boolean"],
      profileElementsClass: "my_profile-el",
      profileDetails: [
        {
          name: "Nome",
          value: "Aniello",
        },

        {
          name: "Cognome",
          value: "Piscopo",
        },

        {
          name: "Compleanno",
          value: "12/01/2003",
        },

        {
          name: "Nazione",
          value: "Italia",
        },

        {
          name: "Città",
          value: "Casoria",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="profile">
    <SectionsHeader
      :title="title"
      :subtitle="subtitle"
      :specialWords="specialWords"
    />
    <MainContent />
    <SingleList :listClass="profileElementsClass" :listInfos="profileDetails" />
  </section>
</template>

<style lang="scss"></style>
