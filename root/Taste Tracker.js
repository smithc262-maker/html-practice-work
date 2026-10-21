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
if (rating.rating >= 4) {
    console.log("I greatly enjoyed this restaurant!");
}
else if (rating.rating < 4 && rating.rating >= 3) {
    console.log("This restaurant was okay.");
}
else {
    console.log("I did not enjoy this restaurant.");
}