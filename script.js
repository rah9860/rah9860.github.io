/*eslint-env browser*/
        // eslint-disable-next-line no-console
        console.log("noot");

//Section Management
// Get all of the links in the navigation menu
var navLinks = document.querySelectorAll('nav a');

// Loop through each link and add a click event listener
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Get the ID of the section to show based on the href attribute of the clicked link
        var sectionId = link.getAttribute('href');

        // Hide all of the sections
        document.querySelectorAll('section').forEach(function(section) {
            section.style.display = 'none';
        });
        
        // eslint-disable-next-line no-console
        console.log(sectionId);
        
        // Show the section with the matching ID
        document.querySelector(sectionId).style.display = 'block';

        // Prevent the default behavior of the link
        event.preventDefault();
    });
});

//Contact Form
$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    $.ajax({
      type: 'POST',
      url: 'contact.php',
      data: {
        name: name,
        email: email,
        message: message
      },
      success: function(data) {
        $('#contact-form')[0].reset();
        alert('Thank you for your message. We will get back to you soon!');
      },
      error: function(data) {
        alert('There was an error sending your message. Please try again later.');
      }
    });
  });
});
