<template>
  <div class="sub_page">
    <section class="inner_page_head px-sm-0">
      <div class="container_fuild px-sm-0">
        <div class="row px-0">
          <div class="col-md-12 px-sm-0">
            <div class="full px-sm-0">
              <h3>Shopping Cart</h3>
            </div>
          </div>
        </div>
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
                      class="img-fluid rounded"
                    />
                  </div>
                  <div class="col-md-3">
                    <h6>{{ item.name }}</h6>
                    <p class="text-muted mb-0">{{ item.price }}</p>
                  </div>
                  <div class="col-md-3">
                    <div class="input-group">
                      <button
                        class="btn btn-outline-secondary btn-sm"
                        @click="decreaseQuantity(item)"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        class="form-control text-center"
                        :value="item.quantity"
                        readonly
                      />
                      <button
                        class="btn btn-outline-secondary btn-sm"
                        @click="increaseQuantity(item)"
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
                  <router-link to="/product" class="btn-secondary1 w-100 my-2"
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
      cartItems: [
        {
          id: 1,
          name: "Men's Shirt",
          price: "75.00",
          image: "/images/p1.png",
          quantity: 2,
        },
        {
          id: 2,
          name: "Women's Dress",
          price: "68.00",
          image: "/images/p3.png",
          quantity: 1,
        },
      ],
      user: null,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce(
        (sum, item) => sum + parseFloat(item.price) * item.quantity,
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
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem(item) {
      this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
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
  border-color: #002c3e;
  color: white;
  padding: 10px;
  border-radius: 4px;
}
.btn-secondary1 {
  background-color: rgb(251, 251, 251);
  border: #002c3e 1px solid;
  color: black;
  /* align-items: center; */
  padding: 10px;
  border-radius: 4px;
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
