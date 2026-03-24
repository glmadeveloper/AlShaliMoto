<template>
    <section class="section-owners">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-4">
                    <div class="author-info">
                        <img :src="aboutusObj?.owner_image" class="img-fluid" alt="" />
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
</template>

<script>
export default {
    props: ["aboutusObj", "locale"],
};
</script>
