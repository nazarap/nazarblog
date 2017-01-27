/**
 * Created by nazarco on 1/26/17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleCreateController", function ($http) {
            var vm = this;

            String.prototype.replaceAll = function(search, replacement) {
              var target = this;
              return target.split(search).join(replacement);
            };

            vm.article = {
              title: "",
              text: "My story ...",
              link: ""
            };

            vm.publish = function() {
              vm.article.link = vm.article.title.toLowerCase().replaceAll(" ", "-");

              $http.post("article/create", vm.article).then(function (response) {
                console.log(response);
              });
            };


            vm.tinymceOptions = {
                font_formats: '"Open Sans", sans-serif',
                height: "250px"
            };
        })
})();
