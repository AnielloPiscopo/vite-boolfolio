<script>
import { store } from "../store";
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
      store,
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
          detail: store.personalEmail,
        },
      ],
    };
  },
};
</script>

<template>
  <section id="contact">
    <SectionsHeader
      :title="title"
      :subtitle="subtitle"
      :specialWords="specialWords"
    />

    <div class="my_body">
      <CardsContainer
        :cardsInfos="contactInfos"
        :cardClass="contactElementsClass"
      />
    </div>
  </section>
</template>

<style lang="scss"></style>
