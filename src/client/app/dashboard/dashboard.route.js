(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'shell.dashboard',
                config: {
                    url: '/dashboard',
                    template: '<dashboard></dashboard>',
                    title: 'Dashboard',
                    access: {
                        requiredLogin: false
                    }
                }
            }
        ];
    }
})();
