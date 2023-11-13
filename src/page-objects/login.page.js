const driverUtil = require('../utils/driverUtil');
const Element = require('../utils/element')

class LoginPage {

    constructor() {
        this.username = new Element('#user-name');
        this.password = new Element('#password');
        this.loginBtn = new Element('#login-button');
    }

    async isLoginPageDisplayed(){
        return await this.username.isDisplayed();
    }

    async waitForPage() {
        await driverUtil.waitForElement($(this.username));
    }

    async login(username, password){

        await this.username.setValue(username);
        await this.password.setValue(password);

        await this.loginBtn.click()
    }


}

module.exports = new LoginPage();
