<script>
import { store } from "../../../store";

export default {
  name: "MainContent",

  data() {
    return {
      store,
      icons: [
        {
          link: "https://www.linkedin.com/in/aniello-piscopo-77ba04269/",
          icon: ["fab", "fa-linkedin-in"],
          message: "Linkedin",
        },

        {
          link: "https://github.com/AnielloPiscopo",
          icon: ["fab", "fa-github"],
          message: "Github",
        },

        {
          link: `mailto:${store.personalEmail}`,
          icon: ["far", "fa-envelope"],
          message: "email:",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="my_main-content">
    <div class="my_upper-part d-flex">
      <img
        :src="store.getImgPath('profileImg')"
        alt=""
        class="img-fluid text-center"
      />
      <div class="my_icons-container">
        <a :href="icon.link" v-for="icon in icons" target="_blank"
          ><font-awesome-icon :icon="icon.icon"
        /></a>
      </div>
    </div>
    <p class="my_lower-part">
      Ciao,sono Aniello Piscopo,un ragazzo con buone skills informatiche e alte
      abilità organizzative che recentemente ha sviluppato una passione per
      l'informatica e a causa di ciò ho deciso di seguire la strada per
      diventare programmatore . Adoro spendere tempo ad aggiustare e curare
      piccoli dettagli. Questo è il mio sito web ufficiale dedicato a mostrare
      chi sono e tutti i miei progetti futuri.
    </p>
  </div>
</template>

<style lang="scss"></style>
