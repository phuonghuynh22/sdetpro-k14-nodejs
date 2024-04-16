export default abstract class BankingAccount {

    protected totalBalance: number = 0;

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;
}