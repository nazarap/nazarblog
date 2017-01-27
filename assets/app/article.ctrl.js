/**
 * Created by nazarco on 1/26/17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleController", function ($http, $stateParams) {
            var vm = this;

            $http.get("article/watch?article_link=" + $stateParams.article_link).then(function (response) {
              vm.article = response.data;
            });

        })
})();
