Feature: App Main Page

  I want to open the main page

  Scenario: Opening the main page
    Given I visit the main page
    Then I see greeting "Welcome to test-project!"
