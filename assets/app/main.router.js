/**
 * Created by nazarco on 08.12.16.
 */
(function () {
    'use strict';


    angular.module("mainApp")
        .config(function($stateProvider, $urlRouterProvider){


            $stateProvider

                .state('login', {
                    url: '/login',
                    controller: 'LoginController',
                    controllerAs: '$login',
                    templateUrl: 'dist/templates/login/login.html'
                })

                .state('articleList', {
                    url: '/articles',
                    controller: 'ArticleListController',
                    controllerAs: '$articleList',
                    templateUrl: 'templates/article_list.html'
                })

                .state('article', {
                    url: '/article/:title_id',
                    controller: 'ArticleController',
                    controllerAs: '$article',
                    templateUrl: 'templates/article.html'
                })

                .state('createArticle', {
                    url: '/create/article',
                    controller: 'ArticleCreateController',
                    controllerAs: '$create',
                    templateUrl: 'templates/article_create.html'
                });

            $urlRouterProvider.when('/', '/articles');
            $urlRouterProvider.when('', '/articles');
        })
})();