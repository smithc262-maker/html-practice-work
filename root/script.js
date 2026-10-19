console.log("Hello, World!");
let team = "Sky"
let jersey = 88;
let hasWonChampionship = false;
let statiumLocation = null;
let nextGame;
let totalWins = 4;
const sport = "Basketball";
let player = {
    name: "John Doe",
    position: "Forward",
    pointsPerGame: 11.9
};
player.isStarter = true;
console.log(team);
console.log(jersey);
console.log(hasWonChampionship);
console.log(statiumLocation);
console.log(nextGame);
console.log(totalWins);
console.log(sport);
console.log(player);

let favFoods = ["Pizza", "Burgers", "Ice cream", "Chicken-fried rice"];
console.log(favFoods);
favFoods.push("Pasta");
favFoods[2] = "Cake";
favFoods.pop();
console.log(favFoods.length);
console.log(favFoods);

function musicRating(songName, rating) {
    return `The song ${songName} has a rating of ${rating}.`;
}
console.log(musicRating("Runaway", 3));
if (rating > 3) {
    console.log("This song is great!");
}
else if (rating >= 2) {
    console.log("This song is okay.");
}
else {
    console.log("This song is not good.");
}
let mySongs = ["Dead or Alive", "Livin' on a Prayer", "You Give Love a Bad Name"];
for (let i = 0; i < mySongs.length; i++) {
    console.log(mySongs[i] + " is a jam!");
}
console.log(musicRating("Dead or Alive", 5));
console.log(musicRating("Livin' on a Prayer", 4));