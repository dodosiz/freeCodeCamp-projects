(function(angular) {
  'use strict';
var myApp = angular.module('quoteApp', []);

myApp.controller('quoteController', ['$scope', function($scope) {
	$scope.previousNumber = 0;
	$scope.hideRefresh = true;
    $scope.giveQuote = function (number) {
		    switch(number) {
				case 1:
					return {quote: "Don't cry because it's over, smile because it happened.",
								link:"http://ctt.ec/CkS8f",}
				case 2:
					return {quote: "A friend is someone who knows all about you and still loves you.",
								link: "http://ctt.ec/xf5Zn",}	
				case 3:
					return {quote: "Be the change that you wish to see in the world.",
								link: "http://ctt.ec/cmS85",}
				case 4:
					return {quote: "Be yourself; everyone else is already taken.",
								link: "http://ctt.ec/4Lp9K",}
				case 5:
					return {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
								link: "http://ctt.ec/JXFTG",}
				case 6:
					return {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
								link: "http://ctt.ec/kF3Ah",}
				case 7:
					return {quote: "So many books, so little time.",
								link: "http://ctt.ec/TXMPc",}
				case 8:
					return {quote: "A room without books is like a body without a soul.",
								link: "http://ctt.ec/1Kxe7",}
				case 9:
					return {quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
								link: "http://ctt.ec/f3F8j",}
				case 10:
					return {quote: "You only live once, but if you do it right, once is enough.",
								link: "http://ctt.ec/7D52J",}
				default:
					return {quote: "Do you even lift?",
								link: "http://ctt.ec/ywf80",}  
		    }
    }
    $scope.setQuote = function () {
		  var randomNumber = Math.floor((Math.random() * 10) + 1);
		  if(randomNumber == $scope.previousNumber){
		  		randomNumber += 1;
		  }
		  $scope.previousNumber = randomNumber;
		  $scope.result = {};
		  $scope.result = $scope.giveQuote(randomNumber);
		  $scope.hideRefresh = false;
    }
}]);
})(window.angular);