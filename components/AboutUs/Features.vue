<template>
    <section class="section-features">
        <div v-for="(service, index) in aboutusObj?.services" :key="index" class="column" :style="{
            backgroundImage: `url(${service?.image})`,
        }">
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
    <!-- :style="{
      backgroundImage: `url(${
        imageApi + researchDevelopmentObj?.section7_image
      })`,
    }" -->
</template>

<script>
import vehicleMaintanaceImg from "@/assets/images/vehicle-maintanance.jpg";
import quality_assuranceImg from "@/assets/images/quality-assurance.jpg";
import customer_servicesImg from "@/assets/images/customer-services.jpg";
import training_developmenteImg from "@/assets/images/training_development.jpg";
import genuine_spare_partsImg from "@/assets/images/genuine_spare_parts.jpg";
import digitalizationImg from "@/assets/images/digitalization.jpg";

export default {
    props: ["aboutusObj", "locale"],
    data() {
        return {
            vehicleMaintanaceImg,
            quality_assuranceImg,
            customer_servicesImg,
            training_developmenteImg,
            genuine_spare_partsImg,
            digitalizationImg,
        };
    },
};
</script>
