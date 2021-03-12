$(document).ready(function () {
  	function currentValue() {
  		var currentValue = document.getElementById("currentValue").innerHTML;
  		console.log("current value is ", currentValue);
  		return currentValue;
  	}
  	currentValue();
  	$(".btn").click(function(event) {
  		$(".item-header").html(this.innerHTML);
  		var clickedValue = this.innerHTML;
  		if ($(this).hasClass("num")) {
  			var current = currentValue();
  			console.log(typeof current, current);
  			var newValue = current + clickedValue;
  			console.log(typeof newValue, newValue);
  			newValue = parseInt(newValue, 10);
  			console.log(typeof newValue);
  			$(".item-header").html(newValue);
  			//console.log("this is num");
  		} else if ($(this).hasClass("clear")) {
  			console.log("this is ac");
  			clear();
  			currentValue();
  		} else if ($(this).hasClass("op")) {
  			console.log("this is op");
  		} else if ($(this).hasClass("equal")) {
  			console.log("this is equal");
  		}
  		});
  });