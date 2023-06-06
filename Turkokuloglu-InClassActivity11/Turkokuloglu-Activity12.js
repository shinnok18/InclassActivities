$(document).ready(function() {
  
    $("#nav_list a").click(function(e) {
      var title = $(this).attr("title");
      SpeakerData(title);
    });

    function SpeakerData(file) {
      var fileName = file + '.json';
      $.getJSON(fileName, function(data) {
        
        $("main").empty();  //clear the elements
  
        data.speakers.forEach(function(speaker) {
          var title = $("<h1>").text(speaker.title);
          var image = $("<img>").attr("src", speaker.image);
          var month = $("<h2>").html(speaker.month + "<br>" + speaker.speaker);
          var description = $("<p>").text(speaker.text);
  
          $("main").append(title, image, month, description);
        });
      });
    }
  
  });
