let btn = document.getElementById("generateResumeBtn");

let showFunc = () => {
    let fullName = document.getElementById("full-name");
    let jobRole = document.getElementById("job-role");
    let objective = document.getElementById("objective");
    let phoneNumber = document.getElementById("phoneNumber");
    let address = document.getElementById("adress");
    let email = document.getElementById("email");
    let webLink = document.getElementById("webLink");
    let linkedinID = document.getElementById("linkedinID");
    let githubID = document.getElementById("githubID");

    // Array to store education data
    let educationData = [];

    // Function to add new education input fields
    document.getElementById("addEducationBtn").addEventListener("click", function () {
        const educationSection = document.getElementById("education-section");

        const newEducationItem = document.createElement("div");
        newEducationItem.classList.add("input-fields-container");

        const schoolNameInput = document.createElement("input");
        schoolNameInput.type = "text";
        schoolNameInput.placeholder = "School/College/University Name";
        schoolNameInput.classList.add("school-name");

        const degreeNameInput = document.createElement("input");
        degreeNameInput.type = "text";
        degreeNameInput.placeholder = "Degree Name";
        degreeNameInput.classList.add("degree-name");

        const startDateInput = document.createElement("input");
        startDateInput.type = "date";
        startDateInput.classList.add("start-date");

        const endDateInput = document.createElement("input");
        endDateInput.type = "date";
        endDateInput.classList.add("end-date");

        newEducationItem.appendChild(schoolNameInput);
        newEducationItem.appendChild(degreeNameInput);
        newEducationItem.appendChild(startDateInput);
        newEducationItem.appendChild(endDateInput);

        educationSection.appendChild(newEducationItem);
    });

    // Function to collect and save education data to the array
    function collectEducationData() {
        const schoolNames = document.querySelectorAll(".school-name");
        const degreeNames = document.querySelectorAll(".degree-name");
        const startDates = document.querySelectorAll(".start-date");
        const endDates = document.querySelectorAll(".end-date");

        // Clear previous education data
        educationData = [];

        schoolNames.forEach((school, index) => {
            const degree = degreeNames[index].value;
            const startDate = startDates[index].value;
            const endDate = endDates[index].value;

            educationData.push({
                school: school.value,
                degree: degree,
                startDate: startDate,
                endDate: endDate
            });
        });
    }

    // Function to display the collected education data on the resume preview
    function displayEducationResume() {
        const resumeSection = document.getElementById("education-resume");
        resumeSection.innerHTML = ""; // Clear previous resume data

        educationData.forEach(item => {
            const resumeItem = document.createElement("p");
            resumeItem.textContent = `${item.degree} at ${item.school} (From ${item.startDate} to ${item.endDate})`;
            resumeSection.appendChild(resumeItem);
        });
    }

    // Collect and save data to localStorage when the "Generate Resume" button is clicked
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
        education: educationData  // Add the collected education data here
    };

    localStorage.setItem("userData", JSON.stringify(dataToSend));

    // Call the functions to collect and display education data
    collectEducationData();
    displayEducationResume();
};

// Event listener for the "Generate Resume" button
btn.addEventListener("click", showFunc);
