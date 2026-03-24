<template>
    <section class="section-slider">
        <div class="container">
            <div class="mainSlider">

                <div style="
            --swiper-navigation-color: #fff;
            --swiper-pagination-color: #fff;
          " class="swiper sliderBig">
                    <swiper class="swiper-wrapper" ref="mainSwiper" :loop="true" :speed="1000" :rtl="true"
                        :parallax="true" @slideChange="onSlideChange" :navigation="true"
                        :thumbs="{ swiper: thumbsSwiper }">
                        <swiper-slide class="swiper-slide" v-for="(brand, index) in popularBrands" :key="index">
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
                                        <div class="text-end mb-4">
                                            <NuxtLink to="/products" class="link-viewall xyz-in"><span class="" :xyz="activeFlag == true
                                                ? 'fade ease-in up-75% '
                                                : 'fade ease-in down-75%'
                                                ">
                                                    {{ popularBrandName }}</span>
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                            </NuxtLink>
                                        </div>
                                        <h2 :class="{ 'xyz-in': activeIndex == index }" :xyz="activeFlag == true
                                            ? 'fade ease-in left-25% duration-10'
                                            : 'fade ease-in right-25% duration-10'
                                            ">
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
                                        <div class="vehicle-specifications" :class="{ 'xyz-in': activeIndex == index }"
                                            :xyz="activeFlag == true
                                                ? 'fade ease-in up-50% duration-15'
                                                : 'fade ease-in down-50% duration-15'
                                                ">
                                            <div class="spec-box">
                                                <img src="@/assets/images/icon-dashboard.png" class="img-fluid"
                                                    alt="" />
                                                <h5>
                                                    {{ brand?.products[0]?.power }}
                                                    <small>KW</small>
                                                </h5>
                                                <span>{{ $t("power") }}</span>
                                            </div>
                                            <div class="spec-box">
                                                <img src="@/assets/images/icon-dashboard.png" class="img-fluid"
                                                    alt="" />
                                                <h5>
                                                    {{ brand?.products[0]?.torque }}
                                                    <small>N.M</small>
                                                </h5>
                                                <span>{{ $t("torque") }}</span>
                                            </div>
                                            <div class="spec-box">
                                                <img src="@/assets/images/icon-dashboard.png" class="img-fluid"
                                                    alt="" />
                                                <h5>
                                                    {{ brand?.products[0]?.wheelbase }}
                                                    <small>S</small>
                                                </h5>
                                                <span>{{ $t("wheelbase") }}</span>
                                            </div>
                                        </div>
                                        <p :class="{ 'xyz-in': activeIndex == index }" :xyz="activeFlag == true
                                            ? 'fade ease-in left-25% duration-10'
                                            : 'fade ease-in right-25% duration-10'
                                            ">
                                            {{
                                                locale == "en"
                                                    ? brand?.products[0]?.description_en
                                                    : brand?.products[0]?.description_ar
                                            }}
                                        </p>
                                        <div class="vehicle-variations">
                                            <div class="vbox" v-for="(product, prdIndex) in brand?.products"
                                                :key="prdIndex">
                                                <NuxtLink :to="product?.link" target="_blank">
                                                    <img :src="product?.image" alt="" />
                                                </NuxtLink>
                                                {{
                                                    locale == "en" ? product?.name_en : product?.name_ar
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="slider-image">
                                        <img v-if="brand?.products[0]" class="img-fluid"
                                            :class="{ 'xyz-in': activeIndex == index }" :xyz="activeFlag == true
                                                ? 'fade ease-in up-50% duration-15'
                                                : 'fade ease-in down-50% duration-15'
                                                " :src="brand?.products[0]?.image" alt="" />
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <!-- <button class="swiper-button-prev" @click="goToPrevSlide"></button>
          <button class="swiper-button-next" @click="goToNextSlide"></button> -->
                </div>
                <div thumbsSlider="" class="swiper sliderThumbs">
                    <swiper class="swiper-wrapper" ref="thumbsSwiper" @swiper="onSwiper" :centeredSlides="true"
                        :centeredSlidesBounds="true" :slidesPerView="4" :watchOverflow="true"
                        :watchSlidesVisibility="true" :watchSlidesProgress="true">
                        <swiper-slide class="swiper-slide" v-for="(brand, index) in popularBrands" :key="index"
                            @click="onBrandClick()">
                            <img :src="brand?.image" alt="" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore from "swiper/core";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ["homeObj", "locale"],
    data() {
        return {
            thumbsSwiper: null,
            activeImage: 0,
            activeIndex: 0,
            activeFlag: true,
        };
    },
    computed: {
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
    methods: {
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
    },
};
</script>

<style>
@import "swiper/swiper-bundle.css";
</style>
