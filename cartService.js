angular.module('myApp')
.service('cartService', function() {
  this.addToCart = function(product) {
    console.log(`Adding ${product} to cart`);
  }
})