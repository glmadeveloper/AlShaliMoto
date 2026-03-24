<template>
  <div>

    <Head v-if="homeObj">
      <Title>{{ typeof homeObj?.meta_title !== undefined ? homeObj?.meta_title : "" }}</Title>
      <Meta name="description"
        :content="typeof homeObj?.meta_description !== undefined ? homeObj?.meta_description : ''" />
    </Head>
    <HomeHeroSlider :homeObj="homeObj" :locale="locale" />
    <HomeAbout :homeObj="homeObj" :locale="locale" />
    <HomeTestimonial :homeObj="homeObj" :locale="locale" />
    <HomeSlider :homeObj="homeObj" :locale="locale" />
    <HomeBenefits :homeObj="homeObj" :locale="locale" />
    <HomeSubscribe :homeObj="homeObj" :locale="locale" />
  </div>
</template>

<script>
import { useHomeStore } from "../store/modules/home";

export default {
  layout: "default",
  data() {
    return {
      locale: this.$i18n.locale,
      homeStore: useHomeStore(),
    };
  },
  computed: {
    homeObj() {
      //console.log("!!!!", this.homeStore.getHome);
      return this.homeStore?.getHome;
    },
  },
  mounted() {
    this.fetchHome();
  },
  methods: {
    fetchHome() {
      this.homeStore.fetchHome();
    },
  },
};
</script>
