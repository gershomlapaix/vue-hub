const app = Vue.createApp({
  data: function () {
    // or data(){}
    return {
      cart: 0,
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

/**
 * Vue allows to create Reactivity Systems
 *
 */
