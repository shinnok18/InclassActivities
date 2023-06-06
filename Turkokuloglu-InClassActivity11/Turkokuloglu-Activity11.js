$(document).ready(function() {
	
	$("#nav_list a").click(function(event) {
		event.preventDefault(); 
		
		var fileName = $(this).attr("title") + ".json";
		
		$("main").empty();
		
		$.getJSON("json_files/" + fileName, function(data) {
			$.each(data.speakers, function(index, speaker) {
				var html = '<div class="speaker">' +
					'<h1>' + speaker.title + '</h1>' +
					'<img src="' + speaker.image + '">' +
					'<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>' +
					'<p>' + speaker.text + '</p>' +
					'</div>';
  
				$("main").append(html);
			});
		});
	});
});
