<template>
    <section class="section-testimonial">
        <div class="container-fluid p-0">
            <div class="row gx-0 align-items-center">
                <div class="col-sm-4">
                    <div class="author-info">
                        <img :src="homeObj?.owner_image" class="img-fluid" alt="" />
                        <h3>
                            <span>{{ $t("owner_name") }}</span>
                            {{ $t("owner_designation") }}
                        </h3>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="author-message">
                        <h2>
                            {{
                                locale == "en"
                                    ? homeObj?.owner_title_en
                                    : homeObj?.owner_title_ar
                            }}
                        </h2>
                        <p>
                            {{
                                locale == "en"
                                    ? homeObj?.owner_content_en
                                    : homeObj?.owner_content_ar
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
    props: ["homeObj", "locale"],
};
</script>
