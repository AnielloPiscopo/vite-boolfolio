import { reactive } from "vue";

export const store = reactive({
  getImgPath(imgPath) {
    return new URL("./assets/img/" + imgPath + ".png", import.meta.url).href;
  },

  upperCaseTheFirstLetter(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  },
});
