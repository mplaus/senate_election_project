var app = angular.module('myApp', []);
    
    app.controller('BaseController', ['$http', function ($http) {

    this.senateData = [ ];
    var _this = this;
    
    $http.get('js/senateinfo.json')
        .success(function(data) {
            _this.senateData = data;
            console.log(data);
        })
        .error(function(msg) {
            console.log("Error");
        })

}]);