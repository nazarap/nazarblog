/**
 * Created by nazarco on 26.01.17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleListController", function ($http) {
            var vm = this;
            vm.page = 1;
            $http.get("article/list?page=" + vm.page).then(function (response) {
              vm.articleList = response.data;
            });

        })
})();
