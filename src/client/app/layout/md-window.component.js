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

        ////////////////

        vm.$onInit = function() {};
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() {
            $('.window-content').slimScroll({destroy: true});
        };

        vm.$postLink = function() {
            scrollContent();
            $(window, 'body').resize(function () {
                console.info('scroll again!');
                scrollContent();
            });
        };

        function scrollContent() {
            $('.window-content').slimScroll({destroy: true});
            $('.window-content').slimScroll({
                'height': ($(window).height() - 64) + 'px'
            });
        }
    }
})();
