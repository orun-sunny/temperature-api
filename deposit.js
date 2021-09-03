// const bank = owner => {
//     balance = 0;
//     return Amount => {
//         balance += Amount
//         return balance;
//     }
// }

// const sunnyBank = bank('sunny');
// console.log(sunnyBank(100));


const bank = owner => {
    balance = 0;
    return amount => {
        balance += amount
        return {
            deposit: amount => {
                balance += amount;
                return balance;
            }
        }
    }
}