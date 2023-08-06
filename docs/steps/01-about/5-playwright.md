## 1.5 Testing with Playwright

[Playwight](https://playwright.dev) is an open-source framework for reliable end-to-end testing of modern web apps. It has a dedicated [Accessibility Testing](https://playwright.dev/docs/accessibility-testing) page with documentation on getting started and best practices. 

Under the hood, it promotes the use of the [@axe-core/playwright](https://npmjs.org/@axe-core/playwright) driver which uses the [axe Accessibility Testing engine](https://www.deque.com/axe/) to run accessibility compliance tests as part of the Playwright test suit.


### 1.5.1 Objectives
In this section we'll setup `basic-a11y.spec.ts` - a simple test script that [scans a single page](https://playwright.dev/docs/accessibility-testing#scanning-an-entire-page) for accessibility issues. We'll use this to setup our default accessibility testing configuration with:
 - fixtures - we can customize for various rules later
 - reporting - with accessibility results stored to JSON files
 - translating - the JSON results into SARIF files


### 1.5.1 Visual Studio Code Setup

Let's first setup Visual Studio Code for development, prioritizing a few key extensions that will come in handy for our accessibility testing workflows.

 - [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) - from Deque Systems
 - [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) - from Microsoft
 - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) - from GitHub
 - [GitHub Copilot Chat (pre-release)](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) - from GitHub 
 - [Sarif Viewer](https://marketplace.visualstudio.com/items?itemName=MS-SarifVSCode.sarif-viewer) - from Microsoft

💁🏽‍♀️ **TIP** | Download the [Playwright-FYI](./../../static/Playwright-FYI.code-profile) Visual Studio Code profile shared in this repo and import it as a new profile for convenience, to get my default environment.


### 1.5.2 Install Playwright

We'll setup Playwright in the root of this repo, and configure it so we can switch seamlessly between testing either the _production_ endpoint or the _local dev server_ version, with just a few environment variable changes.

We'll use the [default quickstart](https://playwright.dev/docs/intro) using the CLI. 

```bash
# Set default Node.js to be long-term stable version
$ nvm use --lts
Now using node v18.17.0 (npm v9.6.7)

# Initialize Playwright (in root of repo)
$ npm init playwright@latest

Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · true
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
...
✔ Success! Created a Playwright Test project 
...
Happy hacking! 🎭

# Check latest Playwright version
$ npx playwright --version

```

I chose to keep all the defaults _except_ for the question on `Add a GitHub Actions workflow?` which I switched from N to Y. Note that the default uses _TypeScript_ - even if you are new to TS, it is fairly easy to pick up as you go and enables type-safe test code.

### 1.5.3 Validate Default Setup

Let's quickly check that the Playwright setup suceeded by running the default test it creates (under `tests/example.spec.ts`). To do this:

```bash
# Start in the root folder of repo and check installed version of Playwright 
$ npx playwright --version
Version 1.36.2

# Run the default test
$ npx playwright test

Running 6 tests using 6 workers
  6 passed (6.9s)

# View the generated HTML test report
# This should auto-launch the browser to localhost:9323
$ npx playwright show-report

## View the Playwright CLI usage options and commands
$ npx playwright --help
Usage: npx playwright [options] [command]
...

## View the Playwright Test Runner usage options and commands
$ npx playwright test --help
Usage: npx playwright test [options] [test-filter...]

run tests with Playwright Test
...

## 🎉 All set - let's move on.
```

### 1.5.3 Validate Automated Action

The setup will have installed a GitHub Actions workflow under `.github.workflows/playwright.yml`. By default this is configured to automatically run `npx playwright test` for you on every commit to the repo.

For now, let's check this in and see if the action is activated and runnng correctly. _At this stage it will effectively run the example test, but we can replace that later with our `basic-a11y.spec.ts` test and updating the configuration to ensure this runs _after_ the GitHub Pages action has completed. This allows us to then run the end-to-end tests on the deployed production endpoint.

Let's commit the code now.

---

[👉🏽 [Next: How Assessment Works ](./6-assessment.md)]