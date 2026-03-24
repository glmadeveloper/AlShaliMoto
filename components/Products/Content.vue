<template>
    <section class="section-products bg-white">
        <div class="products-tabs">
            <div class="container">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation" v-for="(brand, index) in brandsArr" :key="index">
                        <button class="nav-link" :class="{ active: activeTab == index }" @click="selectTab(index)"
                            :aria-controls="brand.id" :key="index" :data-bs-target="brand.id" :id="brand.id"
                            data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                            <img :src="brand?.image" alt="" />
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade" v-for="(brand, index) in brandsArr" :key="index" :id="brand.id"
                        role="tabpanel" :class="{
                            show: activeTab === index,
                            active: activeTab === index,
                        }" :aria-labelledby="brand.id">
                        <!-- Slider main container -->
                        <div class="productSlider">
                            <div class="swiper sliderBaic">
                                <!-- Additional required wrapper -->
                                <swiper class="swiper-wrapper" ref="swiperRef" :slides-per-view="1" :space-between="1"
                                    :loop="true" :autoHeight="true" :pagination="true" @swiper="onSwiper"
                                    :modules="modules" :navigation="true">
                                    <!-- Slides -->
                                    <swiper-slide class="swiper-slide"
                                        v-for="(product, prdIndex) in brand?.popular_products" :key="prdIndex">
                                        <div class="row align-items-center">
                                            <div class="col-sm-6">
                                                <div class="slider-content">
                                                    <h2>
                                                        {{
                                                            locale == "en"
                                                                ? product?.name_en
                                                        : product?.name_ar
                                                        }}
                                                    </h2>
                                                    <p>
                                                        {{
                                                            locale == "en"
                                                                ? product?.text_en
                                                        : product?.text_ar
                                                        }}
                                                    </p>
                                                    <div class="vehicle-specifications">
                                                        <div class="spec-box">
                                                            <img src="@/assets/images/icon-dashboard.png"
                                                                class="img-fluid" alt="" />
                                                            <h5>{{ product?.power }} kw</h5>
                                                            <span>{{ $t("power") }}</span>
                                                        </div>
                                                        <div class="spec-box">
                                                            <img src="@/assets/images/icon-dashboard.png"
                                                                class="img-fluid" alt="" />
                                                            <h5>{{ product?.torque }} kw</h5>
                                                            <span>{{ $t("torque") }}</span>
                                                        </div>
                                                        <div class="spec-box">
                                                            <img src="@/assets/images/icon-dashboard.png"
                                                                class="img-fluid" alt="" />
                                                            <h5>{{ product?.wheelbase }} kw</h5>
                                                            <span>{{ $t("wheelbase") }}</span>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        {{
                                                            locale == "en"
                                                                ? product?.description_en
                                                        : product?.description_ar
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="slider-image">
                                                    <img :src="product?.image" class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>

                                <!-- If we need navigation buttons -->
                                <!-- <div
                  @click="swiperPrevSlide"
                  class="swiper-button-prev"
                ></div>
                <div
                  @click="swiperNextSlide"
                  class="swiper-button-next"
                ></div> -->
                            </div>
                        </div>

                        <div class="products-wrapper">
                            <div class="row">
                                <div class="col-sm-3" v-for="(product, prdIndex) in brand?.products" :key="prdIndex">
                                    <div class="product-box">
                                        <div class="product-image">
                                            <img :src="product?.image" class="img-fluid" alt="" />
                                        </div>
                                        <div class="product-content">
                                            <h4>
                                                {{
                                                    locale == "en" ? product?.name_en : product?.name_ar
                                                }}
                                            </h4>
                                            <a class="seemore" href="#">See More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ["productObj", "locale"],
    setup() {
        return {
            modules: [Navigation],
            pagination: {
                clickable: true,
            },
        };
    },
    data() {
        return {
            swiperInstance: null,
            activeTab: 0,
        };
    },
    computed: {
        brandsArr() {
            if (!this.productObj) {
                return null;
            }
            return this.productObj.brands;
        },
    },
    methods: {
        selectTab(index) {
            this.activeTab = index;
        },
        onSwiper(swiper) {
            this.swiperInstance = swiper;
        },
        swiperNextSlide() {
            if (this.swiperInstance) {
                this.swiperInstance.slideNext();
            }
        },
        swiperPrevSlide() {
            if (this.swiperInstance) {
                console.log("DDDDD");
                this.swiperInstance.slidePrev();
            }
        },
    },
};
</script>
