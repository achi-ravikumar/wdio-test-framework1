Feature: Products

@test
  Scenario Outline: Add product to cart

    Given I navigate to app
    Then I validate login page displayed
    When I login with username "standard_user" and password "secret_sauce"
    Then I see products page
    When I add highest priced product to cart
    Then I see highest priced product button label is "REMOVE"
    
    