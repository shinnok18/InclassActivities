$(document).ready(function() {
    $("#birthday").datepicker();
});

var languages = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python"
];

$(document).ready(function() {
    $("#language").autocomplete({
        source:languages
    });
});
