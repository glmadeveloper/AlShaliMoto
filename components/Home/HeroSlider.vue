<template>
    <section class="section-hero-slider">
        <div class="swiper heroSlider">
            <swiper class="swiper-wrapper" :loop="true" :speed="1000"
                :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="modules">
                <swiper-slide v-for="(banner, index) in heroBanners" :key="index">
                    <div class="hero-banner"
                        :style="{ backgroundImage: `url(${isMobile ? (banner.mobile_image || banner.image) : banner.image})` }">
                        <div class="container h-100">
                            <div class="row h-100 align-items-center justify-content-start">
                                <div class="col-md-7 col-lg-6"
                                    :class="{ 'text-start': locale === 'en', 'text-end': locale === 'ar' }">
                                    <h1 class="hero-title">{{ locale === 'en' ? banner.name_en : banner.name_ar }}</h1>
                                    <p class="hero-desc">{{ locale === 'en' ? banner.description_en :
                                        banner.description_ar }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ["homeObj", "locale"],
    setup() {
        const isMobile = ref(false);

        const checkMobile = () => {
            isMobile.value = window.innerWidth <= 768;
        };

        onMounted(() => {
            checkMobile();
            window.addEventListener('resize', checkMobile);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', checkMobile);
        });

        return {
            modules: [Autoplay],
            isMobile
        };
    },
    computed: {
        heroBanners() {
            if (this.homeObj?.hero_banners) {
                try {
                    return typeof this.homeObj.hero_banners === 'string'
                        ? JSON.parse(this.homeObj.hero_banners)
                        : this.homeObj.hero_banners;
                } catch (e) {
                    return [];
                }
            }
            return [];
        }
    }
};
</script>

<style scoped>
.hero-banner {
    height: calc(100vh - 76px);
    min-height: 600px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
}

.hero-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: rgba(0, 0, 0, 0.5); */
    /* Overlay effect */
}

.hero-title,
.hero-desc {
    position: relative;
    z-index: 2;
    color: #fff;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.hero-desc {
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 450px;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.2rem;
    }

    .hero-desc {
        font-size: 1rem;
    }
}
</style>
