$(document).ready(function() {
	// Click event handlers for the sidebar links
	$("#nav_list a").click(function(e) {
		e.preventDefault();
		
		// Get the JSON file name from the clicked link's title attribute
		var jsonFileName = $(this).attr("title") + ".json";
		
		// Clear the elements from the main element
		$("#speakerName").empty();
		$("#speakerImage").attr("src", "");
		$("#speakerDate").empty();
		$("#speakerBio").empty();
		
		// Make an Ajax request to get the data from the JSON file
		$.getJSON("json_files/" + jsonFileName, function(data) {
			// Populate the HTML elements with the retrieved data
			$("#speakerName").text(data.name);
			$("#speakerImage").attr("src", "images/" + data.image);
			$("#speakerDate").text(data.date);
			$("#speakerBio").text(data.bio);
		});
	});
});
