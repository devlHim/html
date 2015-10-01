(function($) {
	
	setInterval('window.location.reload()', 15000);

	window.setTimeout(updateTable(), 300);
	
	  function updateTable(){
		$.each( window.spredfast.Poller.prototype._getData("veggies", "fruits"), function( key, value ) {
			
				$("#item" + key).text(value.name);
				$("#itemVal" + key).text(window.spredfast.Poller.prototype._getRandomNumber(0,2000));
					
			});
	};
}(jQuery));
