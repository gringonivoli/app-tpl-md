(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.layout')
        .component('mdWindow', {
            transclude: true,
            templateUrl: 'src/client/app/layout/md-window.component.html',
            controller: MdWindowController,
            controllerAs: 'vm',
            bindings: {
                title: '@toolbarTitle',
                newi: '&?'
            },
        });

    MdWindowController.$inject = ['$timeout'];
    function MdWindowController($timeout) {

        var vm = this;
        vm.element = null;

        ////////////////

        vm.$onInit = function() {};
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() {
            vm.element.slimScroll({destroy: true});
            $(window, 'body').off('resize', resizer);
        };

        vm.$postLink = function() {
            scrollContent();
            $(window, 'body').resize(resizer);
        };

        function scrollContent() {
            vm.element = vm.element || $('.window-content');
            vm.element.slimScroll({destroy: true});
            vm.element.slimScroll({
                'height': ($(window).height() - 64) + 'px'
            });
        }

        function resizer() {
            scrollContent();
        }
    }
})();
