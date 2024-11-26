

let dataAll = [];

function material() {
let fullName = document.getElementById("full-name");
let jobRole = document.getElementById("job-role");
let objective = document.getElementById("objective");
let phoneNumber = document.getElementById("phoneNumber");
let address = document.getElementById("adress");
let email = document.getElementById("email");
let webLink = document.getElementById("webLink");
let linkedinID = document.getElementById("linkedinID");
let githubID = document.getElementById("githubID");


let dataToSend = {
    fullName: fullName.value,
    jobRole: jobRole.value,
    objective: objective.value,
    phoneNumber: phoneNumber.value,
    linkedinID: linkedinID.value,
    githubID: githubID.value,
    email: email.value,
    webLink: webLink.value,
    address: address.value,
};

dataAll.push(dataToSend)


}




document.addEventListener("DOMContentLoaded", () => {
    const addEducationBtn = document.getElementById("addEducationBtn");
    const educationSection = document.getElementById("education-section");
    const generateResumeBtn = document.getElementById("generateResumeBtn");
  
   
    // Add new education fields dynamically
    addEducationBtn.addEventListener("click", () => {
      const educationItem = document.createElement("div");
      educationItem.classList.add("education-item");
      educationItem.innerHTML = `
        <div class="input-field">
          <input type="text" name="schoolName" class="schoolName" placeholder="School/College/University Name" required />
        </div>
        <div class="input-field">
          <input type="text" name="degreeName" class="degreeName" placeholder="Degree Name" required />
        </div>
        <div class="input-field">
          <input type="date" name="startDate" class="startDate" required />
        </div>
        <div class="input-field">
          <input type="date" name="endDate" class="endDate" required />
        </div>
      `;
      educationSection.appendChild(educationItem);
    });

  
    // Collect all data and store in local storage
    const collectData = () => {
      const educationItems = document.querySelectorAll(".education-item");
      const educationData = Array.from(educationItems).map((item) => ({
        schoolName: item.querySelector(".schoolName").value,
        degreeName: item.querySelector(".degreeName").value,
        startDate: item.querySelector(".startDate").value,
        endDate: item.querySelector(".endDate").value,
      }));
      dataAll.push(educationData)

      localStorage.setItem("userData", JSON.stringify(dataAll));
      // alert("Data saved successfully!");
    };
  
    generateResumeBtn.addEventListener("click", collectData);
  });


document.addEventListener("DOMContentLoaded", () => {
    const addExpBtn = document.getElementById("addExpBtn");
    const expSection = document.getElementById("exp-section");
    const generateResumeBtn = document.getElementById("generateResumeBtn");
  
   
    // Add new education fields dynamically
    addExpBtn.addEventListener("click", () => {
      const expItem = document.createElement("div");
      expItem.classList.add("exp-item");
      expItem.innerHTML = `
        <div class="input-field">
          <input type="text" name="possitionName" class="possitionName" placeholder= "Possition Title" required />
        </div>
        <div class="input-field">
          <input type="text" name="companyName" class="companyName" placeholder="Compnay Name" required />
        </div>
        <div class="input-field">
          <input type="date" name="expStartDate" class="expStartDate" required />
        </div>
        <div class="input-field">
          <input type="date" name="expEndDate" class="expEndDate" required />
        </div>
      `;
      expSection.appendChild(expItem);
    });

  
    // Collect all data and store in local storage
    const collectExpData = () => {
      const expItems = document.querySelectorAll(".exp-item");
      const expData = Array.from(expItems).map((item) => ({
        companyName: item.querySelector(".companyName").value,
        possitionName: item.querySelector(".possitionName").value,
        expStartDate: item.querySelector(".expStartDate").value,
        expEndDate: item.querySelector(".expEndDate").value,
      }));
      dataAll.push(expData)

      material()
      localStorage.setItem("userData", JSON.stringify(dataAll));
    };
  
    generateResumeBtn.addEventListener("click", collectExpData);
  });

  

  let skillBtn = document.getElementById("skillBtn");


    // Function to display skills from the localStorage
    function displaySkills(skills) {
      const skillists = document.getElementById("skillists");
      skillists.innerHTML = ""; 
      skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.toUpperCase(); 
        skillists.appendChild(li);
      });
    }

    // Load and display skills on page load
    window.addEventListener("load", () => {
      const savedSkills = JSON.parse(localStorage.getItem("skills") || "[]");
      displaySkills(savedSkills);
    });

    skillBtn.addEventListener("click", () => {
      let skillInput = document.getElementById("skillInput");

      // Split the input into lines, remove empty ones, and trim spaces
      const newSkills = skillInput.value.split("\n").map(skill => skill.trim()).filter(skill => skill !== "");

      // Load existing skills from localStorage
      const savedSkills = JSON.parse(localStorage.getItem("skills") || "[]");

      // Merge new skills with existing ones, avoiding duplicates
      const updatedSkills = Array.from(new Set([...savedSkills, ...newSkills]));

      // Save the updated skills array back to localStorage
      localStorage.setItem("skills", JSON.stringify(updatedSkills));

      // Display the updated skills list
      displaySkills(updatedSkills);
      console.log("Updated Skills saved to localStorage:", updatedSkills);
      skillInput.value =''

    });

    const generateResumeBtn = document.getElementById("generateResumeBtn");
    generateResumeBtn.addEventListener('click' , collectExpData, collectData)