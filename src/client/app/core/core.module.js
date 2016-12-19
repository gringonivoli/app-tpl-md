(function() {
    'use strict';

    angular.module('app.core', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial',
        'ngMdIcons',

        'blocks.exception', 'blocks.logger', 'blocks.router',
        'blocks.auth',
        'blocks.history',

        'ui.router', 'sasrio.angular-material-sidenav',
        'angular-storage',
        'angular-jwt', 'angular-loading-bar', 'ui.slimscroll'
    ]);
})();
