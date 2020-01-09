var assessmentPageActions = {
    with: function (centerMessage) {
        return this
            .assert.containsText('@centerMessage', centerMessage)
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
    clickingOnLogoutButton: function () {
        return this
            .waitForElementVisible('@logOutButton',10000)
            .click('@logOutButton')
            .click('@signInButton')

    }
}

module.exports = {
    url: '/',
    commands: [assessmentPageActions],
    elements: {
        centerMessage: 'body > div.container > div.alert.alert-info',
        logOutButton: 'body > div.container > div.navbar.navbar-default > div > div.navbar-collapse.collapse > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a',
        signInButton: 'body > div.container > div.jumbotron.grey-jumbotron > center > a.btn.btn-lg.btn-primary'

    }
}