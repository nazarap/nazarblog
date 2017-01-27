/**
 * Created by nazarco on 1/26/17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleCreateController", function () {
            var vm = this;

            vm.article = {
                title: "",
                date: new Date(),
                text: "My story ..."
            };

            vm.publish = function() {
                console.log(vm.article);
            };


            vm.tinymceOptions = {
                font_formats: '"Open Sans", sans-serif',
                height: "250px"
            };
        })
})();