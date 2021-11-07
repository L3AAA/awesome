//Hook up the tweet display

$(document).ready(function() {

	$(".countdown").countdown({
				date: "Dec 31, 2021 23:59:30",
				format: "on"
			},

			function() {
				// callback function
			});

});
