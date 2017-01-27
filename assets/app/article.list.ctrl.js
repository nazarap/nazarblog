/**
 * Created by nazarco on 26.01.17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleListController", function ($http) {
            var vm = this;

            $http.get("article/list").then(function (response) {
              vm.articleList = response.data.reverse();
            });

        })
})();
