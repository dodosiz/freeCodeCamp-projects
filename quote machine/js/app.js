(function(angular) {
  'use strict';
var myApp = angular.module('quoteApp', []);

myApp.controller('quoteController', ['$scope', function($scope) {
    $scope.giveQuote = function (number) {
		    switch(number) {
				case 1:
					return "Don't cry because it's over, smile because it happened.";
				case 2:
					return "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.";	
				case 3:
					return "Be the change that you wish to see in the world.";
				case 4:
					return "Be yourself; everyone else is already taken.";
				case 5:
					return "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
				case 6:
					return "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.";
				case 7:
					return "So many books, so little time.";
				case 8:
					return "A room without books is like a body without a soul.";
				case 9:
					return "You know you're in love when you can't fall asleep because reality is finally better than your dreams.";
				case 10:
					return "You only live once, but if you do it right, once is enough.";
				default:
					return "Do you even lift?";   
		    }
    }
    $scope.setQuote = function () {
		  var randomNumber = Math.floor((Math.random() * 10) + 1);
		  $scope.quote = $scope.giveQuote(randomNumber);
    }
}]);
})(window.angular);