<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="full">
            <div class="logo_footer">
              <router-link to="/"
                ><img width="210" src="/images/logo.png" alt="#"
              /></router-link>
            </div>
            <div class="information_f">
              <p>
                <strong>ADDRESS:</strong> 28 White tower, Street Name New York
                City, USA
              </p>
              <p><strong>TELEPHONE:</strong> +91 987 654 3210</p>
              <p><strong>EMAIL:</strong> yourmain@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-6">
                  <div class="widget_menu">
                    <h3>Menu</h3>
                    <ul>
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/about">About</router-link></li>
                      <li><a href="#">Services</a></li>
                      <li>
                        <router-link to="/testimonial">Testimonial</router-link>
                      </li>
                      <li><router-link to="/blog">Blog</router-link></li>
                      <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="widget_menu">
                    <h3>Account</h3>
                    <ul>
                      <li><a href="#">Account</a></li>
                      <li><a href="#">Checkout</a></li>
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Register</a></li>
                      <li><a href="#">Shopping</a></li>
                      <li><a href="#">Widget</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="widget_menu">
                <h3>Newsletter</h3>
                <div class="information_f">
                  <p>Subscribe by our newsletter and get update protidin.</p>
                </div>
                <div class="form_sub">
                  <form>
                    <fieldset>
                      <div class="field">
                        <input
                          type="email"
                          placeholder="Enter Your Mail"
                          name="email"
                        />
                        <input type="submit" value="Subscribe" />
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="cpy_">
    <p class="mx-auto">
      © 2021 All Rights Distributed By
      <br />
      <a href="#" target="_blank">ThemeWagon</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Footer specific styles if needed */
</style>
