import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/projects",

  apiToken:
    "rUP2SKAw6OdXkU8hkm3nhiTilBcAzk0Vxd8qZBHyPD25ECh3qzU1KAYWCNpkdpaHphWZR2kxtmsGTnivHq8zJcnYORZA4C8tUhJN",

  getImgPath(imgPath) {
    return new URL("./assets/img/" + imgPath + ".png", import.meta.url).href;
  },

  upperCaseTheFirstLetter(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  },
});
