import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/projects",
  apiToken:
    "LH8F6e4dED317Q6WrQVEPiTdk9kmfqjkbxOTazPP2BMSUjU1fl5ZkX3Ed9mQuoY5OUHIGYqcGzaREo0hLVJHymWtkhGauF5JCxu3",
  getImgPath(imgPath) {
    return new URL("./assets/img/" + imgPath + ".png", import.meta.url).href;
  },

  upperCaseTheFirstLetter(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  },
});
