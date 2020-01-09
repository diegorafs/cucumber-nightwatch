Feature: Sub task

    This feature is responsible for the flow of inserting new tasks and subtasks

    Scenario: Creating a subtask

        Given I have successfully login into the app
        And I create a new task name as "Task - Automation with SubTasks"
        And I click on plus button
        And I see the "Task - Automation with SubTasks" task added into the list
        And I add a subtask named as "Sub Task Automation"
        Then I see the "Sub Task Automation" subtask added into the list
        And I logout

