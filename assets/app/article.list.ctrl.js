/**
 * Created by nazarco on 26.01.17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleListController", function ($http, $background) {
            var vm = this;
            vm.page = 1;
            vm.totalPage = 0;
            vm.total = 0;
            var limit = 10;

            vm.backgound = $background.get();

            var getList = function () {
                $http.get("article/list?page=" + vm.page + "&limit=" + limit).then(function (response) {
                    vm.articleList = response.data.data;
                    vm.totalPage = Math.ceil(response.data.total / limit);
                    vm.total = response.data.total;
                });
            };
            getList();

            vm.changePage = function (nextPageIndex) {
                vm.page += nextPageIndex;
                getList();
            }
        })
})();
