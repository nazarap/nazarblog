/**
 * Created by nazarco on 1/26/17.
 */
(function () {
    angular.module("mainApp")
        .controller("RootController", function ($sce) {
            var vm = this;

            vm.authorName = "Nazar Oryshcuk";
            vm.facebookLink = "https://www.facebook.com/profile.php?id=100006848356315&lst=100006848356315%3A100006848356315%3A1485463992&sk=friends&source_ref=pb_friends_tl";
            vm.githubLink = "https://github.com/nazarap";
            vm.vkLink = "https://vk.com/id136969705";
            vm.twitterLink = "Twitter LINK";

            vm.myDescription = "Autodidact & programmer. Amateur: barista, off-roader, illustrator. I like fountain pens and paper. Let's connect."


            vm.toTrustedHTML = function(html) {
              return $sce.trustAsHtml( html );
            }
      })
})();
