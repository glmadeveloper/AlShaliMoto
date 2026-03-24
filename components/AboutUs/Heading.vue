<template>
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
</template>

<script>
export default {
    props: ["aboutusObj", "locale"],
};
</script>
