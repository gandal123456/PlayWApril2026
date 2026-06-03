Feature: OrangeHRM Add User

Background:
     Given user navigates to url  
    When user enters username as "Admin"      
    When user enters password as "admin123"   
    When user clicks on login button

@Regression
Scenario Outline: Add new user from Admin -> User Management -> Add User
    When user clicks on Admin tab
    When user clicks on Add button
    When user selects user role as "<role>"
    When user enters employee name as "<employee>"
    When user enters username for new user as "<newUsername>"
    When user selects status as "<status>"
    When user enters password for new user as "<password>"
    When user enters confirm password for new user as "<password>"
    When user clicks on Save button
    Then application should show user creation success message

    Examples:
      | role        | employee       | newUsername | status   | password   |
      | ESS         | Linda Anderson | LindaA123   | Enabled  | Pass@123   |
      | Admin       | Linda Anderson | AdminLinda  | Enabled  | Pass@123   |
