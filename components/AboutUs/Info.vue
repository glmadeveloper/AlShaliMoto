<template>
    <section class="section-about-info py-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="exp-img">
                        <img src="@/assets/images/exp.png" class="img-fluid d-flex m-auto" alt="" />
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
</template>

<script>
export default {
    props: ["aboutusObj", "locale"],
};
</script>
