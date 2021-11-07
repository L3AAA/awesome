//Hook up the tweet display

$(document).ready(function() {

	$(".countdown").countdown({
				date: "Nov 05, 2021 12:00:00",
				format: "on"
			},

			function() {
				// callback function
			});

});
