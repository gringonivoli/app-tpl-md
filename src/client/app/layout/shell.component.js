(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('app.layout')
        .component('shell', {
            templateUrl: 'src/client/app/layout/shell.component.html',
            controller: ShellController,
            controllerAs: 'vm',
            bindings: {}
        });

    ShellController.$inject = ['ssSideNav', '$mdSidenav', '$scope', 'config'];
    function ShellController(ssSideNav, $mdSidenav, $scope, config) {

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
        vm.toggle = toggle;
        vm.appTitle = config.appTitle;
        vm.prefix = config.appTitle + ':';

        ////////////////

        vm.onInit = function() {
            setUser();
        };
        vm.onChanges = function(changesObj) { };
        vm.onDestory = function() { };

        function toggle() {
            $mdSidenav('left').toggle();
        }

        function setUser() {
            $scope.$on('userLogged', function (event, user) {
                vm.user = user;
            });
        }
    }
})();
