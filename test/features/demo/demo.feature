Feature: Demo Feature

    # @demo
    Scenario Outline: Run First Demo feature
        Given Google page is opened
        When  Search with <SearchItem>
        Then  Click on first search result
        Then URL should match <ExpectedURL>

        Examples:
           | TestID     | SearchItem | ExpectedURL         |
           | DEMO_TC001 | WWDIO    |https://webdriver.io/|