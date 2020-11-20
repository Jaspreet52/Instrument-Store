var app = new Vue({
  el: "#app",
  data: {
    parentNumber: 0,
    empty: "",
    buttons: "Add to Cart",
    instruments: [
      {
        name: "Guitar",
        type: "String",
        price: "200",
        brand: "Fender",
        img: "https://sc1.musik-produktiv.com/pic-010113174xxl/fender-custom-shop-1957-stratocaster-heavy-relic-black-10113174.jpg",
        color: "red",
        show: false
      },
      {
        name: "Violin",
        type: "String",
        price: "350",
        brand: "Yamaha",
        img:
          "https://images.reverb.com/image/upload/s--NMhbq565--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1450379109/zig0cc2vlznlusbf8b5o.jpg",
        color: "green",
        show: false
      },
      {
        name: "Piano",
        type: "Keyboard",
        price: "600",
        brand: "Fender",
        img:
          "https://i.pinimg.com/564x/3d/06/32/3d0632bb5a93e6028b2b710ff6f06a3e.jpg",
        color: "red",
        show: false
      },
      {
        name: "Trumpet",
        type: "Wind",
        price: "200",
        brand: "Fender",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/712ZyImPK8L._AC_SL1500_.jpg",
        color: "red",
        show: false
      },
      {
        name: "Flute",
        type: "Wind",
        price: "105",
        brand: "Yamaha",
        img: "https://www.fluteworld.com/wp-content/uploads/2019/10/YFL894W_maini.jpg",
        color: "green",
        show: false
      },
      {
        name: "Drums",
        type: "Percussion",
        price: "800",
        brand: "Yamaha",
        img:
          "https://media.sweetwater.com/api/i/q-85__ha-4f0f5b78060c38a2__hmac-cac63197ba0b88bbab514da2175254f7320593fe/images/items/1800/SBP2F57-CR-xlarge.jpg",
        color: "green",
        show: false
      },
      {
        name: "Saxophone",
        type: "Wind",
        price: "500",
        brand: "Maton",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/61phRUj2Y4L._AC_SX425_.jpg",
        color: "blue",
        show: false
      },
      {
        name: "Recorder",
        type: "Wind",
        price: "90",
        brand: "Maton",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/31n72%2BSf0GL._AC_SY355_.jpg",
        color: "blue",
        show: true
      },
      {
        name: "Ukelele",
        type: "String",
        price: "250",
        brand: "Maton",
        img:
          "https://cdn.shopify.com/s/files/1/0367/8045/products/guitar218.jpg?v=1527476644",
        color: "blue",
        show: false
      }
    ],
    showPopUp: false,
    popUpItem: {},
    instrumentName: "",
    instrumentType: "",
    brandInput: "",
    priceInput: ""
  },
  methods: {
         increaseNumber: function(index) {
      this.parentNumber = this.parentNumber + 1;
      this.instruments.splice(index, 1);
          if (this.parentNumber >= 9) {
        this.empty = "Store is empty!";
      }
    },
    
    popUp: function(item) {
      this.showPopUp=!this.showPopUp;
      this.popUpItem=item;
    },
    
    resetNumber: function(index, data) {
      this.parentNumber = 0;
      this.empty = "";
      this.instruments.length = 0;
      this.instruments.push({
         name: "Guitar",
        type: "String",
        price: "200",
        brand: "Fender",
        img: "https://sc1.musik-produktiv.com/pic-010113174xxl/fender-custom-shop-1957-stratocaster-heavy-relic-black-10113174.jpg",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Violin",
        type: "String",
        price: "350",
        brand: "Yamaha",
        img:
          "https://images.reverb.com/image/upload/s--NMhbq565--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1450379109/zig0cc2vlznlusbf8b5o.jpg",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Piano",
        type: "Keyboard",
        price: "600",
        brand: "Fender",
        img:
          "https://i.pinimg.com/564x/3d/06/32/3d0632bb5a93e6028b2b710ff6f06a3e.jpg",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Trumpet",
        type: "Wind",
        price: "200",
        brand: "Fender",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/712ZyImPK8L._AC_SL1500_.jpg",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Flute",
        type: "Wind",
        price: "105",
        brand: "Yamaha",
        img: "https://www.fluteworld.com/wp-content/uploads/2019/10/YFL894W_maini.jpg",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Drums",
        type: "Percussion",
        price: "800",
        brand: "Yamaha",
        img:
          "https://media.sweetwater.com/api/i/q-85__ha-4f0f5b78060c38a2__hmac-cac63197ba0b88bbab514da2175254f7320593fe/images/items/1800/SBP2F57-CR-xlarge.jpg",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Saxophone",
        type: "Wind",
        price: "500",
        brand: "Maton",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/61phRUj2Y4L._AC_SX425_.jpg",
        color: "blue",
        show: false
      });
      this.instruments.push({
        name: "Recorder",
        type: "Wind",
        price: "90",
        brand: "Maton",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/31n72%2BSf0GL._AC_SY355_.jpg",
        color: "blue",
        show: true
      });
      this.instruments.push({
       name: "Ukelele",
        type: "String",
        price: "250",
        brand: "Maton",
        img:
          "https://cdn.shopify.com/s/files/1/0367/8045/products/guitar218.jpg?v=1527476644",
        color: "blue",
        show: false
      });
    },
    newInstrument: function() {
      this.instruments.push({
        name: this.instrumentName,
        type: this.instrumentType,
        brand: this.brandInput,
        price: this.priceInput,
        show: false,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
      });

      this.instrumentName = "";
    }
  }
});