<template>
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
                    <div class="vision-box" :style="{
                        backgroundImage: `url(${background_vision})`,
                    }">
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
                    <div class="mission-box" :style="{
                        backgroundImage: `url(${background_mision})`,
                    }">
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
</template>

<script>
import background_mision from "@/assets/images/training_development.jpg";
import background_vision from "@/assets/images/training_development.jpg";

export default {
    props: ["homeObj", "locale"],
    data() {
        return {
            background_mision,
            background_vision,
        };
    },
};
</script>
