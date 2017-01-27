/**
 * Created by nazarco on 1/26/17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleController", function ($sce) {
            var vm = this;

            vm.article = {
                title: "Follow my Adventures",
                date: new Date(),
                text: '<p>Since my Google journey has ended, I won`t be posting here anymore. </p>' +
                      '<p><img src="Follow%20my%20Adventures_files/moved-1484169715044.jpg" alt="moved to other blog"></p>' +
                      '<p>If you like me, you can follow my adventures over on my other blog, <a href="https://startupnextdoor.com/">Startup Next Door</a>.</p>' +
                      '<p>Feel free to connect on Linkedin: <a href="http://www.linkedin.com/in/johnawasham">http://www.linkedin.com/in/johnawasham</a></p>' +
                      '<p>and my other social thingies:</p>' +
                      '<ul><li>Twitter: <a href="https://twitter.com/startupnextdoor">@startupnextdoor</a></li>' +
                      '<li><a href="https://github.com/jwasham">Github</a></li></ul>' +
                      '<p>Best of luck to you all!</p>'
            };

            vm.toTrustedHTML = function(html) {
                return $sce.trustAsHtml( html );
            }
        })
})();