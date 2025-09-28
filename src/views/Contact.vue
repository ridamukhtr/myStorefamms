<template>
  <div class="sub_page">
    <section class="inner_page_head">
      <div class="container_fuild">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact_section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="form_container">
              <div class="heading_container">
                <h2>Contact Us</h2>
              </div>
              <form action="">
                <div>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <input type="text" placeholder="Your Phone" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Message"
                    class="message-box"
                  />
                </div>
                <div class="btn_box">
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="img-box">
              <!-- <img src="/images/contact-img.jpg" alt="" /> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped></style>
