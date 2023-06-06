// Get the main element
var mainElement = document.querySelector('main');

// Get the links in the sidebar
var sidebarLinks = document.querySelectorAll('#nav_list a');

// Add click event handlers to the links
for (var i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener('click', function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the JSON file name from the link's title attribute
    var fileName = this.getAttribute('title') + '.json';

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set up the AJAX request
    xhr.open('GET', 'json_files/' + fileName, true);

    // Set the response type to JSON
    xhr.responseType = 'json';

    // Set up the onload event handler
    xhr.onload = function() {
      // Check if the request was successful
      if (xhr.status === 200) {
        // Clear the main element
        mainElement.innerHTML = '';

        // Get the JSON data
        var data = xhr.response;

        // Create HTML elements for the speaker's information
        var imgElement = document.createElement('img');
        imgElement.src = 'images/' + data.image;
        mainElement.appendChild(imgElement);

        var h2Element = document.createElement('h2');
        h2Element.innerHTML = data.month + '<br>' + data.name;
        mainElement.appendChild(h2Element);

        var pElement = document.createElement('p');
        pElement.textContent = data.description;
        mainElement.appendChild(pElement);
      }
    };

    // Send the AJAX request
    xhr.send();
  });
}
