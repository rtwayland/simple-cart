angular.module('myApp')
    .controller('mainCtrl', function($scope, productService, cartService) {
        $scope.products = productService.getProducts();

        $scope.addToCart = function(product) {
            cartService.addToCart(product).then(function(res) {
                cartService.getCart().then(function(res) {
                    $scope.cart = res.data;
                    console.log($scope.cart);
                });
            });
        }

        cartService.getCart().then(function(res) {
            $scope.cart = res.data;
        });
    })
