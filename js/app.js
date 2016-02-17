var app = angular.module('myApp', []);
    
    app.controller('BaseController', ['$http', function ($http) {

    this.senateData = [ ];
    var _this = this;
    this.currentState = 0;
    
    $http.get('js/senateinfo.json')
        .success(function(data) {
            _this.senateData = data;
            console.log(data);
        })
        .error(function(msg) {
            console.log("Error");
        })
        
        
        this.collapseState = function(stateName) {
            console.log(stateName);
    this.currentState++;
    if (this.currentState > this.senateData.length - 1) {
      this.currentState = 0;
    }
  };
  
  this.setState = function(data){
    this.currentState = this.senateData.indexOf(data);
  };
  
    this.contestedSeat = function(election){
        if (election == "yes") {
            return "is not";
        }
        else {
            return "is"
        }
    }
    
   this.partyColor = function(party){
        if (party == "Democrat") {
           return "democrat"
        }
        else if (party == "Republican") {
            return "republican"
        }
        else {
            return "independent"
        }
    }
   

}]);
    
    