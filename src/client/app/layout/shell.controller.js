(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellOLDController', ShellOLDController);

    ShellOLDController.$inject = ['$scope', 'config'];
    function ShellOLDController($scope, config) {

        var vm = this;
        vm.user = {};
        vm.navline = {
            title: config.appTitle
        };
        vm.prefix = config.appTitle + ':';

        activate();

        ////////////////

        function activate() {
            setUser();
        }

        function setUser() {
            $scope.$on('userLogged', function (event, user) {
                vm.user = user;
            });
        }
    }
})();
