let favRestaruant = "McDonalds";
console.log(favRestaruant);
let rating = {
    name: "McDonalds",
    rating: 4.2,
    location: "New York"
};
let favFoods = ["Chicken Nuggets", "Burgers", "Ice Cream", "Fries"];
favFoods.push("Cookies");
function rateFood(food, rate) {
    return `I give ${food} a rating of ${rate}`;
}