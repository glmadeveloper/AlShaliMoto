<template>
  <div>
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            {{
              locale == "en"
                ? commonObj?.header_text_en
                : commonObj?.header_text_ar
            }}
            <NuxtLink to="/contactus" class="btn-started">{{
              locale == "en"
                ? commonObj?.header_button_text_en
                : commonObj?.header_button_text_ar
            }}</NuxtLink>
          </div>
          <div class="col-sm-6">
            <div class="address-info">
              <i class="fa-solid fa-location-dot"></i> {{ $t("headOffice") }}:
              {{ commonObj?.address }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img :src="commonObj?.header_logo" class="img-fluid" alt="" />
        </NuxtLink>

        <div
          class="navbar-collapse"
          :class="!visible ? 'collapse' : ''"
          id="navbarSupportedContent"
        >
          <div>
            <button
              class="navbar-toggler navbar-toggler-mb"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="visible = !visible"
            >
              <img
                src="@/assets/images/icon-close.png"
                class="img-fluid"
                alt=""
              />
            </button>
            <NuxtLink class="navbar-brand navbar-brand-mb" to="/">
              <img
                src="@/assets/images/logo-white.png"
                class="img-fluid"
                alt=""
              />
            </NuxtLink>
          </div>
          <ul class="navbar-nav m-auto">
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :class="{ active: isActive('index') }"
                to="/"
                @click="visible = !visible"
                >{{ $t("home") }}</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :class="{ active: isActive('aboutus') }"
                to="/aboutus"
                @click="visible = !visible"
                >{{ $t("aboutus") }}</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :class="{ active: isActive('products') }"
                to="products"
                @click="visible = !visible"
                >{{ $t("products") }}</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                class="nav-link"
                :class="{ active: isActive('contactus') }"
                to="/contactus"
                @click="visible = !visible"
                >{{ $t("contactus") }}</NuxtLink
              >
            </li>
          </ul>
          <div class="header-right ms-auto">
            <div class="header-contact">
              <a :href="`tel:${commonObj?.phone_number}`" class="contact-phone"
                >+{{ commonObj?.phone_number }}</a
              >
            </div>
            <div class="header-social">
              <a :href="`mailto:${commonObj?.email}`" class="contact-email"
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
        <div class="dropdown d-flex ms-auto">
          <a
            class="btn-lang dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ lang }}
          </a>

          <ul
            class="dropdown-menu dropdown-menu-lang"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <NuxtLink
                class="dropdown-item"
                to=""
                @click="() => onClickLang('en')"
                >EN</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="dropdown-item"
                to=""
                @click="() => onClickLang('ar')"
                >AR</NuxtLink
              >
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="visible = !visible"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
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
      lang: localStorage.getItem("language") == "en" ? "EN" : "AR",
      locale: this.$i18n.locale,
      commonStore: useCommonStore(),
      visible: false,
    };
  },
  computed: {
    commonObj() {
      return this.commonStore.getCommon;
    },
  },
  mounted() {},
  methods: {
    onClickLang(language) {
      if (language == "ar") {
        localStorage.setItem("language", "ar");
        this.lang = "AR";
      } else {
        localStorage.setItem("language", "en");
        this.lang = "EN";
      }
      location.reload();
    },
  },
};
</script>
