var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);
    
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
        if (election == "no") {
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
    
    app.filter("emptyIfBlank", function() { return function(object, query){
    if(!query)
        return {}
    else
        return object;
}});
   
   //toggle function
this.column = "last";
 
this.toggle = false;

this.toggleIt = function(column) {
   
   
   if (this.column == column) {
     this.toggle = !this.toggle;
   };
   this.column = column;
}

//Popover display candidates
this.accessCandidate = function (state, runner) {
    console.log(runner)
    for (i= 0; i < this.senateData.length; i++) {
        if (state == this.senateData[i].stateName) {
            for (j = 0; j < 1; j++) {
                for (k = 0; k < this.senateData[i].seat[j].candidate.length; k++) {
                    if (runner == this.senateData[i].seat[j].candidate[k].lastName) {
                        document.write = "Dick Whitman";
                    }
                }
                
                //if (runner == this.senateData[i].seat[j].candidate) {
                //    console.log("apples and bannanas");
                //    
                //}
            }  
        }
    }
    }

}]);
    
   
   

    
//angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
app.controller('PopoverDemoCtrl', function ($scope) {
  $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };

  $scope.placement = {
    options: [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom'
    ],
    selected: 'top'
  };
  
  
});
    
