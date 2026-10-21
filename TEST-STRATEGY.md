# Test strategy

## Project

Demonstration automation suite for the public SauceDemo sample storefront, with read-only contract checks against JSONPlaceholder. This is a learning/portfolio project; it is not affiliated with either service and does not represent client work.

## Objectives

- Verify critical customer journeys with maintainable browser tests.
- Validate core response status, content type, and shape for a representative API resource.
- Produce actionable failure evidence and a repeatable CI result.

## Scope and coverage

| Area | Scenarios | Test type |
| --- | --- | --- |
| Authentication | Valid user, locked-out user, missing credentials | UI / negative |
| Catalog | Product list and ascending price sort | UI / functional |
| Cart | Add one product and verify contents | UI / functional |
| Checkout | Required-field validation and completed order | UI / end-to-end |
| Posts API | Successful resource contract and missing resource | API / positive + negative |

## Out of scope

Payments, real customer data, authorization/security certification, load/performance testing, accessibility audit, mobile-native apps, and production systems. The API checks use a public fake-data service and do not create or alter records.

## Design choices

- Playwright Test with TypeScript; page objects only for reusable page behavior.
- Fixtures own setup so tests remain isolated and readable.
- Assertions verify observable outcomes rather than implementation details where possible.
- Automatic waiting through Playwright locators; no fixed sleeps.
- Trace, screenshot, and video retained on test failure.
- Chromium in CI for a fast baseline; add Firefox/WebKit after confirming the demo app's support and pipeline time.

## Risks and assumptions

- Both demo services are external and can be unavailable or change without notice.
- SauceDemo sample credentials and JSONPlaceholder are intended for demonstration, not production testing.
- The product price assertion reflects the current sample catalog and should be updated if that public demo changes.

## Exit criteria

- TypeScript type-check passes.
- All UI and API tests pass against the configured demo services.
- CI uploads the HTML report and failure artifacts even when tests fail.
