<template>
    <div>
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
                <div class="row row-locations justify-content-center">
                    <div class="col col-6 col-sm-4 col-lg-2" v-for="(location, index) in aboutusObj?.locations"
                        :key="index">
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
    </div>
</template>

<script>
export default {
    props: ["aboutusObj", "locale"],
};
</script>
