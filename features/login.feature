Feature: Login

   This feature is responsible for the validation of login into the app

   Scenario: Login successfully

      When I have log using "diegorafarabelo@icloud.com" and "Die298055"
      Then I see "Signed in successfully" message
      And I logout


   Scenario Outline: Login unsuccessful

      When I have log using "<email>" and "<pass>"
      Then I see an alert message "<expectedMessage>"

      Examples:
         | email                      | pass    | expectedMessage            |
         |                            | abc 123 | Invalid email or password. |
         | diegorafarabelo@icloud.com |         | Invalid email or password. |
         | diegorafarabelo@icloud.com | abc123  | Invalid email or password. |
         | abc@icloud.com             | abc123  | Invalid email or password. |


