<template>
  <div>

    <Head v-if="aboutusObj">
      <Title>{{ typeof aboutusObj?.meta_title !== undefined ? aboutusObj?.meta_title : "" }}</Title>
      <Meta name="description"
        :content="typeof aboutusObj?.meta_description !== undefined ? aboutusObj?.meta_description : ''" />
    </Head>
    <AboutUsHeading :aboutusObj="aboutusObj" :locale="locale" />
    <AboutUsInfo :aboutusObj="aboutusObj" :locale="locale" />
    <AboutUsMissionVision :aboutusObj="aboutusObj" :locale="locale" />
    <AboutUsOwners :aboutusObj="aboutusObj" :locale="locale" />
    <AboutUsLocations :aboutusObj="aboutusObj" :locale="locale" />
    <AboutUsSubscribe :aboutusObj="aboutusObj" :locale="locale" />
    <AboutUsFeatures :aboutusObj="aboutusObj" :locale="locale" />
  </div>
</template>

<script>
import { useAboutUsStore } from "../../store/modules/aboutus";
export default {
  layout: "default",
  data() {
    return {
      locale: this.$i18n.locale,
      aboutusStore: useAboutUsStore(),
    };
  },
  computed: {
    aboutusObj() {
      return this.aboutusStore.getAboutUs;
    },
  },
  mounted() {
    this.fetchAboutUs();
  },
  methods: {
    fetchAboutUs() {
      this.aboutusStore.fetchAboutUs();
    },
  },
};
</script>
