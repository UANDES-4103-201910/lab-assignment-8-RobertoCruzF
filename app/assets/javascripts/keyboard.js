// Note: $(() => {}); is equivalent to $(document).ready(function(){})
//$(() => {
//	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
//});

function write_console(){
	$(".key").click(function(){
		console.log($(this).text()); // aparece en consola
		
	});
};
function writea(){
	$(".key").click(function(){
		var $write=$('#write');
		var $this=$(this),
			character=$this.html();
		

		if (character == "Enter") character= "\n";
		if (character == "->| Tab") character= "\t";

		$write.html($write.html()+ character)

	})

};
$(document).ready(function(){
	write_console();
	writea();
});


/*
$(function(){
	var $write = $('#write'),
		Shift = false,
		
	
	$('#keyboard_row div').click(function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
		
		// Shift keys
		if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();
			
			shift = (shift === true) ? false : true;
			
			return false;
		}
		

		
		// Delete
		if ($this.hasClass('delete')) {
			var html = $write.html();
			
			$write.html(html.substr(0, html.length - 1));
			return false;
		}
		
		// Special characters
		if ($this.hasClass('keyboard_row')) character = $('span:visible', $this).html();
		if ($this.hasClass('space')) character = ' ';
		if ($this.hasClass('tab')) character = "\t";
		if ($this.hasClass('return')) character = "\n";
		
		// Uppercase letter
		if ($this.hasClass('uppercase')) character = character.toUpperCase();
		
		// Remove shift once a key is clicked.
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');
			
			shift = false;
		}
		
		// Add the character
		$write.html($write.html() + character);
	});

	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
});
*/