import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

const savingAccount = new SavingAccount();
const checkingAccount = new CheckingAccount();

savingAccount.deposit(500);
savingAccount.deposit(500);

savingAccount.withdraw(500);
savingAccount.withdraw(100);

console.log('**********');

checkingAccount.deposit(500);
checkingAccount.withdraw(400);
checkingAccount.withdraw(150);

