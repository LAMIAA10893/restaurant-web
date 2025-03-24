// Define an array of category short names
var categories = ["LUNCH", "DINNER", "SUSHI", "DESSERT", "APPETIZERS"];

// Function to get a random category
function getRandomCategory() {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}