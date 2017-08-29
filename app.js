const app = angular.module('supermercado', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider.
        when('/', {
            templateUrl: 'app/login/index.html',
            controller: 'loginController'
        }).
        when('/home', {
            templateUrl: 'app/home/index.html',
            controller: 'homeController'
        })
        .when('/produtos', {
            templateUrl: 'app/produtos/index.html',
            controller: 'produtoController'
        })
        .when('/pedidos', {
            templateUrl: 'app/pedidos/index.html',
            controller: 'pedidoController'
        })
        .when('/checkout', {
            templateUrl: 'app/checkout/index.html',
            controller: 'checkoutController'
        })
        .when('/carrinho', {
            templateUrl: 'app/carrinho/index.html',
            controller: 'carrinhoController'
        })
        .otherwise({redirectTo: '/'})
})

app.run(['$rootScope', ($rootScope) => {
    $rootScope.pages = ['home', 'checkout', 'pedidos', 'produtos', 'carrinho']
}])
