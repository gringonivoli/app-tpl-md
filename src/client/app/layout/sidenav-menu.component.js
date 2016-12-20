(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.layout')
        .component('sidenavMenu', {
            templateUrl: 'src/client/app/layout/sidenav-menu.component.html',
            controller: SidenavMenuController,
            controllerAs: 'vm',
            bindings: {
                title: '@appTitle'
            }
        });

    SidenavMenuController.$inject = ['ssSideNav', '$scope'];
    function SidenavMenuController(ssSideNav, $scope) {

        var vm = this;
        ssSideNav.sections = [{
                id: 'toogle_1',
                name: 'Section Heading 2',
                type: 'heading',
                children: [{
                    name: 'Toogle 1',
                    type: 'toggle',
                    icon: 'more_vert',
                    pages: [{
                        id: 'toogle_1_link_1',
                        name: 'item 1',
                        state: 'login'
                    }, {
                        id: 'toogle_1_link_2',
                        name: 'item 2',
                        state: 'login',
                        hidden: true
                    }, {
                        id: 'toogle_1_link_3',
                        name: 'item 3',
                        state: 'login'
                    }]
                }]
            }, {
                id: 'link_1',
                name: 'Link 1 ',
                state: 'login',
                type: 'link',
                icon: 'more_vert'
            }, {
                id: 'link_2',
                name: 'Link 2',
                state: 'login',
                type: 'link'
            }, {
                id: 'link_3',
                name: 'Link 3',
                state: 'login',
                type: 'link',
                hidden: true
            },  {
                id: 'toogle_2',
                name: 'Section Heading 2',
                type: 'heading',
                children: [{
                    name: 'Toogle 2',
                    type: 'toggle',
                    pages: [{
                        id: 'toogle_2_link_1',
                        name: 'item 1',
                        state: 'login'
                    }]
                }]
            },
            {
                children: [{
                    name: 'Toogle 1',
                    type: 'toggle',
                    icon: 'more_vert',
                    pages: [{
                        id: 'toogle_2_link_1',
                        name: 'item 1',
                        state: 'login'
                    }, {
                        id: 'toogle_2_link_2',
                        name: 'item 2',
                        state: 'login',
                        hidden: true
                    }, {
                        id: 'toogle_2_link_3',
                        name: 'item 3',
                        state: 'login'
                    }]
                }]
            }, {
                id: 'link_2_1',
                name: 'Link 1 ',
                state: 'login',
                type: 'link',
                icon: 'more_vert'
            }, {
                id: 'link_2_2',
                name: 'Link 2',
                state: 'login',
                type: 'link'
            }, {
                id: 'link_2_3',
                name: 'Link 3',
                state: 'login',
                type: 'link',
                hidden: true
            },  {
                id: 'toogle_2',
                name: 'Section Heading 2',
                type: 'heading',
                children: [{
                    name: 'Toogle 2',
                    type: 'toggle',
                    pages: [{
                        id: 'toogle_2_2_link_1',
                        name: 'item 1',
                        state: 'login'
                    }]
                }]
            },{
                children: [{
                    name: 'Toogle 1',
                    type: 'toggle',
                    icon: 'more_vert',
                    pages: [{
                        id: 'toogle_3_link_1',
                        name: 'item 1',
                        state: 'login'
                    }, {
                        id: 'toogle_3_link_2',
                        name: 'item 2',
                        state: 'login',
                        hidden: true
                    }, {
                        id: 'toogle_3_link_3',
                        name: 'item 3',
                        state: 'login'
                    }]
                }]
            }, {
                id: 'link_1',
                name: 'Link 1 ',
                state: 'login',
                type: 'link',
                icon: 'more_vert'
            }, {
                id: 'link_2',
                name: 'Link 2',
                state: 'login',
                type: 'link'
            }, {
                id: 'link_3',
                name: 'Link 3',
                state: 'login',
                type: 'link',
                hidden: true
            },  {
                id: 'toogle_2',
                name: 'Section Heading 2',
                type: 'heading',
                children: [{
                    name: 'Toogle 2',
                    type: 'toggle',
                    pages: [{
                        id: 'toogle_2_link_1',
                        name: 'item 1',
                        state: 'login'
                    }]
                }]
            }];
        vm.menu = ssSideNav;
        vm.element = null;

        ////////////////

        vm.$onInit = function() {
            setUser();
        };
        vm.$onChanges = function(changesObj) {
        };
        vm.$onDestory = function() {
            vm.element.slimScroll({destroy: true});
            $(window, 'body').off('resize', resizer);
        };

        vm.$postLink = function() {
            scrollMenu();
            $(window, 'body').resize(resizer);
        };

        function scrollMenu() {
            vm.element = vm.element || $('.menu-sidenav-menu');
            vm.element.slimScroll({destroy: true});
            vm.element.slimScroll({
                'height': ($(window).height() - 188) + 'px'
            });
        }

        function setUser() {
            $scope.$on('userLogged', function (event, user) {
                vm.user = user;
            });
        }

        function resizer() {
            scrollMenu();
        }
    }
})();
