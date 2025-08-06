import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useCommonStore = defineStore("common", {
  state: () => ({
    commonObj: null,
  }),
  getters: {
    getCommon(state) {
      return state.commonObj;
    },
  },
  actions: {
    async fetchCommon() {
      try {
        const res = await API.get("/get-system-configuration");

        this.commonObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
