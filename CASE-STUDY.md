# Demonstration: automated checks for a sample store and API

This is an independent portfolio project by Sergio Moyano. It uses the public SauceDemo sample storefront and the fictional-data JSONPlaceholder API. It is not client work and is not affiliated with either service.

## The problem illustrated

Before a release, a product team needs to know whether its essential journeys still work and receive useful evidence when a check fails. This sample defines a small, repeatable set of browser and API checks.

## Defined scope

| Area | Implemented checks |
| --- | --- |
| Sign-in | Successful login, locked user, and missing required credentials |
| Catalog | Product display and price sorting |
| Cart | Add an item and verify the contents |
| Checkout | Required-field validation and demo order confirmation |
| API | HTTP status, response type and shape, and a missing resource |

The suite contains nine Playwright and TypeScript tests. Browser checks run in Chromium; API checks are read-only. GitHub Actions runs type checking and the tests, and retains failure artifacts.

## Verifiable evidence

- [Source code and setup instructions](README.md)
- [Scope and testing decisions](TEST-STRATEGY.md)
- [Successful GitHub Actions run on October 21, 2026](https://github.com/smoyano88/qa-automation-portfolio/actions/runs/39538757311)

A local run on October 21, 2026 passed 9/9 tests and the TypeScript check. That is the outcome of a particular run, not a guarantee about future behavior of the external demo services.

## Limits

This sample shows how I select critical journeys, automate repeatable checks, and preserve technical evidence. It is not a complete audit of either service or a security, accessibility, or performance assessment. A client project starts by agreeing on the product's own flows, environments, and acceptance criteria.
