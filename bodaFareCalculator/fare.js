let prompt = require('prompt-sync')();

function calculateBodaFare(distanceInKm){
    const baseFare = 50; //KES
    const chargePerKm = 15; //KES
    const distance = Number(distanceInKm);

    if (isNaN(distance) || distance <= 0) {
    return (console.log("Tafadhali ingiza umbali sahihi kwa kilomita"));
  }

    const totalChargePerKm = distance*chargePerKm;
    const totalFare = baseFare + totalChargePerKm;

//print results
console.log(`Uko kwote? Io ni ${distance} km:`);
console.log(`Ukikalia Pikipiki: KES 50`);
console.log(`Mpaka Uko: KES ${totalChargePerKm}`);
console.log(`Total: KES ${totalFare}`);
console.log("\nPanda Pikipiki!");
}

//promptInput
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(input);


