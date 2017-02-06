/**
 * Created by nazarco on 1/26/17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleCreateController", function ($http, $state, $scope, $stateParams) {
            var vm = this;

            String.prototype.replaceAll = function(search, replacement) {
              var target = this;
              return target.split(search).join(replacement);
            };

            if($stateParams.state == "updateArticle") {

                $http.get("article/" + $stateParams.id).then(function (response) {
                    vm.article = response.data
                });

            } else {
                vm.article = {
                    title: "",
                    text: "My story ...",
                    link: ""
                };
            }


            vm.isOpenPreview = false;

            vm.publish = function() {
              vm.article.link = vm.article.title.toLowerCase().replaceAll(" ", "-");

              if($stateParams.state == "updateArticle") {
                  $http.post("article/" + $stateParams.id, vm.article).then(function (response) {
                      $state.go('article', {article_link: vm.article.link});
                  });
              } else {
                  $http.post("article/create", vm.article).then(function (response) {
                      $state.go('article', {article_link: vm.article.link});
                  });
              }

            };

            vm.closePreview = function () {
                vm.isOpenPreview = false;
            };

            vm.tinymceOptions = {
                plugins: [
                  "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                  "searchreplace wordcount visualblocks visualchars code fullscreen",
                  "insertdatetime media nonbreaking save table contextmenu directionality",
                  "emoticons template paste textcolor colorpicker textpattern"
                ],
                font_formats: '"Open Sans", sans-serif',
                height: "250px",
                setup: function(editor) {
                    editor.addMenuItem('soundCloud', {
                        icon: 'redo',
                        text: 'SoundCloud',
                        context: 'insert',
                        onclick: function() {
                            editor.windowManager.open({
                                title: 'Insert SoundCloud player',
                                body: [
                                    {
                                        type: 'textbox',
                                        name: 'scLink',
                                        label: 'SoundCloud link',
                                        value: '',
                                        minWidth: 400
                                    }
                                ],
                                onsubmit: function(e) {
                                    editor.insertContent('<iframe src="' + e.data.scLink + '" frameborder="0" height="300" style="width: 100%"></iframe>');
                                }
                            });
                        }
                    });


                    editor.addMenuItem('previewBtn', {
                        icon: 'redo',
                        text: 'Preview',
                        context: 'tools',
                        onclick: function() {
                            vm.isOpenPreview = true;
                            vm.now = new Date();
                            $scope.$apply();
                        }
                    });

                },
            };
        })
})();
