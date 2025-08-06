<template>
  <div>
    <!-- Page Heading Start -->
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
              }}</span
            >
          </div>
        </div>
      </div>
    </section>
    <!-- Page Heading End -->

    <!-- Section Content Start -->
    <section class="section-content py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="contact-information">
              <h4>
                {{
                  locale == "en"
                    ? contactusObj?.introduction_heading_en
                    : contactusObj?.introduction_heading_ar
                }}
              </h4>
              <h2>
                {{
                  locale == "en"
                    ? contactusObj?.introduction_title_en
                    : contactusObj?.introduction_title_ar
                }}
              </h2>
              <p>
                {{
                  locale == "en"
                    ? contactusObj?.introduction_content_en
                    : contactusObj?.introduction_content_ar
                }}
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="social-links">
              <NuxtLink :to="commonObj?.facebook" target="_blank"
                ><i class="fa-brands fa-facebook-f"></i
              ></NuxtLink>
              <NuxtLink :to="commonObj?.instagram" target="_blank"
                ><i class="fa-brands fa-instagram"></i
              ></NuxtLink>
              <NuxtLink :to="commonObj?.linkedin" target="_blank"
                ><i class="fa-brands fa-linkedin-in"></i
              ></NuxtLink>
              <NuxtLink :to="commonObj?.twitter" target="_blank"
                ><i class="fa-brands fa-x-twitter"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-sm-4">
            <div class="contact-infobox">
              <span><i class="fa-solid fa-envelope"></i></span>
              {{ commonObj?.email }}
            </div>
          </div>
          <div class="col-sm-4">
            <div class="contact-infobox">
              <span><i class="fa-solid fa-phone"></i></span>
              +{{ commonObj?.phone_number }}
            </div>
          </div>
          <div class="col-sm-4">
            <div class="contact-infobox">
              <span><i class="fa-solid fa-location-dot"></i></span>
              {{ commonObj?.address }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <Form
              as="form"
              class="form"
              @submit="onSubmit"
              :initial-values="initialData"
              :validation-schema="schema"
              v-slot="{ errors }"
            >
              <div class="contact-box">
                <div class="form-group">
                  <div class="field-group">
                    <div class="row gx-0 align-items-center">
                      <div class="col-sm-4">
                        <label>{{ $t("yourName") }}</label>
                      </div>
                      <div class="col-sm-8">
                        <!-- <input
                        type="text"
                        class="form-control"
                        placeholder="Please enter your name"
                      /> -->
                        <Field
                          type="text"
                          name="name"
                          class="form-control"
                          :placeholder="$t('pleaseEnterYourName')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="errorAll" v-if="errors">
                    {{ errors.name }}
                  </div>
                </div>
                <div class="form-group">
                  <div class="field-group">
                    <div class="row gx-0 align-items-center">
                      <div class="col-sm-4">
                        <label>{{ $t("yourEmail") }}</label>
                      </div>
                      <div class="col-sm-8">
                        <!-- <input
                        type="text"
                        class="form-control"
                        placeholder="Please enter your email"
                      /> -->
                        <Field
                          type="text"
                          name="email"
                          class="form-control"
                          :placeholder="$t('pleaseEnterYourEmail')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="errorAll" v-if="errors">
                    {{ errors.email }}
                  </div>
                </div>
                <div class="form-group">
                  <div class="field-group">
                    <div class="row gx-0 align-items-center">
                      <div class="col-sm-4">
                        <label>{{ $t("yourNumber") }}</label>
                      </div>
                      <div class="col-sm-8">
                        <!-- <input
                        type="text"
                        class="form-control"
                        placeholder="Please enter your number"
                      /> -->
                        <Field
                          type="text"
                          name="mobileNumber"
                          class="form-control"
                          :placeholder="$t('pleaseEnterYourNumber')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="errorAll" v-if="errors">
                    {{ errors.mobileNumber }}
                  </div>
                </div>
                <div class="form-group">
                  <div class="field-group field-group-textarea">
                    <div class="row gx-0 align-items-center">
                      <div class="col-sm-12">
                        <label>{{ $t("message") }}</label>
                        <!-- <textarea
                        class="form-control"
                        rows="8"
                        placeholder="Enter message"
                      ></textarea> -->
                        <Field
                          type="text"
                          as="textarea"
                          rows="5"
                          name="message"
                          class="form-control"
                          :placeholder="$t('pleaseEnterYourMessage')"
                        ></Field>
                      </div>
                    </div>
                  </div>
                  <div class="errorAll" v-if="errors">
                    {{ errors.message }}
                  </div>
                </div>
                <div class="button-bar">
                  <button type="submit" class="btn btn-primary px-5">
                    {{ $t("submit") }}
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content End -->

    <section class="section-map">
      <!-- <img src="@/assets/images/map-image.png" alt="" /> -->
    </section>
  </div>
</template>
<script>
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useContactUsStore } from "~/store/modules/contactus";
import { useCommonStore } from "~/store/modules/common";
export default {
  layout: "default",
  components: {
    Field,
    Form,
  },
  data() {
    // const emailRegex = new RegExp(
    //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,3})$/
    // );

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema = yup.object().shape({
      name: yup
        .string()
        .required("Name is Required")
        .trim()
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name must be at most 20 characters"),
      email: yup
        .string()
        .email()
        .required("Email is Required")
        .trim()
        .matches(emailRegex, "Email not allowed"),
      mobileNumber: yup
        .string()
        .trim()
        .required("Mobile Number is Required")
        .matches(phoneRegExp, "Mobile Number is not valid"),
      message: yup.string().trim().required("Media Introduction is Required"),
    });
    const initialData = {
      name: "",
      email: "",
      mobileNumber: "",
      message: "",
    };

    return {
      schema,
      initialData,
      locale: this.$i18n.locale,
      contactStore: useContactUsStore(),
      commonStore: useCommonStore(),
    };
  },
  computed: {
    commonObj() {
      return this.commonStore.getCommon;
    },
    contactusObj() {
      return this.contactStore.getContactUs;
    },
  },
  mounted() {
    this.fetchContactUs();
  },
  methods: {
    fetchContactUs() {
      this.contactStore.fetchContactUs();
    },
    onSubmit(values, actions) {
      console.log("media", values);

      let formData = new FormData();
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("phone_number", values.mobileNumber);
      formData.append("name", values.name);
      this.contactStore.post(formData);
      actions.resetForm();
    },
  },
};
</script>
