let receivedData = JSON.parse(localStorage.getItem("userData"));

console.log(receivedData[0]);

const {fullName,name, job_role, objective,phoneNumber,webLink,linkedinID,githubID}  = receivedData[0]

let fullName1 = document.getElementById("name");
let tittle = document.getElementById("tittle");
let phone = document.getElementById("phoneNumber");
let linkedinId = document.getElementById("linkedinID");
let githubId = document.getElementById("githubID");
let portfolio = document.getElementById("portfolio");
let locationResume = document.getElementById("location");
let summary = document.getElementById("summary");

fullName1.innerHTML = fullName
tittle.innerHTML  = job_role
summary.innerHTML  = objective
phone.innerHTML  = `Phone: ${phoneNumber}`
locationResume.innerHTML  = location
if (webLink || linkedinID || githubID  ) {
  portfolio.innerHTML = `Portfolio: ${webLink}`
  linkedinId.innerHTML = `Linkedin: ${linkedinID}`
  githubId.innerHTML = `Github: ${githubID}`
}



  







// // Handle Download Button click
// document.getElementById('downloadBtn').addEventListener('click', function() {
//     const { jsPDF } = window.jspdf;
  
//     const doc = new jsPDF();
    
//     // Add content to PDF
//     doc.text('John Doe', 20, 20);
//     doc.text('Web Developer', 20, 30);
//     doc.text('Email: john.doe@example.com', 20, 40);
//     doc.text('Phone: (123) 456-7890', 20, 50);
//     doc.text('Location: City, Country', 20, 60);
  
//     // Add a simple resume summary
//     doc.text('Summary: I am a passionate web developer with 5+ years of experience...', 20, 70);
  
//     // Save as PDF
//     doc.save('resume.pdf');
//   });
  
//   // Handle Edit Button click
//   document.getElementById('editBtn').addEventListener('click', function() {
//     alert('This button will allow you to edit the resume.');
//   });
  



// <div class="accordion-item">
// <h2 class="accordion-header">
//   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//     data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//     Educational Information
//   </button>
// </h2>
// <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//   <div class="inputDiv accordion-body" >
//     <div class="container" >
//       <!-- <div class="heading">SignIn to your account</div> -->
//       <form>
//         <div id="education-section">
//           <div  id="education-item">
//             <div class="input-field">
//               <input required="" autocomplete="off" type="text" name="text" id="schoolName" value="" />
//               <label for="username">School/College/University Name</label>
//             </div>
//             <div class="input-field">
//               <input required="" autocomplete="off" type="text" name="text" id="degreeName" />
//               <label for="text">Degree Name</label>
//             </div>
//             <div class="input-field">
//               <input required="" autocomplete="off" type="date" name="text" id="startDate" />
//               <label for="username">Start Date</label>
//             </div>
//             <div class="input-field">
//               <input required="" autocomplete="off" type="date" name="text" id="endDate" />
//               <label for="username">End Date</label>
//             </div>
//             <div>
//               <Button id="addEducationBtn"
//                 style="height: 40px; width: 100px; border-radius: 10px;color: white; outline: none; background-color: rgb(17, 127, 237);">Add</Button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
// </div>