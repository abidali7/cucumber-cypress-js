Feature: Saucedemo Website

  Background:
    Given I go to the "saucedemo login page"
    Then I am on the "saucedemo login page"
    When I see the "saucedemo login logo"
    And I type "standard_user" into the "userName input field"
    And I type "secret_sauce" into the "password input field"
    And I click the "loginBtn button"
    Then I see that the url matches the "saucedemo inventory page" url

  @smoke
  Scenario: User can sort the product at inventory page
    When I select "Price (low to high)" from "inventory sort container"
    Then I see "inventory sort active option" activated as "Price (low to high)"
    Then I see "inventory item price" are in "ascending" order
    When I select "Name (A to Z)" from "inventory sort container"
    Then I see "inventory sort active option" activated as "Name (A to Z)"
    #Then I see "inventory item price" are in "ascending" order

  @smoke
  Scenario: User can view the details view of product
    When I click the "inventory item name" by the "Sauce Labs Onesie"
    Then I see that the url matches the "saucedemo details page" url
    Then I see "details view name" activated as "Sauce Labs Onesie"
    Then I see "details view price" activated as "$7.99"
    Then I see the "details img"

  @smoke
  Scenario: User can add product to cart and can do checkout
    When I click the "inventory item name" by the "Sauce Labs Onesie"
    Then I see that the url matches the "saucedemo details page" url
    And I click the "details add to cart button"
    Then I no more see the "details add to cart button"
    Then I see the "details remove from cart button"
    Then I see "details cart badge" activated as "1"
    And I click the "details cart link"
    