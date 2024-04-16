import LoginPage from "./LoginPage";

export default class LoginTestFlow {
    private username: string = '';
    private password: string = '';

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    login(loginPage: LoginPage): void {
        loginPage.inputUserName(this.username);
        loginPage.inputPassword(this.password);
        loginPage.clickOnLoginBtn();
    }
}