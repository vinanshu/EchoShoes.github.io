document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        sendEmail(); // Call the sendEmail function
    });
});

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var subject = "Contact Request from YourWebsiteName"; // Change this to your website name

    var mailtoLink = "mailto:echalicojericho6@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message);

    window.location.href = mailtoLink;
}
