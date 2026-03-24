<template>
    <section class="section-benefits" :style="{
        backgroundImage: `url(${homeObj?.our_benefit_background_image})`
    }">
        <div class="benefits-top text-center" :style="{
            '--mobile-bg': `url(${homeObj?.our_benefit_background_image})`
        }">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-lg-10 m-auto mt-5">
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
                                    <img :src="homeObj?.our_benefit_image1" class="img-fluid" alt="" />
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
                                    <img :src="homeObj?.our_benefit_image2" class="img-fluid" alt="" />
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
                                    <img :src="homeObj?.our_benefit_image3" class="img-fluid" alt="" />
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
</template>

<script>
export default {
    props: ["homeObj", "locale"],
};
</script>
