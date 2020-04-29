$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/resources/featurefile/dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Navigate to Dashboard elements",
  "description": "As a user\nI want to visit Orange Hrm website",
  "id": "navigate-to-dashboard-elements",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19122735000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to Dashboard elements",
  "description": "",
  "id": "navigate-to-dashboard-elements;verify-user-should-navigate-to-dashboard-elements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on Admin Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see Add User button",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoardTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 11832448900,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.clickOnAdminButton()"
});
formatter.result({
  "duration": 5691918200,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.clickOnAddButton()"
});
formatter.result({
  "duration": 12213121000,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.iShouldSeeAddUserButton()"
});
formatter.result({
  "duration": 88361400,
  "status": "passed"
});
formatter.after({
  "duration": 155600,
  "status": "passed"
});
formatter.before({
  "duration": 12392058200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should navigate to MarketPlace element",
  "description": "",
  "id": "navigate-to-dashboard-elements;verify-user-should-navigate-to-marketplace-element",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "click on MarketPlace Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see OrangeHRM Addons on page",
  "keyword": "Then "
});
formatter.match({
  "location": "DashBoardTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 11587728000,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.clickOnMarketPlaceButton()"
});
formatter.result({
  "duration": 5428667600,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardTest.iShouldSeeOrangeHRMAddonsOnPage()"
});
formatter.result({
  "duration": 20096951600,
  "status": "passed"
});
formatter.after({
  "duration": 23400,
  "status": "passed"
});
formatter.uri("src/test/java/com/orangehrm/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a User\nI want to visit Orange Hrm website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12007289600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should login with valid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully on Orange Hrm website",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 87500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 183395400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 173438700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginButton()"
});
formatter.result({
  "duration": 11628246100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldLoginSuccessfullyOnOrangeHrmWebsite()"
});
formatter.result({
  "duration": 75535100,
  "status": "passed"
});
formatter.after({
  "duration": 27900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "jiya",
        "Rahi123",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "pandya",
        "123rahi",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "rahi",
        "love1",
        "Invalid credentials"
      ],
      "line": 22,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "xyzabc",
        "abc123",
        "Invalid credentials"
      ],
      "line": 23,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14931969800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"jiya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"Rahi123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jiya",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 183469700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 193380100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 690915300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 87533000,
  "status": "passed"
});
formatter.after({
  "duration": 37300,
  "status": "passed"
});
formatter.before({
  "duration": 11284559000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"pandya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"123rahi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pandya",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 168310500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123rahi",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 190955400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 576518200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 146251400,
  "status": "passed"
});
formatter.after({
  "duration": 33500,
  "status": "passed"
});
formatter.before({
  "duration": 11150513100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"rahi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"love1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rahi",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 178069100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "love1",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 194791700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 3637884100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 83035500,
  "status": "passed"
});
formatter.after({
  "duration": 44800,
  "status": "passed"
});
formatter.before({
  "duration": 11821374100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"xyzabc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyzabc",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 179782400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 149447100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 626601200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 77709500,
  "status": "passed"
});
formatter.after({
  "duration": 24800,
  "status": "passed"
});
});