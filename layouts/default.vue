<template>
  <div>
    <header class="header">
      <Navbar />
    </header>
    <main>
      <slot />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";

import { useCommonStore } from "../store/modules/common";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      locale: this.$i18n.locale,
      commonStore: useCommonStore(),
    };
  },
  computed: {},
  mounted() {
    this.fetchCommon();
  },
  methods: {
    fetchCommon() {
      this.commonStore.fetchCommon();
    },
  },
};
</script>
