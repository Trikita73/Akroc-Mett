$(document).ready(function() { 

	function initSize() {

		$(".till_item .tc").each(function() {
		var parh = $(this).parent().height();
		$(this).height(parh);
		});
	};

	initSize();

	$(window).resize(function() {
		initSize();
	});

	
	
});
