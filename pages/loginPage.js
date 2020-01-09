var loginActions = {
    with: function (email, pass) {
        return this
            .navigate()
            .waitForElementVisible('@form', 10000)
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .click('@loginButton')
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
    successfully: function () {
        return this
            .navigate()
            .waitForElementVisible('@form', 10000)
            .setValue('@emailInput', 'diegorafarabelo@icloud.com')
            .setValue('@passInput', 'Die298055')
            .click('@loginButton')
    },
    expectedMessage: function () {
        return this
            .assert.containsText('@alertMessage', "Invalid email or password.")
    }


}

module.exports = {
    url: '/users/sign_in',
    commands: [loginActions],
    elements: {
        emailInput: '#user_email',
        passInput: '#user_password',
        loginButton: '#new_user > input',
        form: 'body > div.container > div.panel.panel-default > div.panel-heading',
        alertMessage: 'body > div.container > div.alert.alert-warning'

    }
}