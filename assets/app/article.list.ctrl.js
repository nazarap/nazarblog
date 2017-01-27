/**
 * Created by nazarco on 26.01.17.
 */
(function () {
    angular.module("mainApp")
        .controller("ArticleListController", function () {
            var vm = this;

            vm.articleList = [
                {
                    title: "Follow my Adventures",
                    link: "follow-my-adventures",
                    text: "Since my Google journey has ended, I won't be posting here anymore. If you like me, you can follow my adventures over on my other blog,",
                    date: new Date(),
                    commentsCount: 2
                },
                {
                    title: "Follow my Adventures",
                    link: "follow-my-adventures",
                    text: "Since my Google journey has ended, I won't be posting here anymore. If you like me, you can follow my adventures over on my other blog,",
                    date: new Date(),
                    commentsCount: 2
                },
                {
                    title: "Follow my Adventures",
                    link: "follow-my-adventures",
                    text: "Since my Google journey has ended, I won't be posting here anymore. If you like me, you can follow my adventures over on my other blog,",
                    date: new Date(),
                    commentsCount: 2
                },
                {
                    title: "Follow my Adventures",
                    link: "follow-my-adventures",
                    text: "Since my Google journey has ended, I won't be posting here anymore. If you like me, you can follow my adventures over on my other blog,",
                    date: new Date(),
                    commentsCount: 2
                }
            ];
        })
})();