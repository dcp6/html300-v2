const cardData = [
    {
      "name": "Paolo Maldini",
      "jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
   ]
   //this block of code is the template upon which the arrays will be input
let cardDataInsert = cardData.map(function(element){
      return `
      <div id="primary-card-box">
      <section id="headshot-holder">
      <img id="headshot" src="./img/headshot.jpg" alt="picture of headshot">
      <div id="headshot-text-holder">
      <h3>${element.name}</h3>
      <h4>${element.jobTitle}</h4>
      </div>

      </section>
      <section id="info-holder">
      <section id="info-para-holder">
      <p><strong>Company:
      </strong>${element.company}</p>
      <p><strong>Experience:
      </strong>${element.experience}</p>
      <p><strong>School:
      </strong>${element.school}</p>
      <p><strong>Major:
      </strong>${element.major}</p>
      <p><strong>Email:</strong>
      ${element.email} </p>
      <p class="code-Languages-Holder"><strong>Languages:</strong>
      ${element.codeLanguages}
      <div id="linked-in-para-div">
      <img src="./img/linkedin.svg" alt="linkedin logo"><p id="linked-in-para">${element.linkedInUrl}</p><p id="ask-me-text">Ask me!</p>
      </div>
      </section>
      </section>
      </div>
      `
});
//this simply sets the function as the inner html of the file
document.querySelector('main').innerHTML = cardDataInsert;
