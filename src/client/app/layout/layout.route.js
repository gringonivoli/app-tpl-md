(function() {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'shell',
                config: {
                    url: '/in',
                    template: '<shell></shell>',
                    title: '',
                    access: {
                        requiredLogin: false
                    }
                }
            }
        ];
    }
})();
