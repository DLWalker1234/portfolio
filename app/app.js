'use strict';

console.log('app');

let portfolioApp = angular.module("PortfolioApp", ["ngRoute"]);




portfolioApp.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController',
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'ContactController',
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutController',
        })
        .when('/tech', {
            templateUrl: 'partials/tech.html',
            controller: 'TechController',
        })
        .when('projects', {
            templateUrl: 'partials/projects.html',
            controller: 'ProjectsController',
        })
        .when('project1', {
            templateUrl: 'partials/project1.html',
            controller: 'Project1Controller',
        })
        .when('project2', {
            templateUrl: 'partails/project2.html',
            controller: 'Project2Controller',
        })
        .otherwise('/');
});