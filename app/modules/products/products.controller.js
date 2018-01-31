(() => {
    'use strict';
    angular.module("shiffAdmin").controller("productsController", ["$scope", "headerInfo", "productsService", productsController])
    function productsController($scope, headerInfo, productsService) {
        let getHeaderInfo = (page) => {
            headerInfo.getHeaderInfo(page).then((res) => {
                $scope.page = res;
            })
        }
        let getAllProducts = () => {
            productsService.getProducts().then((res) => {
                $scope.products = res;
            });
        }
        $scope.notification = {
            "text": "Playstation 4 Game Console listing was successfully created.",
            "class": "green"
        }
        getHeaderInfo("products");
        getAllProducts();
    }
})();