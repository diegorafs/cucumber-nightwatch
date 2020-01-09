Feature: Tasks

    This feature is responsible for the flow of inserting new tasks

    Scenario: Creating a simple task

        Given I have successfully login into the app
        When I create a new task name as "Task - Automation"
        And I click on plus button
        Then I see the "Task - Automation" task added into the list
        And I logout

