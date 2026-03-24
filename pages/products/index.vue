<template>
  <div>

    <Head v-if="productObj">
      <Title>{{ typeof productObj?.meta_title !== 'undefined' ? productObj?.meta_title : "" }}</Title>
      <Meta name="description"
        :content="typeof productObj?.meta_description !== 'undefined' ? productObj?.meta_description : ''" />
    </Head>
    <ProductsContent :productObj="productObj" :locale="locale" />
  </div>
</template>

<script>
import { useProductsStore } from "../../store/modules/products";

export default {
  layout: "default",
  data() {
    return {
      locale: this.$i18n.locale,
      productsStore: useProductsStore(),
    };
  },
  computed: {
    productObj() {
      return this.productsStore.getProducts;
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.productsStore.fetchProducts();
    },
  },
};
</script>
