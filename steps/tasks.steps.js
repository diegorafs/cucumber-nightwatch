const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

When('I create a new task name as {string}', function (taskName) {
    let taskPage = client.page.taskPage()
    return taskPage.creatingTask(taskName)
});

Then('I see the {string} task added into the list', function (taskNameAssert) {
    let taskPage = client.page.taskPage()
    return taskPage.assertNameTask(taskNameAssert)
});

When('I hit ENTER key', function () {
    let taskPage = client.page.taskPage()
    return taskPage.creatingTaskByEnterKey();
  });

  When('I click on plus button', function () {
    let taskPage = client.page.taskPage()
    return taskPage.clickingOnPlusButton();
  });