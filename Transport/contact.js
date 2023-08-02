// Wait for the DOM to be ready
$(document).ready(function() {
    // Handle form submission
    $('#contactForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Simulate form submission (You should add your actual form submission code here)
      // For demonstration purposes, we're simply hiding the form and showing the thank you message
      $('#contactForm').hide();
      $('#thankYouMessage').show();
    });
  });
  