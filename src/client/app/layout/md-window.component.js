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
                toolbarTitle: '@',
                newi: '&?'
            },
        });

    MdWindowController.$inject = ['$mdMedia'];
    function MdWindowController($mdMedia) {

        var vm = this;
        var content = null;

        ////////////////

        vm.$onInit = function() {};
        vm.$onChanges = function(changesObj) { };
        vm.$onDestory = function() {
            content.slimScroll({destroy: true});
            $(window, 'body').off('resize', scrollContent);
        };

        vm.$postLink = function() {
            scrollContent();
            $(window, 'body').resize(scrollContent);
        };

        function scrollContent() {
            content = content || $('.content-md-window');
            var toolbarHeight = $mdMedia('gt-sm') ? 64 : ($mdMedia('gt-xs') ? 48 : 56);
            content.slimScroll({destroy: true});
            content.slimScroll({
                'height': ($(window).height() - toolbarHeight) + 'px'
            });
        }
    }
})();
