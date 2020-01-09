const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

Given('I add a subtask named as {string}', function (subTaskName) {
    let taskPage = client.page.taskPage()
    return taskPage.creatingSubTask(subTaskName)
    
});

Then('I see the {string} subtask added into the list', function (subTaskName) {
    let taskPage = client.page.taskPage()
    return taskPage.assetSubTaskName(subTaskName)
});
