## 1.4 aXe Accessibility Solution

[Deque Systems](https://www.deque.com/) is universally recognized as the leader in accessibility testing and compliance tools and techniques. Core to their success is [aXe-core](https://github.com/dequelabs/axe-core)  -the industry standard accessibility engine for _automated Web UI testing_.

🔖 | Bookmark these resources for reference
 - [aXe API Docs](https://www.deque.com/axe/core-documentation/api-documentation/) - test runner API
 - [aXe Integrations](https://www.deque.com/axe/core-documentation/integrations/) - for other test runners
 - [aXe Developer Guide](https://github.com/dequelabs/axe-core/blob/develop/doc/developer-guide.md) - architecture, APIs, utilities
 - [aXe Release updates](https://github.com/dequelabs/axe-core/releases) - currently v4.7.2 (May 2023)

This section provides a rapid overview of the core concepts and components of this solution, before we dive into actual usage.

<br/>

### 1.4.1 axe-core Engine | Solution

What is `axe-core`? Think of it as as an accessibility-focused _test runner_ that has built-in Rules and Checks for testing accessibility compliance, and can generate Reports in formats suitable for analysis or integration in developer workflows. The workflow has 3 steps:
 - _Configuration_ - use supported options to configure test run
 - _Execution_ - run axe (CLI or integrations) to start test run on site
 - _Reporting_ - view the returned _accessibility-results_ report (JSON)

The report provides details on the rules prioritized in test, the number of nodes (matching elements) on which rules were assessed, and the outcomes (passes, violations, incomplete, inapplicable) of those assessments. The report also provides _insights_ into probable causes for violations, and proposes fixes to remediate them.

The developer can use the report as guidance to make relevant fixes, then re-run scan to validate that fixes worked and accessibility compliance goals are met.

<br/>

### 1.4.2 axe DevTools HTML | Tooling

Deque Systems also maintains [axe DevTools HTML](https://docs.deque.com/devtools-html/4.0.0/en/overview-home) a suite of accessibility testing tools built on top of axe-core that make it easy to integrate automated testing into your developer workflow. 

Key to this is the [Shift Left](https://docs.deque.com/devtools-html/4.0.0/en/overview-home#shift-left) philosophy to move _detection and remediation_ closer to the start of the developer workflow (e.g., design or authoring) instead of at the end (build or post-deployment) - driven by the 4 components below:

🔖 | Bookmark these resources for reference
 - axe DevTools [Linter for VS Code](https://docs.deque.com/devtools-html/4.0.0/en/welcome-axe-devtools#axe-devtools-linter-spot-accessibility-issues-as-you-code) - spot a11y issues at _authoring_ time.
 - axe DevTools [Browser Extension](https://docs.deque.com/devtools-html/4.0.0/en/welcome-axe-devtools#axe-devtools-browser-extension-check-accessibility-from-your-browser) - spot a11y isues in _deployed_ sites.
 - axe DevTools [APIs](https://docs.deque.com/devtools-html/4.0.0/en/welcome-axe-devtools#apis-automate-your-accessibility-testing) - integrate a11y testing into _e2e test automation workflows_.
 - axe DevTools [CLI](https://docs.deque.com/devtools-html/4.0.0/en/welcome-axe-devtools#cli-check-accessibility-from-the-command-line) - check a11y issues _from command line_. 

Ideally, we want to add the linter into our VS Code profile, and use the integrations to automate accessibility testing in our end-to-end developer workflow (from authoring to deployment and CI/CD). However the CLI and extension options are useful when:
 - we want quick interactive checks of a site or page
 - we don't have source access - so we can't integrate in workflow
 - we have source access - but source language has no integration

<br/>

### 1.4.3 axe DevTools HTML | Integrations

We will focus on _integrations_ which drive automated testing workflows with _other_ test runners, while remaining consistent with _axe-core_ engine evolution. The axe-core [Philosophy and Manifesto](https://github.com/dequelabs/axe-core-npm/tree/develop#philosophy) is that _automated accessibility testing rules must_
  - have zero false positive rate
  - be lightweight and fast
  - work on all modern browsers
  - themselves be tested automatically

At present [example integrations](https://docs.deque.com/devtools-html-examples) exist for JavaScript, C#, Java, Python and Ruby. In _this_ demo and tutorial, we use 🎭 [Playwright](https://playwright.dev) and dive into usage details later.

🔖 | Bookmark these resources for reference
 - aXe Docs 👉🏽 [Playwright](https://docs.deque.com/devtools-html/4.0.0/en/node-pl-overview) on Node.js - announced in [June 2021](https://www.deque.com/blog/new-axe-devtools-integration-playwright/) 
 - aXe Drivers 👉🏽 [axe-core-npm](https://github.com/dequelabs/axe-core-npm) suite - with [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md)
 - Playwright docs 👉🏽 [Accessibility Testing](https://playwright.dev/docs/accessibility-testing) guidelines for usage

<br/>

### 1.4.4 axe DevTools HTML | Ruleset

Automated accessibility testing relies on _assessment_ based on  aXe [Rulesets](https://docs.deque.com/devtools-html/4.0.0/en/rulesets) - defined as `Rule` objects with these properties:
 - unique `id` reflecting their purpose
 - associated `impact` from {minor, moderate, serious or critical}
 - associate `type` from {failure, needs review}
 - associated `tags` that identify "requirements" that rule enforces

From a WCAG compliance perspective, rules are grouped as:
 - [WCAG 2.0 Level A, AA](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md#wcag-20-level-a--aa-rules) - use tags `wcag2a`, `wcag2aa`
 - [WCAG 2.1 Level A, AA](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md#wcag-21-level-a--aa-rules) - use tags `wcag21a`, `wcag21aa`
 - [WCAG 2.2 Level A, AA](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md#wcag-22-level-a--aa-rules) - use tags `wcag22a`, `wcag22aa`
 - [WCAG 2.x Level AAA](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md#wcag-2x-level-aaa-rules) - use tags `wcag2aaa`
 - [Best Practices](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md#best-practices-rules) - axe-defined (not WCAG), use tags `best-practice`
 - [Experimental](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md#experimental-rules) - axe-in-development (not WCAG), use tags `experimental`

🔖 | Bookmark these resources for reference
 - See [rule-descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) - comprehensive list assessed by aXe
 - See [Axe-core Tags: Core](https://www.deque.com/axe/core-documentation/api-documentation/#axecore-tags) - tag types supported, and their purpose
 - See [Axe-core Tags: Category](https://www.deque.com/axe/core-documentation/api-documentation/#axecore-tags) - `cat.*` tag subset for _type_ of content.

<br/>

### 1.4.5 axe DevTools HTML | Test Automation

To understand _how_ this works under the hood, it's useful to start with an example test run - then look at the artifacts generated to provide context. _To do that, we'll start first by running a sample accessibility test using Playwright_.

---

[👉🏽 [Next: Playwright](./5-playwright.md)]