<template>
  <div>
    <!-- Main Slider Start -->
    <section class="section-slider">
      <div class="container">
        <div class="mainSlider">
          <NuxtLink to="/products" class="link-viewall xyz-in"
            ><span
              class=""
              :xyz="
                activeFlag == true
                  ? 'fade ease-in up-75% '
                  : 'fade ease-in down-75%'
              "
            >
              {{ popularBrandName }}</span
            >
            <i class="fa-solid fa-arrow-right-long"></i
          ></NuxtLink>

          <div
            style="
              --swiper-navigation-color: #fff;
              --swiper-pagination-color: #fff;
            "
            class="swiper sliderBig"
          >
            <swiper
              class="swiper-wrapper"
              ref="mainSwiper"
              :loop="true"
              :speed="1000"
              :rtl="true"
              :parallax="true"
              @slideChange="onSlideChange"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiper }"
            >
              <swiper-slide
                class="swiper-slide"
                v-for="(brand, index) in popularBrands"
                :key="index"
              >
                <div class="row align-items-center">
                  <div class="col-sm-6 position-relative">
                    <h3 class="slider-watermark-title">
                      {{
                        locale == "en"
                          ? brand?.products[0]?.name_en
                          : brand?.products[0]?.name_ar
                      }}
                    </h3>
                    <div class="slider-content">
                      <h2
                        :class="{ 'xyz-in': activeIndex == index }"
                        :xyz="
                          activeFlag == true
                            ? 'fade ease-in left-25% duration-10'
                            : 'fade ease-in right-25% duration-10'
                        "
                      >
                        {{
                          locale == "en"
                            ? brand?.products[0]?.name_en
                            : brand?.products[0]?.name_ar
                        }}
                      </h2>
                      <h4>
                        {{
                          locale == "en"
                            ? brand?.product?.text_en
                            : brand?.product?.text_ar
                        }}
                      </h4>
                      <div
                        class="vehicle-specifications"
                        :class="{ 'xyz-in': activeIndex == index }"
                        :xyz="
                          activeFlag == true
                            ? 'fade ease-in up-50% duration-10'
                            : 'fade ease-in down-50% duration-10'
                        "
                      >
                        <div class="spec-box">
                          <img
                            src="@/assets/images/icon-dashboard.png"
                            class="img-fluid"
                            alt=""
                          />
                          <h5>
                            {{ brand?.products[0]?.power }}
                            <small>KW</small>
                          </h5>
                          <span>{{ $t("power") }}</span>
                        </div>
                        <div class="spec-box">
                          <img
                            src="@/assets/images/icon-dashboard.png"
                            class="img-fluid"
                            alt=""
                          />
                          <h5>
                            {{ brand?.products[0]?.torque }}
                            <small>N.M</small>
                          </h5>
                          <span>{{ $t("torque") }}</span>
                        </div>
                        <div class="spec-box">
                          <img
                            src="@/assets/images/icon-dashboard.png"
                            class="img-fluid"
                            alt=""
                          />
                          <h5>
                            {{ brand?.products[0]?.wheelbase }}
                            <small>S</small>
                          </h5>
                          <span>{{ $t("wheelbase") }}</span>
                        </div>
                      </div>
                      <p
                        :class="{ 'xyz-in': activeIndex == index }"
                        :xyz="
                          activeFlag == true
                            ? 'fade ease-in left-25% duration-10'
                            : 'fade ease-in right-25% duration-10'
                        "
                      >
                        {{
                          locale == "en"
                            ? brand?.products[0]?.description_en
                            : brand?.products[0]?.description_ar
                        }}
                      </p>
                      <div class="vehicle-variations">
                        <div
                          class="vbox"
                          v-for="(product, prdIndex) in brand?.products"
                          :key="prdIndex"
                        >
                          <NuxtLink :to="product?.link" target="_blank">
                            <img :src="product?.image" alt=""
                          /></NuxtLink>
                          {{
                            locale == "en" ? product?.name_en : product?.name_ar
                          }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="slider-image">
                      <img
                        v-if="brand?.products[0]"
                        class="img-fluid"
                        :class="{ 'xyz-in': activeIndex == index }"
                        :xyz="
                          activeFlag == true
                            ? 'fade ease-in up-75% duration-10'
                            : 'fade ease-in down-75% duration-10'
                        "
                        :src="brand?.products[0]?.image"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <!-- <button class="swiper-button-prev" @click="goToPrevSlide"></button>
            <button class="swiper-button-next" @click="goToNextSlide"></button> -->
          </div>
          <div thumbsSlider="" class="swiper sliderThumbs">
            <swiper
              class="swiper-wrapper"
              ref="thumbsSwiper"
              @swiper="onSwiper"
              :centeredSlides="true"
              :centeredSlidesBounds="true"
              :slidesPerView="4"
              :watchOverflow="true"
              :watchSlidesVisibility="true"
              :watchSlidesProgress="true"
            >
              <swiper-slide
                class="swiper-slide"
                v-for="(brand, index) in popularBrands"
                :key="index"
                @click="onBrandClick()"
              >
                <img :src="brand?.image" alt="" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>
    <!-- Main Slider End -->
    <!-- Section About Start -->
    <section class="section-about">
      <div class="container-fluid p-0">
        <div class="row gx-0 align-items-center">
          <div class="col-sm-4">
            <div class="about-content">
              <div>
                <h4>
                  {{
                    locale == "en"
                      ? homeObj?.about_us_heading_en
                      : homeObj?.about_us_heading_ar
                  }}
                </h4>
                <h2>
                  {{
                    locale == "en"
                      ? homeObj?.about_us_title_en
                      : homeObj?.about_us_title_ar
                  }}
                </h2>
                <p>
                  {{
                    locale == "en"
                      ? homeObj?.about_us_content_en
                      : homeObj?.about_us_content_ar
                  }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="img-box">
              <img :src="homeObj?.about_us_image" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-sm-3 mission-vision-content">
            <div
              class="vision-box"
              :style="{
                backgroundImage: `url(${background_vision})`,
              }"
            >
              <div class="cnt-box">
                <h3>
                  {{
                    locale == "en"
                      ? homeObj?.our_vision_title_en
                      : homeObj?.our_vision_title_ar
                  }}
                </h3>
                <p>
                  {{
                    locale == "en"
                      ? homeObj?.our_vision_content_en
                      : homeObj?.our_vision_content_ar
                  }}
                </p>
              </div>
            </div>
            <div
              class="mission-box"
              :style="{
                backgroundImage: `url(${background_mision})`,
              }"
            >
              <div class="cnt-box">
                <h3>
                  {{
                    locale == "en"
                      ? homeObj?.our_mission_title_en
                      : homeObj?.our_mission_title_ar
                  }}
                </h3>
                <p>
                  {{
                    locale == "en"
                      ? homeObj?.our_mission_content_en
                      : homeObj?.our_mission_content_ar
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section About End -->

    <!-- Section Testimonial Start -->
    <section class="section-testimonial">
      <div class="container-fluid p-0">
        <div class="row gx-0 align-items-center">
          <div class="col-sm-4">
            <div class="author-info">
              <img :src="homeObj?.owner_image" class="img-fluid" alt="" />
              <h3>
                <span>{{ homeObj?.owner_name }}</span>
                {{ homeObj?.owner_designation }}
              </h3>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="author-message">
              <h2>
                {{
                  locale == "en"
                    ? homeObj?.owner_title_en
                    : homeObj?.owner_title_ar
                }}
              </h2>
              <p>
                {{
                  locale == "en"
                    ? homeObj?.owner_content_en
                    : homeObj?.owner_content_ar
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Testimonial End-->

    <!-- Section Benefits Start -->
    <section class="section-benefits">
      <div class="benefits-top text-center">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-10 m-auto">
              <h4>
                {{
                  locale == "en"
                    ? homeObj?.our_benefit_heading_en
                    : homeObj?.our_benefit_heading_ar
                }}
              </h4>
              <h3>
                {{
                  locale == "en"
                    ? homeObj?.our_benefit_title_en
                    : homeObj?.our_benefit_title_ar
                }}
              </h3>
              <p>
                {{
                  locale == "en"
                    ? homeObj?.our_benefit_content_en
                    : homeObj?.our_benefit_content_ar
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="benefits-bottom">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-10 m-auto">
              <div class="row">
                <div class="col-sm-4">
                  <div class="award-box">
                    <img
                      :src="homeObj?.our_benefit_image1"
                      class="img-fluid"
                      alt=""
                    />
                    <h5>
                      {{
                        locale == "en"
                          ? homeObj?.our_benefit_text1_en
                          : homeObj?.our_benefit_text1_ar
                      }}
                    </h5>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="award-box">
                    <img
                      :src="homeObj?.our_benefit_image2"
                      class="img-fluid"
                      alt=""
                    />
                    <h5>
                      {{
                        locale == "en"
                          ? homeObj?.our_benefit_text2_en
                          : homeObj?.our_benefit_text2_ar
                      }}
                    </h5>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="award-box">
                    <img
                      :src="homeObj?.our_benefit_image3"
                      class="img-fluid"
                      alt=""
                    />
                    <h5>
                      {{
                        locale == "en"
                          ? homeObj?.our_benefit_text3_en
                          : homeObj?.our_benefit_text3_ar
                      }}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Benefits End -->

    <!-- Section Subscribe Start -->
    <section class="section-subscribe">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-8 m-auto">
            <div class="title text-center mb-5">
              <h2 class="text-uppercase">
                {{
                  locale == "en"
                    ? homeObj?.our_brand_title_en
                    : homeObj?.our_brand_title_ar
                }}
              </h2>
              <h4>
                {{
                  locale == "en"
                    ? homeObj?.our_brand_content_en
                    : homeObj?.our_brand_content_ar
                }}
              </h4>
            </div>
            <div class="subscribe-logos">
              <a href="#" v-for="(brand, index) in homeObj?.brands" :key="index"
                ><img :src="brand?.image" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Subscribe End -->
  </div>
</template>
<script>
import { useHomeStore } from "../store/modules/home";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore from "swiper/core";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

import background_mision from "@/assets/images/training_development.jpg";
import background_vision from "@/assets/images/training_development.jpg";

export default {
  layout: "default",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      locale: this.$i18n.locale,
      homeStore: useHomeStore(),
      thumbsSwiper: null,
      activeImage: 0,
      background_mision,
      background_vision,
      activeIndex: 0,
      activeFlag: true,
    };
  },
  computed: {
    homeObj() {
      //console.log("!!!!", this.homeStore.getHome);
      return this.homeStore?.getHome;
    },
    popularBrands() {
      if (!this.homeObj) {
        return null;
      }
      return this.homeObj?.popular_brands;
    },
    popularBrandName() {
      if (!this.homeObj) {
        return null;
      }
      if (this.locale == "en") {
        return this.homeObj?.popular_brands[this.activeIndex]?.name_en;
      } else {
        return this.homeObj?.popular_brands[this.activeIndex]?.name_ar;
      }
    },
  },
  mounted() {
    this.fetchHome();
  },
  methods: {
    fetchHome() {
      this.homeStore.fetchHome();
    },
    onSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    selectedImage(index) {
      this.activeImage = index;
    },
    onBrandClick() {
      this.activeImage = 0;
    },
    onSlideChange(swiper) {
      if (swiper.realIndex > this.activeIndex) {
        this.activeFlag = true;
      } else {
        this.activeFlag = false;
      }
      this.activeIndex = swiper.realIndex;
      this.activeImage = 0;
    },

    // goToPrevSlide() {
    //   console.log("CLICK", this.$refs.mainSwiper);
    //   console.log("CLICK", this.thumbsSwiper);
    //   this.$refs.mainSwiper.swiper.slidePrev();
    // },
    // goToNextSlide() {
    //   console.log("CLICK");
    //   this.$refs.mainSwiper.swiper.slideNext();
    // },
  },
};
</script>
<style>
@import "swiper/swiper-bundle.css";
</style>
