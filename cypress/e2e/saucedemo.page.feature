Feature: Saucedemo Website

  Background:
    Given I go to the "saucedemo login page"
    Then I am on the "saucedemo login page"
    When I see the "saucedemo login logo"
    And I type "standard_user" into the "userName input field"
    And I type "secret_sauce" into the "password input field"
    And I click the "loginBtn button"

  @smoke
  Scenario: User can view the inventory page
    