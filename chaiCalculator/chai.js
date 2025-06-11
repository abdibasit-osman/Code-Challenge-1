let prompt = require("prompt-sync")();

function calculateChaiIngredients(numberOfCups){
    //ingredients for one cup//
    const waterPerCup = 200; //ml
    const milkPerCup = 50; //ml
    const teaLeavesPerCup = 1; //tablespoon
    const sugerPerCup = 2; //teaspoons

    //total ingredinegts when more than one cup//
    const totalWater = waterPerCup*numberOfCups;
    const totalMilk = milkPerCup*numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup*numberOfCups;
    const totalSuger = sugerPerCup*numberOfCups;

    //print results//
    console.log(`To make ${numberOfCups} cup${numberOfCups>1?"s":""} of Kenyan Chai, you will need:`)
    console.log(`Water: ${waterPerCup} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${numberOfCups>1?"s":""}`);
    console.log(`Sugar (Sukari): ${totalSuger} teaspoons`)
    console.log("\nEnjoy your Chai Bora!")
}

// PromptInput//
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

//validity//
if (numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("Please enter a valid number of cups.");
}