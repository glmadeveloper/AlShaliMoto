<template>
    <section class="section-subscribe">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-8 m-auto">
                    <div class="title text-center mb-5">
                        <h2 class="text-uppercase">
                            {{
                                locale == "en"
                                    ? homeObj?.our_brand_title_en
                                    : homeObj?.our_brand_title_ar
                            }}
                        </h2>
                        <h4>
                            {{
                                locale == "en"
                                    ? homeObj?.our_brand_content_en
                                    : homeObj?.our_brand_content_ar
                            }}
                        </h4>
                    </div>
                    <div class="subscribe-logos">
                        <a href="#" v-for="(brand, index) in homeObj?.brands" :key="index"><img :src="brand?.image"
                                alt="" /></a>
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
