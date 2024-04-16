import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {

    deposit(amount: number): void {
        this.totalBalance = this.totalBalance + amount;
        //console.log(`Deposit ${amount}\nAfter Deposit: ${this.getBalance()}`);
        console.log(`Deposit ${amount}\nAfter Deposit: ${this.totalBalance}`);
    }

    withdraw(amount: number): void {
        console.log(`Withdraw: ${amount}`);
        if (amount < 0 || amount === 0 ){
            console.log('Amount should be greater than 0');
        } else if (amount > this.getBalance()) {
            console.log('Not enough money');
        } else {
            this.totalBalance = this.totalBalance - amount;
            //console.log(`After Withdraw: ${this.getBalance()}`);
            console.log(`After Withdraw: ${this.totalBalance}`);
        }
    }

    getBalance(): number {
        return this.totalBalance;
    }

}