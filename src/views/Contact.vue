<template>
  <div class="sub_page">
    <section class="">
      <div class="col-md-12 text-center mt-5">
        <h2 class="fs-bolder">Contact us</h2>
      </div>
    </section>
    <section class="contact_section pt-2">
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
                <div class="btn-box pb-5">
                  <button class="btn-primary2">SEND</button>
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

<style scoped>
.btn-secondary1 {
  background-color: rgb(251, 251, 251);
  border: #002c3e 1px solid;
  color: black;
  /* align-items: center; */
  padding: 10px;
  border-radius: 4px;
}

.btn-primary2 {
  background-color: #002c3e;
  border-color: #002c3e solid 1px;
  color: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 6px;
}
</style>
