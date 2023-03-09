import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/projects",

  apiToken:
    "miZWgF23y9KTySPWshzFWH0RZbxqbVBylab9KCwfrZsuYehlXGPG4CY1Nm63h2nM2TvPysQQQRJRZviqd42PEGL1UFZ3dtAyCWDq",

  getImgPath(imgPath) {
    return new URL("./assets/img/" + imgPath + ".png", import.meta.url).href;
  },

  upperCaseTheFirstLetter(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  },
});
