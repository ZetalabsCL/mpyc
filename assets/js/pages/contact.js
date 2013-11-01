var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: -33.56319,
				lng: -70.56180
			  });
			   var marker = map.addMarker({
		            lat: -33.56319,
					lng: -70.56180,
		            title: 'Moviendo Personas y Carga'
		        });
			});
        }

    };
}();