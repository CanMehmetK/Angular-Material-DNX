// Write your Javascript code.
var CrmApp = angular.module('CrmApp', ['ngMaterial', 'ngMessages', function () {
    console.log('app Start ->1');

}]).run(function ($rootScope, $mdSidenav) {
    console.log('Bootstrapper runned ->2');
    // Global Değişkenler
    $rootScope.testString = ServerUserName;
    $rootScope.menu = {};
    //
    $rootScope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };
}).filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
}).filter('humanizeDoc', function () {
    return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
            return doc.name.replace(/([A-Z])/g, function ($1) {
                return '-' + $1.toLowerCase();
            });
        }
        return doc.label || doc.name;
    };
});

