<template>
  <div class="sub_page">
    <section class="inner_page_head">
      <div class="container_fuild">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <h3>Products</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product_section layout_padding">
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
              <div class="option_container">
                <div class="options">
                  <a href="" class="option1">
                    {{ product.option1 }}
                  </a>
                  <a href="" class="option2">
                    {{ product.option2 }}
                  </a>
                </div>
              </div>
              <div class="img-box">
                <img :src="product.image" :alt="product.name" />
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
        <div class="btn-box">
          <a href=""> View All products </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Product",
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
        },
        {
          id: 2,
          name: "Men's Shirt",
          price: "$80",
          image: "/images/p2.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 3,
          name: "Women's Dress",
          price: "$68",
          image: "/images/p3.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 4,
          name: "Women's Dress",
          price: "$70",
          image: "/images/p4.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 5,
          name: "Women's Dress",
          price: "$75",
          image: "/images/p5.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 6,
          name: "Women's Dress",
          price: "$58",
          image: "/images/p6.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 7,
          name: "Women's Dress",
          price: "$80",
          image: "/images/p7.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 8,
          name: "Men's Shirt",
          price: "$65",
          image: "/images/p8.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 9,
          name: "Men's Shirt",
          price: "$65",
          image: "/images/p9.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 10,
          name: "Men's Shirt",
          price: "$65",
          image: "/images/p10.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 11,
          name: "Men's Shirt",
          price: "$65",
          image: "/images/p11.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
        {
          id: 12,
          name: "Women's Dress",
          price: "$65",
          image: "/images/p12.png",
          option1: "Add To Cart",
          option2: "Buy Now",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
