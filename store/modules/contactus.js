import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useContactUsStore = defineStore("contactus", {
  state: () => ({
    contact: null,
    contactObj: null,
  }),
  getters: {
    addContact(state) {
      return state.contact;
    },
    getContactUs(state) {
      return state.contactObj;
    },
  },
  actions: {
    async post(data) {
      try {
        const res = await API.post("/add-contact", data);
        this.contact = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchContactUs() {
      try {
        const res = await API.get("/get-cms-page?id=4");

        this.contactObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
