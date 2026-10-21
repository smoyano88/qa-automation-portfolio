# QA Automation Portfolio — Playwright + TypeScript

Need a focused check before a release? See my [web and API review pilot](SERVICES.md) and [demonstration case study](CASE-STUDY.md).

An independently created portfolio example demonstrating browser and API test automation. It exercises the public SauceDemo sample storefront and performs read-only API checks against JSONPlaceholder. This is not client work and is not affiliated with either service.

## What it covers

- Login success, locked account, and required-field validation.
- Inventory count and price sorting.
- Add-to-cart and cart-content checks.
- Checkout validation and successful order confirmation.
- API status, content type, response shape, and a not-found case.
- Reusable page objects and fixtures, strict TypeScript, and CI with failure artifacts.

## Tech stack

Playwright Test · TypeScript · Node.js · GitHub Actions

## Run locally

Prerequisites: Node.js 22 or newer and npm.

```bash
npm ci
npx playwright install chromium
npm run typecheck
npm test
npm run report
```

Useful focused commands:

```bash
npm run test:e2e
npm run test:api
npm run test:smoke
npm run test:ui
```

## Configuration

The defaults target `https://www.saucedemo.com` and `https://jsonplaceholder.typicode.com`. Override them with `BASE_URL` or `API_BASE_URL` when using compatible environments. No secrets or private credentials are needed; the storefront credentials in `src/data/credentials.ts` are public demo credentials.

## Project layout

```text
src/
  data/          Demo-only test data
  fixtures/      Shared Playwright fixtures
  pages/         Page objects
tests/
  api/           API contract checks
  e2e/           Browser journeys
.github/workflows/ci.yml
TEST-STRATEGY.md
BUG-REPORT-TEMPLATE.md
```

## CI

GitHub Actions installs Chromium, type-checks the project, runs the complete suite, and uploads the HTML report plus failure artifacts. Retries are enabled only in CI; traces, screenshots, and videos are retained on failure.

## Limitations

These checks run against third-party demo services and can be affected by their availability or changes. They are a focused sample, not exhaustive product coverage, and they do not claim performance, security, accessibility, or mobile-native validation. See [TEST-STRATEGY.md](TEST-STRATEGY.md).
