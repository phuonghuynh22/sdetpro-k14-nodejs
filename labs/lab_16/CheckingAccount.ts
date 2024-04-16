import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {

    private overdraftLimit: number = 50;

    deposit(amount: number): void {
        this.totalBalance = this.getBalance() + amount;
        console.log(`Deposit ${amount}\nAfter Deposit: ${this.getBalance() + this.overdraftLimit}`);
    }

    withdraw(amount: number): void {
        console.log(`Withdraw: ${amount}`);
        if (amount < 0 || amount === 0 ){
            console.log('Amount should be greater than 0');
        } else if ((this.getBalance() - amount) < 0){
            console.log('Not enough money!');
        } else{
            this.totalBalance = this.getBalance() - amount;
            console.log(`After Withdraw: ${this.getBalance() + this.overdraftLimit}`);
        }
    }

    getBalance(): number {
        return this.totalBalance;
    }
}