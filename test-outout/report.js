$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4128308916,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Submit valid data via contact us form",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form;submit-valid-data-via-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user access webdriveruniversity contact us form",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter a valid first name",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter a valid last name",
  "rows": [
    {
      "cells": [
        "Woods",
        "Jackon",
        "Jones"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter comments",
  "rows": [
    {
      "cells": [
        "Hello",
        "World"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user should see successfull submission message",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsSteps.user_access_webdriveruniversity_contact_us_form()"
});
formatter.result({
  "duration": 934206578,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enter_a_valid_first_name()"
});
formatter.result({
  "duration": 200643032,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 133500144,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 163302288,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_enter_comments(DataTable)"
});
formatter.result({
  "duration": 153852500,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_click_on_submit_button()"
});
formatter.result({
  "duration": 3138187837,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.user_should_see_successfull_submission_message()"
});
formatter.result({
  "duration": 51647480,
  "status": "passed"
});
formatter.after({
  "duration": 654237735,
  "status": "passed"
});
formatter.uri("Products.feature");
formatter.feature({
  "line": 1,
  "name": "Products page",
  "description": "",
  "id": "products-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be presented with promo code",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;",
  "rows": [
    {
      "cells": [
        "url",
        "button"
      ],
      "line": 9,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
        "#container-special-offers"
      ],
      "line": 10,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3381122359,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \"#container-special-offers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be presented with promo code",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 19
    }
  ],
  "location": "ProductsSteps.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 1799854158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#container-special-offers",
      "offset": 16
    }
  ],
  "location": "ProductsSteps.user_clicks_on(String)"
});
formatter.result({
  "duration": 414838905,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.user_should_be_presented_with_promo_code()"
});
formatter.result({
  "duration": 1334879794,
  "status": "passed"
});
formatter.after({
  "duration": 634514095,
  "status": "passed"
});
});