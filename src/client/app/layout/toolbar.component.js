(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.layout')
        .component('toolbar', {
            transclude: true,
            templateUrl: 'src/client/app/layout/toolbar.component.html',
            controller: ToolbarController,
            controllerAs: 'vm',
            bindings: {
                toolbarTitle: '@'
            }
        });

    ToolbarController.$inject = ['$mdSidenav', 'config'];
    function ToolbarController($mdSidenav, config) {

        var vm = this;
        vm.appTitle = config.appTitle;
        vm.toggle = toggle;

        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() { };

        function toggle() {
            $mdSidenav('left').toggle();
        }
    }
})();
