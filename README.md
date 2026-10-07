# SauceDemo Cypress Test

Automated end-to-end test for https://www.saucedemo.com/ using Cypress.

## Flow covered
Login → add product → cart → checkout information → overview → finish → confirmation message.

## Setup
1. Install Node.js (LTS version) from https://nodejs.org
2. Clone this repo and open the folder in a terminal
3. Run `npm install`

## Run
- Headless: `npx cypress run`
- Interactive window: `npx cypress open`

Expected result: 1 test passing.

## Assertions
- Cart badge shows 1 item
- Cart shows the correct product name and price
- URL is correct at each step
- Subtotal + tax = total
- Confirmation page shows "Thank you for your order!"

## AI usage
AI (Claude) helped with:
- Choosing the flow to automate and which assertions matter
- First draft of the test and selectors
- Project setup and debugging

## What was incorrect, incomplete or brittle in the AI output
- [Write only what you really saw. Examples below. Delete any that did not happen to you.]
- The first draft had no final assertion, so it never confirmed that the order completed.
- It did not check the URL after login, so a failed login would show up as a confusing error later.
- The total was not verified, only the subtotal.
- The AI suggested `supportFile: false` in the config, which was not needed for this single-file test.

## What I changed manually and why
- Added a final assertion for the confirmation message, to prove the order succeeded.
- Added URL checks at each step, to confirm real navigation.
- Added a subtotal + tax = total check, to test the price calculation.
- Hid the password in the Cypress log, to avoid exposing credentials in output.
- Used no fixed waits. Cypress retries assertions automatically.

## Limitations and risks
- Depends on a live third-party demo site. Downtime or changes can fail the test.
- Covers one browser (Chrome), one user (`standard_user`) and one product.
- Product price is fixed in the test, so a price change will fail it.
- Selectors rely on `data-test` attributes. If renamed, the test breaks.
- Console shows 401 errors from `events.backtrace.io`. These come from a third-party tracking script on the site, not from this test, and do not affect the result.