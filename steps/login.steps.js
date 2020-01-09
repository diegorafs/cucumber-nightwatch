const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

When('I have log using {string} and {string}', function (email, pass) {
  let loginPage = client.page.loginPage()
  return loginPage.with(email, pass)

});

Then('I see {string} message', function (centerMessage) {
  let assessmentPage = client.page.assessmentPage()
  return assessmentPage.with(centerMessage)
});

Given('I have successfully login into the app', function () {
  let loginPage = client.page.loginPage()
  return loginPage.successfully()
});

Then('I see an alert message {string}', function (expectedMessage) {
  let loginPage = client.page.loginPage()
  return loginPage.expectedMessage(expectedMessage)
});

Then('I logout', function () {
  let assessmentPage = client.page.assessmentPage()
  return assessmentPage.clickingOnLogoutButton()
});