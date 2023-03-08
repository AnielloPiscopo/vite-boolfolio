<script>
import SectionsHeader from "../components/main/SectionsHeader.vue";
import CardsContainer from "../components/main/CardsContainer.vue";

export default {
  name: "ContactPage",

  components: {
    SectionsHeader,
    CardsContainer,
  },

  data() {
    return {
      title: "Area Contatti",
      subtitle: `Rimaniamo in contatto`,
      specialWords: ["contatto"],
      contactElementsClass: "my_contact-card",
      contactInfos: [
        {
          mainIcon: ["fas", "fa-phone-square-alt"],
          name: "Il mio numero",
          detail: "+39 379 284 0262",
        },

        {
          mainIcon: ["fas", "fa-envelope-square"],
          name: "La mia email",
          detail: "aniello.piscopo0707@gmail.com",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="contact">
    <SectionsHeader
      :pageTitle="title"
      :pageSubtitle="subtitle"
      :specialWords="specialWords"
    />

    <div class="my_body">
      <CardsContainer
        :objsList="contactInfos"
        :cardClass="contactElementsClass"
      />
    </div>
  </section>
</template>

<style lang="scss"></style>
