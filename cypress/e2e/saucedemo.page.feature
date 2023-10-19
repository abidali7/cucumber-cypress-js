Feature: Saucedemo Website

  Background:
    Given I go to the "saucedemo login page"
    Then I am on the "saucedemo login page"
    Then I see the "saucedemo login logo"
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

  @smoke
  Scenario: User can view the details view of product
    When I click the "inventory item name" by the "Sauce Labs Onesie"
    Then I see that the url matches the "saucedemo details page" url
    Then I see "details view name" appeared as "Sauce Labs Onesie"
    Then I see "details view price" appeared as "$7.99"
    Then I see the "details img"

  @smoke
  Scenario: User can add product to cart and can do checkout
    When I click the "inventory item name" by the "Sauce Labs Onesie"
    Then I see that the url matches the "saucedemo details page" url
    And I click the "details add to cart button"
    Then I no more see the "details add to cart button"
    Then I see the "details remove from cart button"
    Then I see "details cart badge" appeared as "1"
    
    When I click the "details cart link"
    Then I see that the url matches the "saucedemo cart page" url
    Then I see "cart quantity" appeared as "1"
    Then I see the "cart continue shopping"
    Then I see the "cart remove from button"

    When I click the "cart checkout button"
    Then I see that the url matches the "saucedemo checkout page" url
    Then I see the "checkout page title"
    Then I see the "checkout cancel button"
    And I type "first name of user" into the "checkout first name input field"
    And I type "last name of user" into the "checkout last name input field"
    And I type "12345" into the "checkout postal code input field"

    When I click the "checkout continue button"
    Then I see the "checkout payment info"
    Then I see the "checkout shipping info"
    Then I see the "checkout total price info"

    When I click the "checkout finish button"
    Then I see the "checkout back home button"
    Then I see "checkout header info" appeared as "Thank you for your order!"



    