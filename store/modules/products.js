import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useProductsStore = defineStore("products", {
  state: () => ({
    productsObj: [],
  }),
  getters: {
    getProducts(state) {
      return state.productsObj;
    },
  },
  actions: {
    async fetchProducts() {
      try {
        const res = await API.get("/get-cms-page?id=3");

        this.productsObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
