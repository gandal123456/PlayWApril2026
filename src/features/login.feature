Feature: OrangeHRM Login

Background:
     Given user navigates to url  

@smoke
Scenario: Valid Login
    When user enters username as "Admin"      
    When user enters password as "admin123"   
    When user clicks on login button
    Then user should navigate to dashboard page
   
  
 Scenario Outline: InValid Login
    When user enters username as "<username>"      
    When user enters password as "<password>"   
    When user clicks on login button
    Then appplication should show error message as Invalid credentials
   
     Examples:
        | username | password  |
        | Admin37  | wrongpass |
        | wronguser| admin123  |
        | wronguser| wrongpass |
        | ADMIN$1  | 321admin  |

