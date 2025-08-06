import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useAboutUsStore = defineStore("aboutus", {
  state: () => ({
    aboutusObj: null,
  }),
  getters: {
    getAboutUs(state) {
      return state.aboutusObj;
    },
  },
  actions: {
    async fetchAboutUs() {
      try {
        const res = await API.get("/get-cms-page?id=2");

        this.aboutusObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
