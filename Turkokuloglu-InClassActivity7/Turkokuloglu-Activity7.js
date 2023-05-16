var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	// Move focus to the name field
    $("name").focus();

   // Load names and scores from local storage (if they exist)
   if (localStorage.getItem("names") && localStorage.getItem("scores")) {
    names = JSON.parse(localStorage.getItem("names"));
    scores = JSON.parse(localStorage.getItem("scores"));
    }
	
};
  
  function displayResults() {
	var sum = 0;
	var highestScore = scores[0];
	var highestScorerNames = [names[0]];

	// Loop through the scores array to calculate the average and highest score
	for (var i = 0; i < scores.length; i++) {
		sum += scores[i];
		if (scores[i] > highestScore) {
			highestScore = scores[i];
			highestScorerNames = [names[i]];
		} else if (scores[i] === highestScore) {
			highestScorerNames.push(names[i]);
		}
	}
	
	var average = sum / scores.length;

	// Create and set the innerHTML of the results div element
	var resultsHTML = "<h2>Results</h2>";
	resultsHTML += "<p>Average score = " + average.toFixed(2) + "</p>";
	if (highestScorerNames.length > 1) {
		resultsHTML += "<p>High score = " + highestScorerNames.join(", ") + " with a score of " + highestScore + "</p>";
	} else {
		resultsHTML += "<p>High score = " + highestScorerNames[0] + " with a score of " + highestScore + "</p>";
	}
	
	document.getElementById("results").innerHTML = resultsHTML;
}

function addScore() {
	var name = $("name").value;
	var score = $("score").value;
	
	// Data validation
	if (name === "" || score === "" || isNaN(score) || score < 0 || score > 100) {
	  alert("You must enter a name and a valid score");
	  return;
	}
	
	// Add the new name and score to the arrays
	names.push(name);
	scores.push(parseInt(score));

	// Save the updated arrays to local storage
	localStorage.setItem("names", JSON.stringify(names));
	localStorage.setItem("scores", JSON.stringify(scores));
  
	// Clear the input fields and set focus on the name field
	$("name").value = "";
	$("score").value = "";
	$("name").focus();
  }

  function displayScores() {
    var table = $("scores_table");

    // Clear any previous rows from the table
    table.innerHTML = "";

    // Add a header row
    var headerRow = table.insertRow(0);
    var scoresHeader = headerRow.insertCell(0); // add scores header
    scoresHeader.colSpan = "2"; // set scores header to span two columns
    var headerRow2 = table.insertRow(1);
    var nameHeader = headerRow2.insertCell(0);
    var scoreHeader = headerRow2.insertCell(1);

    scoresHeader.innerHTML = "<h2>Scores</h2>"; // set scores header text
    nameHeader.innerHTML = "<b>Name</b>";
    scoreHeader.innerHTML = "<b>Score</b>";

    // Add the data rows
    for (var i = 0; i < names.length; i++) {
        var row = table.insertRow(i + 2);
        var nameCell = row.insertCell(0);
        var scoreCell = row.insertCell(1);
        nameCell.innerHTML = names[i];
        scoreCell.innerHTML = scores[i];
    }
}
