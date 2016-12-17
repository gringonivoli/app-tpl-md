(function() {
    'use strict';

    angular.module('app.core', [
        'ngMaterial', 'ngMdIcons', 'ngAnimate', 'ngSanitize', 'ngMessages', 'ngResource',
        'ngCookies',

        'blocks.exception', 'blocks.logger', 'blocks.router',
        'blocks.auth',
        'blocks.history',

        'ui.router',
        'angular-storage',
        'angular-jwt', 'angular-loading-bar',
        'angularUtils.directives.dirPagination',
        'angular-clipboard'
    ]);
})();
