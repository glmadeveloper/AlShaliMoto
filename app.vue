<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale,
    };
  },
  created() {
    let htmlEl = document.querySelector("html");
    this.locale == "ar"
      ? htmlEl.setAttribute("dir", "rtl")
      : htmlEl.setAttribute("dir", "ltr");
    this.locale == "ar"
      ? htmlEl.setAttribute("lang", "ar")
      : htmlEl.setAttribute("lang", "en");
  },
};
</script>
