let prompt = require('prompt-sync')();

function estimateTransactionFee (amountToSend ){
   const minFee = 10;
   const maxFee = 70;
   const feePercent = 0.015;

   const amount = Number(amountToSend);

   if(isNaN(amountToSend) || amountToSend <= 0){
    return (console.log('Please, put in a good amount'))
   }

   let calculatedFee = amount*feePercent;
   let fee;
   if(calculatedFee<minFee){
    fee = minFee;
   }
   else if(calculatedFee>maxFee){
    fee = maxFee;
   }
   else{
    fee = calculatedFee;
   }

   let total = amount + fee;

   console.log(`Sending KES ${amountToSend}:`);
   console.log(`Calculated Transaction Fee: KES ${fee}`);
   console.log(`Total amount to be debited: KES ${total}`);
   console.log("\nSend Money Securely!");
}

const input = prompt('Unatuma Ngapi? (KES):')
estimateTransactionFee(input);