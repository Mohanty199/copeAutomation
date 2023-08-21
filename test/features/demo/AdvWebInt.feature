Feature: Advanced Web Interractions

    # @demo
    Scenario Outline: Different Advanced Web Interactions
        Given Login into inventory webapp
        # Then Inventory page should list <NumberOfProducts> products
        # Then Validate all products have valid price

        Examples:
            | TestID          | NumberOfProducts |
            | AdvWebInt_TC003 |6           |
