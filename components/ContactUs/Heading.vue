<template>
    <section class="section-page-heading">
        <div class="heading-image">
            <img :src="contactusObj?.banner_image" class="img-fluid" alt="" />
        </div>
        <div class="heading-title">
            <div class="container">
                <div class="page-title">
                    <h1>
                        {{
                            locale == "en" ? contactusObj?.name_en : contactusObj?.name_ar
                        }}
                    </h1>
                    <span>
                        {{
                            locale == "en" ? contactusObj?.name_en : contactusObj?.name_ar
                        }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ["contactusObj", "locale"],
};
</script>
