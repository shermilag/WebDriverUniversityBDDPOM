Feature: Submit data to webdriveruniversity.com using contact us form

Scenario: Submit valid data via contact us form
Given user access webdriveruniversity contact us form
When user enter a valid first name
When user enter a valid last name
| Woods | Jackon  | Jones |
And user enter a valid email address
And user enter comments
| Hello  | World |
When user click on submit button
Then user should see successfull submission message