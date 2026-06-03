Feature: OrangeHRM search system user functionality

Background:
     Given user navigates to url  
    When user enters username as "Admin"      
    When user enters password as "admin123"   
    When user clicks on login button
   
@Regression
Scenario: Search system user by valid username
    When user clicks on Admin tab
    When user enters username as a "Jay123"
    When user clicks on search button
    Then application shows result as 1 record found    
   
 
