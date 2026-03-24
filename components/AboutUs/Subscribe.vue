<template>
    <section class="section-subscribe subscribe1">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-8 m-auto">
                    <div class="title text-center mb-5">
                        <h2 class="text-uppercase">
                            {{
                                locale == "en"
                                    ? aboutusObj?.our_brand_title_en
                                    : aboutusObj?.our_brand_title_ar
                            }}
                        </h2>
                        <h4>
                            {{
                                locale == "en"
                                    ? aboutusObj?.our_brand_content_en
                                    : aboutusObj?.our_brand_content_ar
                            }}
                        </h4>
                    </div>
                    <div class="subscribe-logos">
                        <a href="#" v-for="(brand, index) in aboutusObj?.brands" :key="index"><img :src="brand?.image"
                                alt="" /></a>
                        <!-- <a href="#"><img src="@/assets/images/baic.jpg" alt="" /></a>
            <a href="#"><img src="@/assets/images/cfmoto.jpg" alt="" /></a>
            <a href="#"
              ><img src="@/assets/images/al_shaali_ev.jpg" alt=""
            /></a>
            <a href="#"><img src="@/assets/images/ixmoto.jpg" alt="" /></a> -->
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
