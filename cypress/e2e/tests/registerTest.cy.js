import { registerPage } from "../../pages/registerPage";

const registerObj = new registerPage(); // create an objects for Register page

import registerData from "../../fixtures/registerData.json";

describe("Test Automation Test Suite", () => {
  it("Tese Case-1", () => {
    registerObj.openURL();
    registerObj.enterFirstName(registerData.firstName);
    registerObj.enterlastName(registerData.lastName);
    registerObj.enterEmail(registerData.email);
    registerObj.enterTelephone(registerData.telephone);
    registerObj.enterPassword(registerData.password);
    registerObj.selectCheckbox();
    registerObj.clickOnContinue();
  });
});
