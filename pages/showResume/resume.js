let receivedData = JSON.parse(localStorage.getItem("userData"));
let skill = JSON.parse(localStorage.getItem("skills"));

const eduData = receivedData[0]; 
const expData = receivedData[1]; 
const profileData = receivedData[2]; 

const { fullName, jobRole, objective, address, phoneNumber, webLink, linkedinID, githubID, skills ,email} = profileData;

//  Profile Information
document.getElementById("name").innerHTML = fullName || "Your Name";
document.getElementById("tittle").innerHTML = jobRole || "Job Title";
document.getElementById("summary").innerHTML = objective || "Objective not provided";
document.getElementById("phoneNumber").innerHTML = `Phone: ${phoneNumber || "Not available"}`;
document.getElementById("email").innerHTML = `Email: ${email || "Not available"}`;
document.getElementById("location").innerHTML = `Address: ${address || "Not available"}`;

if (webLink) document.getElementById("portfolio").innerHTML = `Portfolio: <a style="text-decoration: none; color: gray;" href="${webLink}" target="_blank">${webLink}</a>`;
if (linkedinID) document.getElementById("linkedinID").innerHTML = `LinkedIn: <a style="text-decoration: none; color: gray;" href="${linkedinID}" target="_blank">${linkedinID}</a>`;
if (githubID) document.getElementById("githubID").innerHTML = `GitHub: <a style="text-decoration: none; color: gray;" href="${githubID}" target="_blank">${githubID}</a>`;

//  Experience Section
const experienceSection = document.querySelector(".experience");
expData.forEach((item) => {
  const jobDiv = document.createElement("div");
  jobDiv.classList.add("job");
  jobDiv.innerHTML = `
    <h3>${item.possitionName || "Job Title"}</h3>
    <p class="company">${item.companyName || "Company Name"} | ${item.expStartDate || "Start Date"} - ${item.expEndDate || "End Date"}</p>
  `;
  experienceSection.appendChild(jobDiv);
});

//  Education Section
const educationSection = document.querySelector(".education");
eduData.forEach((item) => {  
  const degreeDiv = document.createElement("div");
  degreeDiv.classList.add("degree");
  degreeDiv.innerHTML = `
    <h3>${item.degreeName || "Degree"}</h3>
    <p class="school">${item.schoolName || "Institution"} | ${item.startDate || "Start Date"} - ${item.endDate || "End Date"}</p>
  `;
  educationSection.appendChild(degreeDiv);
});

//  Skills Section
const skillsSection = document.querySelector(".skills ul");
skillsSection.innerHTML = ""; 
if (skill && Array.isArray(skill)) {
  skill.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsSection.appendChild(skillItem);
  });
} else {
  skillsSection.innerHTML = "<li>No skills provided</li>";
}



document.getElementById("downloadBtn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf; // Import jsPDF
  const pdf = new jsPDF();

  // Select the resume element
  const resume = document.querySelector("#resume");

  // Use jsPDF to capture the resume
  pdf.html(resume, {
    callback: function (doc) {
      doc.save("resume.pdf"); // Save the PDF with the filename "resume.pdf"
    },
    x: 10,
    y: 10,
    width: 190, // Adjust the width as needed
    windowWidth: resume.scrollWidth // Ensures correct rendering
  });
});
