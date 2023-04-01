Feature: Smoke test of search feature on www.google.es 
    Background:
        Given I open the browser page with the url "https://www.google.com/webhp?hl=es"
        Given I click on "Aceptar todo" button I see the title "Google" main page
        Given I type the search string "Apple" into the search input
        Then I see the search suggesstions list
        Then I click on "Buscar con Google" button
    Scenario: Visit www.google.es search for 'Apple' and check results are not lower than 10000
        Then I see the found results number should not be less than 10000
    Scenario: Visit www.google.es search for 'Apple' and check results are greater 100000
        Then Results found number is greater than 100000