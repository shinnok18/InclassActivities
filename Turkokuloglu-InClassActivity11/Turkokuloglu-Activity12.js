$(document).ready(function() {
	// Click event handler for sidebar links
	$("#nav_list a").click(function(e) {
		e.preventDefault(); // Prevent default link behavior

		// Clear the main element
		$("main").empty();

		// Get the JSON file name from the clicked link's title attribute
		var jsonFile = $(this).attr("title") + ".json";

		// Ajax request to load JSON data
		$.ajax({
			url: "json_files/" + jsonFile,
			dataType: "json",
			success: function(data) {
				// Create HTML elements for the speaker data
				var speakerContainer = $("<div>").addClass("speaker");
				var speakerImage = $("<img>").attr("src", "images/" + data.image);
				var speakerName = $("<h2>").text(data.name);
				var speakerBio = $("<p>").text(data.bio);

				// Append the elements to the main element
				speakerContainer.append(speakerImage, speakerName, speakerBio);
				$("main").append(speakerContainer);
			},
			error: function() {
				$("main").text("Error loading speaker data.");
			}
		});
	});
});
