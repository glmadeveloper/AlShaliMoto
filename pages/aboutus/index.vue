<template>
  <div>
    <!-- Page Heading Start -->
    <section class="section-page-heading">
      <div class="heading-image">
        <img :src="aboutusObj?.banner_image" class="img-fluid" alt="" />
      </div>
      <div class="heading-title">
        <div class="container">
          <div class="page-title">
            <h1>
              {{ locale == "en" ? aboutusObj?.name_en : aboutusObj?.name_ar }}
            </h1>
            <span>{{
              locale == "en" ? aboutusObj?.name_en : aboutusObj?.name_ar
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Page Heading End -->

    <!-- Section About Info Start -->
    <section class="section-about-info py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="exp-img">
              <img
                src="@/assets/images/exp.png"
                class="img-fluid d-flex m-auto"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-8">
            <div class="title mb-3">
              <h4>
                {{
                  locale == "en"
                    ? aboutusObj?.introduction_heading_en
                    : aboutusObj?.introduction_heading_ar
                }}
              </h4>
              <h2 class="text-uppercase">
                {{
                  locale == "en"
                    ? aboutusObj?.introduction_title_en
                    : aboutusObj?.introduction_title_ar
                }}
              </h2>
            </div>
            <p>
              {{
                locale == "en"
                  ? aboutusObj?.introduction_content_en
                  : aboutusObj?.introduction_content_ar
              }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section About Info End -->

    <!-- Section Mission Vision Goal Start -->
    <section class="section-mission-vision-goal">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="mvg-box">
              <h3>
                {{
                  locale == "en"
                    ? aboutusObj?.our_mission_title_en
                    : aboutusObj?.our_mission_title_ar
                }}
              </h3>
              <p>
                {{
                  locale == "en"
                    ? aboutusObj?.our_mission_content_en
                    : aboutusObj?.our_mission_content_ar
                }}
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mvg-box mvg-box-center">
              <h3>
                {{
                  locale == "en"
                    ? aboutusObj?.our_vision_title_en
                    : aboutusObj?.our_vision_title_ar
                }}
              </h3>
              <p>
                {{
                  locale == "en"
                    ? aboutusObj?.our_vision_content_en
                    : aboutusObj?.our_vision_content_ar
                }}
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mvg-box">
              <h3>
                {{
                  locale == "en"
                    ? aboutusObj?.our_goal_title_en
                    : aboutusObj?.our_goal_title_ar
                }}
              </h3>
              <p>
                {{
                  locale == "en"
                    ? aboutusObj?.our_goal_content_en
                    : aboutusObj?.our_goal_content_ar
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Mission Vision Goal End -->

    <!-- Section About Start -->
    <section class="section-owners">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-4">
            <div class="author-info">
              <img :src="aboutusObj?.owner_image" class="img-fluid" alt="" />
              <h3>
                <span>{{ aboutusObj?.owner_name }}</span>
                {{ aboutusObj?.owner_designation }}
              </h3>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="author-message">
              <h2>
                {{
                  locale == "en"
                    ? aboutusObj?.owner_title_en
                    : aboutusObj?.owner_title_ar
                }}
              </h2>
              <p>
                {{
                  locale == "en"
                    ? aboutusObj?.owner_content_en
                    : aboutusObj?.owner_content_ar
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section About End-->

    <!-- Section Locations Start -->
    <section class="section-locations">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title mb-5">
              <h4>
                {{
                  locale == "en"
                    ? aboutusObj?.our_location_heading_en
                    : aboutusObj?.our_location_heading_ar
                }}
              </h4>
              <h2>
                {{
                  locale == "en"
                    ? aboutusObj?.our_location_title_en
                    : aboutusObj?.our_location_title_ar
                }}
              </h2>
              <p>
                {{
                  locale == "en"
                    ? aboutusObj?.our_location_content_en
                    : aboutusObj?.our_location_content_ar
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-countries">
      <div class="container">
        <div class="row row-locations">
          <div
            class="col col-6 col-sm-4 col-lg-2"
            v-for="(location, index) in aboutusObj?.locations"
            :key="index"
          >
            <div class="location-box">
              <img :src="location?.image" class="img-fluid" alt="" />
              <h4>
                {{ locale == "en" ? location?.name_en : location?.name_ar }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Locations End -->

    <!-- Section Subscribe Start -->
    <section class="section-subscribe subscribe1">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-8 m-auto">
            <div class="title text-center mb-5">
              <h2 class="text-uppercase">
                {{
                  locale == "en"
                    ? aboutusObj?.our_brand_title_en
                    : aboutusObj?.our_brand_title_ar
                }}
              </h2>
              <h4>
                {{
                  locale == "en"
                    ? aboutusObj?.our_brand_content_en
                    : aboutusObj?.our_brand_content_ar
                }}
              </h4>
            </div>
            <div class="subscribe-logos">
              <a
                href="#"
                v-for="(brand, index) in aboutusObj?.brands"
                :key="index"
                ><img :src="brand?.image" alt=""
              /></a>
              <!-- <a href="#"><img src="@/assets/images/baic.jpg" alt="" /></a>
              <a href="#"><img src="@/assets/images/cfmoto.jpg" alt="" /></a>
              <a href="#"
                ><img src="@/assets/images/al_shaali_ev.jpg" alt=""
              /></a>
              <a href="#"><img src="@/assets/images/ixmoto.jpg" alt="" /></a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Subscribe End -->

    <!-- Section Features Start -->
    <section class="section-features">
      <div
        v-for="(service, index) in aboutusObj?.services"
        :key="index"
        class="column"
        :style="{
          backgroundImage: `url(${service?.image})`,
        }"
      >
        <h4>{{ locale == "en" ? service?.name_en : service?.name_ar }}</h4>
      </div>
      <!-- <div
        class="column"
        :style="{
          backgroundImage: `url(${quality_assuranceImg})`,
        }"
      >
        <h4>Quality Assurance</h4>
      </div>
      <div
        class="column"
        :style="{
          backgroundImage: `url(${customer_servicesImg})`,
        }"
      >
        <h4>Customer Services</h4>
      </div>
      <div
        class="column"
        :style="{
          backgroundImage: `url(${training_developmenteImg})`,
        }"
      >
        <h4>Training & Development</h4>
      </div>
      <div
        class="column"
        :style="{
          backgroundImage: `url(${genuine_spare_partsImg})`,
        }"
      >
        <h4>Genuine Spare Parts</h4>
      </div>
      <div
        class="column"
        :style="{
          backgroundImage: `url(${digitalizationImg})`,
        }"
      >
        <h4>Digitalization</h4>
      </div> -->
    </section>
    <!-- Section Features End -->
    <!-- :style="{
        backgroundImage: `url(${
          imageApi + researchDevelopmentObj?.section7_image
        })`,
      }" -->
  </div>
</template>
<script>
import vehicleMaintanaceImg from "../../assets/images/vehicle-maintanance.jpg";
import quality_assuranceImg from "../../assets/images/quality-assurance.jpg";
import customer_servicesImg from "../../assets/images/customer-services.jpg";
import training_developmenteImg from "../../assets/images/training_development.jpg";
import genuine_spare_partsImg from "../../assets/images/genuine_spare_parts.jpg";
import digitalizationImg from "../../assets/images/digitalization.jpg";

import { useAboutUsStore } from "../../store/modules/aboutus";
export default {
  layout: "default",
  data() {
    return {
      vehicleMaintanaceImg,
      quality_assuranceImg,
      customer_servicesImg,
      training_developmenteImg,
      genuine_spare_partsImg,
      digitalizationImg,
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
