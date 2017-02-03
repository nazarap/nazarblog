/**
 * Created by nazarco on 26.01.17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleListController", function ($http) {
            var vm = this;
            vm.page = 1;
            vm.totalPage = 0;
            var limit = 10;

            var getList = function () {
                $http.get("article/list?page=" + vm.page + "&limit=" + limit).then(function (response) {
                    vm.articleList = response.data.data;
                    vm.totalPage = Math.ceil(response.data.total / limit);
                });
            };
            getList();

            vm.changePage = function (nextPageIndex) {
                vm.page += nextPageIndex;
                getList();
            }
        })
})();
