import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",

  apiToken:
    "CxOTGZtq90QwoeM2YwUtzla6aexoGBgKKk8NLalCDkx99hKPhyjMkYtOWnphDd4MxRljbLkrHtxeLrilrZYg2rX5QLiLoqAOC69z",

  personalEmail: "aniello.piscopo03@gmail.com",

  getImgPath(imgPath) {
    return new URL("./assets/img/" + imgPath + ".png", import.meta.url).href;
  },

  upperCaseTheFirstLetter(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  },
});
