(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.dashboard')
        .component('dashboard', {
            templateUrl: 'src/client/app/dashboard/dashboard.component.html',
            controller: DashboardController,
            controllerAs: 'vm',
            bindings: {
            },
        });

    DashboardController.$inject = [];
    function DashboardController() {

        var vm = this;
        vm.title = 'Dashboard';

        ////////////////

        vm.onInit = function() { };
        vm.onChanges = function(changesObj) { };
        vm.onDestory = function() { };
    }
})();
