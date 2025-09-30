<template>
  <div class="sub_page">
    <section class="">
      <div class="col-md-12 text-center mt-5">
        <h2 class="fs-bolder">Products</h2>
      </div>
    </section>
    <section class="product_section pt-2">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Our <span>products</span></h2>
        </div>
        <div class="row">
          <div
            class="col-sm-6 col-md-4 col-lg-4"
            v-for="product in products"
            :key="product.id"
          >
            <div class="box">
              <div class="img-box position-relative">
                <img :src="product.image" :alt="product.name" />
                <div
                  v-if="!product.isInCart"
                  class="position-absolute myBtn bg-light"
                >
                  <button
                    @click="addToCart(product)"
                    class="btn btn-sm btn-secondary1 rounded-circle d-flex justify-content-center align-items-center"
                    style="width: 24px; height: 24px"
                  >
                    +
                  </button>
                </div>
                <div
                  v-else
                  class="position-absolute myBtn rounded-pill d-flex justify-content-center align-items-center"
                >
                  <button
                    @click="decreaseQuantity(product)"
                    class="btn btn-sm btn-secondary1 rounded-circle d-flex justify-content-center align-items-center me-2"
                    style="width: 24px; height: 24px"
                  >
                    -
                  </button>
                  <span class="text-black mx-3 fs-6">{{
                    product.quantity
                  }}</span>
                  <button
                    @click="increaseQuantity(product)"
                    class="btn btn-sm btn-secondary1 rounded-circle d-flex justify-content-center align-items-center ms-2"
                    style="width: 24px; height: 24px"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="detail-box">
                <h5>
                  {{ product.name }}
                </h5>
                <h6>
                  {{ product.price }}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-box pb-5">
          <a href="" class="text-decoration-none"> View All products </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Product",
  mounted() {
    this.checkCart();
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Men's Shirt",
          price: "$75",
          image: "/images/p1.png",
          option1: "Men's Shirt",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 2,
          name: "Men's Shirt",
          price: "$80",
          image: "/images/p2.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 3,
          name: "Women's Dress",
          price: "$68",
          image: "/images/p3.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 4,
          name: "Women's Dress",
          price: "$70",
          image: "/images/p4.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 5,
          name: "Women's Dress",
          price: "$75",
          image: "/images/p5.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 6,
          name: "Women's Dress",
          price: "$58",
          image: "/images/p6.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 7,
          name: "Women's Dress",
          price: "$80",
          image: "/images/p7.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 8,
          name: "Men's Shirt",
          price: "$65",
          image: "/images/p8.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 9,
          name: "Men's Shirt",
          price: "$65",
          image: "/images/p9.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 10,
          name: "Men's Shirt",
          price: "$65",
          image: "/images/p10.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 11,
          name: "Men's Shirt",
          price: "$65",
          image: "/images/p11.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
        {
          id: 12,
          name: "Women's Dress",
          price: "$65",
          image: "/images/p12.png",
          option1: "Add To Cart",
          option2: "Buy Now",
          quantity: 1,
          isInCart: false,
        },
      ],
    };
  },
  methods: {
    checkCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      this.products.forEach((p) => {
        const item = cart.find((c) => c.id === p.id);
        if (item) {
          p.isInCart = true;
          p.quantity = item.quantity;
        } else {
          p.isInCart = false;
          p.quantity = 1;
        }
      });
    },
    increaseQuantity(product) {
      product.quantity++;
      this.updateCart(product);
    },
    decreaseQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
        this.updateCart(product);
      } else if (product.quantity === 1) {
        this.removeFromCart(product);
        product.isInCart = false;
      }
    },
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ ...product });
      localStorage.setItem("cart", JSON.stringify(cart));
      product.isInCart = true;
      // alert("Added to cart!");
    },
    removeFromCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    updateCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity = product.quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    },
  },
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
  padding: 10px;
  border-radius: 4px;
}

.btn-primary2:hover {
  background-color: rgb(251, 251, 251);
  border: #002c3e 1px solid;
  color: black;
}

.myBtn {
  background-color: #d6d8d8;
  top: -23px;
  right: -30px;
}

/* Responsive adjustments for counter container */
@media (max-width: 767px) {
  .myBtn {
    top: -20px;
    right: -20px;
    padding: 4px 8px;
  }
  .myBtn button {
    width: 20px;
    height: 20px;
    font-size: 12px;
  }
  .myBtn span {
    font-size: 14px;
    margin: 0 6px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .myBtn {
    top: -21px;
    right: -25px;
  }
  .myBtn button {
    width: 22px;
    height: 22px;
  }
  .myBtn span {
    font-size: 15px;
    margin: 0 8px;
  }
}
</style>
