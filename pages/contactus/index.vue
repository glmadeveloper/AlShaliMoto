<template>
  <div>

    <Head v-if="contactusObj">
      <Title>{{ typeof contactusObj?.meta_title !== 'undefined' ? contactusObj?.meta_title : "" }}</Title>
      <Meta name="description"
        :content="typeof contactusObj?.meta_description !== 'undefined' ? contactusObj?.meta_description : ''" />
    </Head>
    <ContactUsHeading :contactusObj="contactusObj" :locale="locale" />
    <ContactUsContent :contactusObj="contactusObj" :commonObj="commonObj" :locale="locale" />
    <ContactUsMap />
  </div>
</template>

<script>
import { useContactUsStore } from "~/store/modules/contactus";
import { useCommonStore } from "~/store/modules/common";

export default {
  layout: "default",
  data() {
    return {
      locale: this.$i18n.locale,
      contactStore: useContactUsStore(),
      commonStore: useCommonStore(),
    };
  },
  computed: {
    commonObj() {
      return this.commonStore.getCommon;
    },
    contactusObj() {
      return this.contactStore.getContactUs;
    },
  },
  mounted() {
    this.fetchContactUs();
  },
  methods: {
    fetchContactUs() {
      this.contactStore.fetchContactUs();
    },
  },
};
</script>
