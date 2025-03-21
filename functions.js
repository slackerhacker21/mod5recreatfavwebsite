// Function 1: Validate Email
// Checks if an email contains "@" and "." for basic validation
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true

// Function 2: Random Project Picker
// Selects a random project from an array to feature on the homepage
const projects = ["Portfolio", "Blog", "Weather App"];
function getRandomProject() {
    const index = Math.floor(Math.random() * projects.length);
    return projects[index];
}
console.log(`Featured project: ${getRandomProject()}`);

// Function 3: Total Price Calculation
// Calculates the total cost of design services from an array of prices
const prices = [19.99, 29.99, 49.99];
function getTotalPrice() {
    return prices.reduce((total, price) => total + price, 0);
}
console.log(`Total price: $${getTotalPrice()}`);

// Function 4: Feedback Storage
// Stores user feedback messages in an array
let feedback = [];
function addFeedback(message) {
    feedback.push(message);
    return feedback;
}
console.log(addFeedback("Great website!")); // ["Great website!"]

// Function 5: Project Filter
// Filters projects by category (e.g., "web" or "graphic")
const projectList = [
    { name: "Project 1", category: "web" },
    { name: "Project 2", category: "graphic" },
    { name: "Project 3", category: "web" }
];
function filterProjects(category) {
    return projectList.filter(project => project.category === category);
}
console.log(filterProjects("web")); // [{ name: "Project 1", category: "web" }, { name: "Project 3", category: "web" }]
