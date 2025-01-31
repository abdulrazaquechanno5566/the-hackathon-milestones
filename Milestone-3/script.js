// Import the form & display area
var myForm = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // prevents page reloading
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var myEducation = document.getElementById('education').value;
    var myExperience = document.getElementById('experience').value;
    var theSkills = document.getElementById('skills').value;
    // Generating the resume content dynamically
    var resumeHTML = "\n     <h2><b>Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name:</b>".concat(name, "</p>\n     <p><b>E.Mail:</b>").concat(email, "</p>\n     <p><b>Phone:</b>").concat(phone, "</p>\n\n     <h3>Education/h3>\n     <p>").concat(myEducation, "\n\n     <h3>Experience/h3>\n     <p>").concat(myExperience, "\n\n     <h3>Skills/h3>\n     <p>").concat(theSkills, "\n     ");
    // Display resume element
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume display elememt is missing.');
    }
});
