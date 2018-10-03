$(document).ready(function() {
	var a = '';
	var b = '';
	var state = 'a';
	var lastOp = null;

	function clear() {
  		$(".item-header").html(0);
  		a = '';
		b = '';
		state = 'a';
		lastOp = null;
  	}

  	function setResult(result) {
  		const displayValue = ("" + result).replace('.', ',')
  		$(".item-header").html(displayValue);
  	}

  	function getResult() {
  		switch (lastOp) {
  			case '+':
  			return parseInt(a) + parseInt(b);
  			case '-':
  			return parseInt(a) - parseInt(b);
  			case '÷':
  			return parseInt(a) / parseInt(b);
  			case 'X':
  			return parseInt(a) * parseInt(b);
  			default:
  			return "";
  		}
  	}

	$("button.num").click(function(event) {
		var thingClicked = $(event.target).data('nr');
		if(state === 'a') {
			a += thingClicked;
		} else {
			b += thingClicked;
		}
		//console.log(thingClicked);
		console.log(a);
		console.log(b);
		if(state === 'a') {
			setResult(a);
		} else {
			setResult(b);
		}
	});
	$("button.clear").click(function(event) {
		clear();
	});
	$("button.op").click(function(event) {
		if($(event.target).data('op') === '=') {
			console.log(lastOp);
			setResult(getResult());
			a = getResult();
			b = '';
			state = 'a';
		} else {
			if(state === 'a') {
				state = 'b';
				lastOp = $(event.target).data('op');
				console.log(lastOp);
			} else {
				setResult(getResult());
				a = getResult();
				b = '';
				var currentOp = $(event.target).data('op');
				console.log(currentOp);
				lastOp = currentOp;
			}
		}
	});
});