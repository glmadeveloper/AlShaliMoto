<template>
  <div>
    <div class="footer-top">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-sm-4">
            <div class="footer-logo">
              <a href="#">
                <img :src="commonObj?.footer_logo" class="img-fluid" alt="" />
              </a>
            </div>
            <div class="mobile-footer-text">
              <p>
                {{
                  locale == "en"
                    ? commonObj?.footer_text_en
                    : commonObj?.footer_text_ar
                }}
              </p>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="contact-cta">
              <a :href="`tel:${commonObj?.phone_number}`" class="cta-phone"
                >+{{ commonObj?.phone_number }}</a
              >
            </div>
          </div>
          <div class="col-sm-5">
            <div class="social-network">
              <a :href="`mailto:${commonObj?.email}`" class="cta-email"
                ><i class="fa-solid fa-envelope"></i
              ></a>
              <NuxtLink :to="commonObj?.facebook" target="_blank"
                ><i class="fa-brands fa-facebook-f"></i
              ></NuxtLink>
              <NuxtLink :to="commonObj?.instagram" target="_blank"
                ><i class="fa-brands fa-instagram"></i
              ></NuxtLink>
              <NuxtLink :to="commonObj?.linkedin" target="_blank"
                ><i class="fa-brands fa-linkedin-in"></i
              ></NuxtLink>
              <NuxtLink :to="commonObj?.twitter" target="_blank"
                ><i class="fa-brands fa-x-twitter"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-middle">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="company-short-info">
              <p>
                {{
                  locale == "en"
                    ? commonObj?.footer_text_en
                    : commonObj?.footer_text_ar
                }}
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="footer-links">
              <h4>{{ $t("ourServices") }}</h4>
              <ul>
                <li>
                  <NuxtLink to="/" :class="{ active: isActive('index') }">{{
                    $t("home")
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/products"
                    :class="{ active: isActive('products') }"
                    >{{ $t("products") }}</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="aboutus"
                    :class="{ active: isActive('aboutus') }"
                    >{{ $t("aboutus") }}</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="contactus"
                    :class="{ active: isActive('contactus') }"
                    >{{ $t("contactus") }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="footer-links">
              <h4>{{ $t("openHours") }}</h4>
              <ul class="working-hours">
                <li>
                  {{
                    locale == "en"
                      ? commonObj?.opening_hours_text_en
                      : commonObj?.opening_hours_text_ar
                  }}
                </li>
                <li>{{ commonObj?.opening_hours_value }}</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="footer-links">
              <h4>{{ $t("subsidiaries") }}</h4>
              <ul>
                <li v-for="(brand, index) in commonObj?.brands" :key="index">
                  <NuxtLink to="/products">{{
                    locale == "en" ? brand?.name_en : brand?.name_ar
                  }}</NuxtLink>
                </li>
                <!-- <li><NuxtLink to="#">Al Shaali EV</NuxtLink></li>
                <li><NuxtLink to="#">CFMOTO</NuxtLink></li>
                <li><NuxtLink to="#">IXMOTO</NuxtLink></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="copyright">Copyright © 2024. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useCommonStore } from "../store/modules/common";
export default {
  setup() {
    const route = useRoute();

    const isActive = (name, params = {}) => {
      return (
        route.name === name &&
        Object.keys(params).every(key => route.params[key] === params[key])
      );
    };

    return {
      isActive,
    };
  },
  data() {
    return {
      locale: this.$i18n.locale,
      commonStore: useCommonStore(),
    };
  },
  computed: {
    commonObj() {
      return this.commonStore.getCommon;
    },
  },
  mounted() {},
};
</script>
