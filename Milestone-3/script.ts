// Import the form & display area
const myForm  = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
myForm.addEventListener('submit', (event: Event) =>{
    event.preventDefault(); // prevents page reloading
     // collect input values

     const name = (document.getElementById('name') as HTMLInputElement).value 
     const email = (document.getElementById('email') as HTMLInputElement).value 
     const phone = (document.getElementById('phone') as HTMLInputElement).value 
     const myEducation = (document.getElementById('education') as HTMLInputElement).value 
     const myExperience = (document.getElementById('experience') as HTMLInputElement).value 
     const theSkills = (document.getElementById('skills') as HTMLInputElement).value 
     
     // Generating the resume content dynamically
     const resumeHTML = `
     <h2><b>Resume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name:</b>${name}</p>
     <p><b>E.Mail:</b>${email}</p>
     <p><b>Phone:</b>${phone}</p>

     <h3>Education/h3>
     <p>${myEducation}

     <h3>Experience/h3>
     <p>${myExperience}

     <h3>Skills/h3>
     <p>${theSkills}
     `;
    
     // Display resume element
     if (resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
     } else{
            console.error('Resume display elememt is missing.');
        }
});
