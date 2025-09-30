<template>
  <div class="sub_page">
    <section class="">
      <div class="col-md-12 text-center mt-5">
        <h2 class="fs-bolder">Shopping Cart</h2>
      </div>
    </section>
    <section class="cart_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Cart Items</h5>
              </div>
              <div class="card-body">
                <div v-if="cartItems.length === 0" class="text-center py-5">
                  <h4>Your cart is empty</h4>
                  <div class="text-center m-4">
                    <router-link to="/product" class="btn-secondary1 w-100 my-2"
                      >Continue Shopping</router-link
                    >
                  </div>
                </div>
                <div
                  v-else
                  v-for="item in cartItems"
                  :key="item.id"
                  class="row mb-4 align-items-center"
                >
                  <div class="col-md-2">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="img-fluid rounded custom-img"
                    />
                  </div>
                  <div class="col-md-3">
                    <h6>{{ item.name }}</h6>
                    <p class="text-muted mb-0">{{ item.price }}</p>
                  </div>
                  <div class="col-md-2 col-sm-2 mx-sm-3">
                    <div
                      class="d-flex justify-content-lg-center justify-content-start align-items-center"
                    >
                      <button
                        @click="decreaseQuantity(item)"
                        class="btn btn-sm btn-secondary1 rounded-circle d-flex justify-content-center align-items-center me-2"
                        style="width: 30px; height: 30px"
                      >
                        -
                      </button>
                      <span class="text-black mx-3 fs-5 fw-bold">{{
                        item.quantity
                      }}</span>
                      <button
                        @click="increaseQuantity(item)"
                        class="btn btn-sm btn-secondary1 rounded-circle d-flex justify-content-center align-items-center ms-2"
                        style="width: 30px; height: 30px"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <p class="mb-0 fw-bold">
                      ${{
                        (
                          parseFloat(item.price.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)
                      }}
                    </p>
                  </div>
                  <div class="col-md-1">
                    <button
                      class="btn btn-danger btn-sm"
                      @click="removeItem(item)"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Order Summary</h5>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>${{ subtotal.toFixed(2) }}</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span>${{ shipping.toFixed(2) }}</span>
                </div>
                <hr />
                <div class="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong>${{ total.toFixed(2) }}</strong>
                </div>
                <button class="btn-primary2 w-100 mb-2" @click="checkout">
                  Proceed to Checkout
                </button>
                <div
                  class="text-center d-flex justify-content-center align-items-center"
                >
                  <router-link
                    to="/product"
                    class="btn-secondary1 w-100 my-2 text-decoration-none"
                    >Continue Shopping</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export default {
  name: "Cart",
  data() {
    return {
      cartItems: [],
      user: null,
    };
  },
  mounted() {
    this.loadCart();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce(
        (sum, item) =>
          sum + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      );
    },
    shipping() {
      return this.subtotal > 100 ? 0 : 10;
    },
    total() {
      return this.subtotal + this.shipping;
    },
  },
  methods: {
    loadCart() {
      this.cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
    increaseQuantity(item) {
      item.quantity++;
      this.saveCart();
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.saveCart();
      }
    },
    removeItem(item) {
      this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
      this.saveCart();
    },
    checkout() {
      // Show auth modal
      const modal = new bootstrap.Modal(document.getElementById("authModal"));
      modal.show();
    },
  },
};
</script>

<style scoped>
.cart_section {
  padding: 60px 0;
}

.card {
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-primary2 {
  background-color: #002c3e;
  border-color: #002c3e solid 1px;
  color: white;
  padding: 10px;
  border-radius: 4px;
}

.btn-primary2:hover {
  background-color: rgb(229, 229, 229);
  border: #002c3e 1px solid;
  color: black;
}
.btn-secondary1 {
  background-color: rgb(251, 251, 251);
  border: #002c3e 1px solid;
  color: black;
  /* align-items: center; */
  padding: 10px;
  border-radius: 4px;
}
.custom-img {
  max-width: 80px; /* control exact size */
  height: auto;
}

@media (max-width: 768px) {
  .cart_section {
    padding: 30px 0;
  }

  .row.mb-4 {
    margin-bottom: 20px !important;
  }

  .col-md-3,
  .col-md-4,
  .col-md-2,
  .col-md-1 {
    margin-bottom: 10px;
  }
}
</style>
