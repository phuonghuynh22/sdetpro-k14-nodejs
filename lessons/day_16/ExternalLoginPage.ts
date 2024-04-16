import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {

    private readonly USERNAME_SEL = '.username';
    private readonly PASSWORD_SEL = '.password';
    private readonly LOGIN_BTN = '.loginBtn';


    inputUserName(username: string): void {
        console.log(`Interacting with locator ${this.USERNAME_SEL}`);
    }
    inputPassword(password: string): void {
        console.log(`Interacting with locator ${this.PASSWORD_SEL}`);
    }
    clickOnLoginBtn(): void {
        console.log(`Interacting with locator ${this.LOGIN_BTN}`);
    }
    
}