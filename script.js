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

// Skill Category Switching
const skillButtons = document.querySelectorAll(".skill-button");
const skillGrids = document.querySelectorAll(".skills-grid");

skillButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        skillButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");
        // Hide all skill grids
        skillGrids.forEach(grid => grid.classList.add("hidden"));
        // Show the selected skill grid
        const category = button.getAttribute("data-category");
        document.getElementById(category).classList.remove("hidden");
    });
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
    resumeButton.style.backgroundColor = "linear-gradient(45deg, #6a5acd, #ff69b4)"; // Original color
});
