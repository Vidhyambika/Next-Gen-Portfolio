// Dynamic Text Animation for Fields of Expertise
const fields = [
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Researcher",
    "Full Stack Developer",
    "Deep Learning Specialist"
];
let currentFieldIndex = 0;
const fieldElement = document.getElementById("dynamic-field");

function updateField() {
    fieldElement.textContent = fields[currentFieldIndex];
    currentFieldIndex = (currentFieldIndex + 1) % fields.length;
}
setInterval(updateField, 2000); // Change field every 2 seconds

// Theme Switching (Light/Dark Mode)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
        document.documentElement.style.setProperty("--bg-image", "url('assets/bg/space1.jpg')");
    } else {
        themeToggle.textContent = "Dark Mode";
        document.documentElement.style.setProperty("--bg-image", "url('assets/bg/space2.jpg')");
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover Effects for Resume Button
const resumeButton = document.querySelector(".resume-button");
resumeButton.addEventListener("mouseover", () => {
    resumeButton.style.backgroundColor = "#ff6347"; // Tomato color
});
resumeButton.addEventListener("mouseout", () => {
    resumeButton.style.backgroundColor = "#007BFF"; // Original color
});