const { client, Keys } = require('nightwatch-api');
var taskPageActions = {
    creatingTask: function (taskName) {
        return this
            .navigate()
            .setValue('@taskAdd', taskName)


    },
    expectAlertDanger: function (texto) {
        return this
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', texto)
    },
    expectAlertInfo: function (texto) {
        return this
            .waitForElementVisible('@alertInfo', 10000)
            .assert.containsText('@alertInfo', texto)
    },
    assertNameTask: function (taskName) {
        return this
            .assert.containsText('@taskNameAssert', taskName)

    },
    clickingOnPlusButton: function () {
        return this
            .click('@plusButton')
    },
    creatingSubTask: function (subTaskName) {
        return this
            .click('@manageSubTask')
            .waitForElementVisible('@checkIfModalExists', 1000)
            .setValue('@subTaskName', subTaskName)
            .click('@addButtonSubTask')
            .click('closeButtonSubTaskModal')


    },
    assetSubTaskName: function (subTaskName) {
        return this
            .assert.containsText('@checkIfSubTaskExists', subTaskName)
            .pressEscKey()
    },
    pressEscKey: function () {
        client.keys([client.Keys.ESCAPE])
    }

}

module.exports = {
    url: '/tasks',
    commands: [taskPageActions],
    elements: {
        taskAdd: '#new_task',
        plusButton: 'body > div.container > div.task_container.ng-scope > div.well > form > div.input-group > span',
        taskNameAssert: 'body > div.container > div.task_container.ng-scope > div.bs-example > div:nth-child(2) > table > tbody > tr:nth-child(1) > td.task_body.col-md-7.limit-word-size',
        manageSubTask: 'body > div.container > div.task_container.ng-scope > div.bs-example > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(4) > button',
        subTaskName: '#new_sub_task',
        addButtonSubTask: '#add-subtask',
        closeButtonSubTaskModal: '/html/body/div[4]/div/div/div[3]/button',
        checkIfModalExists: 'body > div.modal.fade.ng-isolate-scope.in > div > div > div.modal-header.ng-scope > h3',
        checkIfSubTaskExists: 'body > div.modal.fade.ng-isolate-scope.in > div > div > div.modal-body.ng-scope > div:nth-child(4) > table > tbody > tr > td.task_body.col-md-8.limit-word-size > a'
    }
}
