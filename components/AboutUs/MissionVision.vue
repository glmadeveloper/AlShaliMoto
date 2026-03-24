<template>
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
</template>

<script>
export default {
    props: ["aboutusObj", "locale"],
};
</script>
