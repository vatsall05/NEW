var Balance = 50000;
var accountnumber = "123456";
var pin = "4321";

const Withdraw = (amount1) => {
    if (amount1 > Balance) {
        alert("Insufficient balance");
    }
    else {
        Balance -= amount1;
        alert("Amount WithDrawed");
        console.log("Available Balance = ", Balance);
        alert("Thanks for Visit");
    }
}

const deposit = (amount2) => {
    const depositamount = Number(amount2);
    if (amount2 > 0) {
        Balance += depositamount;
        alert("Amount Deposited");
        console.log("Updated Balance = ", Balance);
    }
    else {
        alert("Invalid Amount");
    }
}

alert("Welcome TO ATM");
var eaccountnumber = prompt("Enter the Account Number = ");
var epin = prompt("Enter the Pin Number = ");
if (eaccountnumber == accountnumber && epin == pin) {
    var choice = prompt("1 for Use  2 for Exit");

    switch (choice) {
        case '1':
            let choice1 = (prompt("1 for Withdrawl / 2 for Deposit / 3 for Check Balance"));
            switch (choice1) {
                case '1':
                    let amount1 = (prompt("Enter the Amount for Withdrawl = "));
                    if (amount1 > 0) {
                        Withdraw(amount1);
                    }
                    else {
                        alert("Invalid Amount");
                    }
                    break;

                case '2':
                    let amount2 = (prompt("Enter the Amount FOr Deposit = "))
                    if (amount2 > 0) {
                        deposit(amount2);
                    }
                    else {
                        alert("Invalid Amount");
                    }
                    break;

                case '3':
                    console.log("Available Balance = ", Balance);
                    break;

                case '0':
                    alert("Thanks For VIsit");
                default:
                    alert("Invalid Choice");
                    break;
            }
            break;

        case '2':
            alert("Thank You for visit");
            break;
        default:
            alert("Invalid Choice");
            break;
    }
}
else {
    alert("Invalid number ");
}

