app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="theImage">
                    <!-- 1. binding -->
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>

                    <!-- 2. conditional rendering -->
                    <!-- <p v-if="inStock > 10">In Stock</p>
                    <p v-else-if="inStock <= 10 && inStock > 0"> Almost sold out</p>
                    <p v-else>Out of Stock</p> -->
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>

                    <!-- or use -->
                    <!-- <p v-show="inStock">In stock</p> -->

                    <!-- 3. listing with v-for directive-->
                    <ul>
                        <li v-for="detail in details">{{detail}}</li>
                    </ul>

                    <div v-for="(variant, index) in variants" :key="variant.id" :class="[isActive ? activeClass : '']" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}"></div>

                    <!-- 4. Event handling && and class binding-->
                    <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
                </div>
            </div>
        </div>
    `,

  data: function () {
    return {
      product: "Socks",
      brand: "LaG",
      selectedVariant: 0,
      inStock: false,
      isActive: true,
      details: ["50% cotton", "30% wool", "20% ployester"],
      variants: [
        {
          id: 2234,
          color: "green",
          itemImage: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 3324,
          color: "blue",
          itemImage: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },

    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },

    theImage() {
      return this.variants[this.selectedVariant].itemImage;
    },
    inStock() {
      // console.log();
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
