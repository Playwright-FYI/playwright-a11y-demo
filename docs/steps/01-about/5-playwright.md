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

### 1.5.3 Validate Local Setup

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

Let's commit the code - and visit the [Actions](https://github.com/Playwright-FYI/playwright-a11y-demo/actions) tab on GitHub:
 - We see 2 workflows: [Playwright Tests](https://github.com/Playwright-FYI/playwright-a11y-demo/actions/workflows/playwright.yml) and [pages-build-deployment](https://github.com/Playwright-FYI/playwright-a11y-demo/actions/workflows/pages/pages-build-deployment)
 - We see [Playwright Tests](https://github.com/Playwright-FYI/playwright-a11y-demo/actions/runs/5778366684) ran, and stored report in `Artifacts`. 

Automated workflow works!! 🎉 - now let's dive in and customize our Playwright test environment for _our_ application.

### 1.5.4 Customize Default Setup

Let's look at what Playwright adds to your project repo. Here are the main files you see, with a short explainer on what they represent. You can always revisit this version [at this commit](https://github.com/Playwright-FYI/playwright-a11y-demo/commit/cfb51cfeffe3dc2103fa615ed646d42c0eefb133) for reference.

```json
// Listing of Playwright related files 
// in the root of repo, after initial setup    
// ----------------------------------------       
node_modules/           // Installed Dependencies
package.json            // Configure Dependencies
package-lock.json       // Fix Dependency Versions
playwright-report/      // HTML Reporter artifacts  
test-results/           // Test Runner artifacts
tests-examples/         // Playwright Test Specs (sample)
playwright.config.ts    // Playwright Config File
tests/                  // Playwright Tests Folder
  example.spec.ts       // Playwright Test Specs (active)
```

Now, let's start changing things 😈.

 - Delete the `test-examples/` folder - we don't need the samples!
 - Ignore the `node_modules/`, `playwright-report/`, `test-results/`.
 - Which leaves 2 key targets: `playwright.config.ts` and `tests/` 

Let's dive into these!

### 1.5.5 Configure Playwright Runner

`playwright.config.ts` is the key configuration file for Playwright. We can update the configuration by taking the following actions:

#### 1.5.5.1 **Set Tests Specification & Results Locations**

By default Playwright will look for test specifications (`*.spec.ts`) _under the root folder_ defined by `testDir`. This allows us to do interesting things like [only run tests that have a certain tag](https://playwright.dev/docs/test-annotations#tag-tests) or [run a single test file by name](https://playwright.dev/docs/running-tests#command-line) - and know that this will resolve only to test specifications within that folder hierarchy.

By default Playwright will use [the folder configured in outputDir](https://playwright.dev/docs/api/class-testproject#test-project-output-dir) as the location for _interim test artifacts_ created by the test runner. Watching this at runtime gives you a sense of the degree of parallelization (where each worker will create its own subfolder to store the results from its currently-executing test)


#### 1.5.5.2 **Support Environment Variables**

Configure Playwright so you can [pass environment variables](https://playwright.dev/docs/test-parameterize#passing-environment-variables) either in settings or from command-line. We can use this to establish BASE_URL (switch between production and dev server) and specify the location for storing assets (HTML reports, TEST RUNNER outcomes)

```bash
# Install dotenv in project
$ npm install dotenv --save

# Uncomment `require("dotenv").config();` 
# in playwright.config.ts. Now you can 
# reference environment vars with 
#`process.env.VARNAME`

# Create a .env file alongside playwright.config.ts
# For convenience  - copy .env.example to .env 
# Then customize the values (see comments for examples)
# The default (no variable set) will work out of the box
```

The most important envrionment variable to set here is `BASE_URL` which is made use of in the configuration file later (if defined). The _baseURL_ refers to the absolute path of the "root" of the website you are testing -- maps to `/`. This allows us to then use relative paths `/about` within the tests without having to know the absolute path.
 - we can use this to switch baseURL between local dev server and remote production endpoint dynamically, for testing
 - in repo .env set BASE_URL to the production server and DEVSRV_URL to the dev server. The dev server is used only if production server is not defined.

#### 1.5.5.3 Specify Projects & Parallelization

Configure Playwright testing projects [for multple browsers](https://playwright.dev/docs/test-projects#configure-projects-for-multiple-browsers) - you can set these up for both mobile and desktop versions, selecting from [the registry of device parameters](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json).
 * For coverage, I defined one desktop and one mobile project
 * You can [use commandline](https://playwright.dev/docs/running-tests#command-line) to override config and run a single project.

You can [parallelize or shard](https://playwright.dev/docs/test-parallel) tests for efficiency. 

 * Configure this on a _per test file_ level, or _at project level_ to enforce this for all test files 👉🏽 just set _fullyParallel_ to true in config.
 * To turn off parallelization 👉🏽 just set _workers_ to 1 in the config.


#### 1.5.5.4 Specify Reporter & Report Location

Playwright has [multiple built-in reporter options](https://playwright.dev/docs/test-reporters#built-in-reporters) - with the default setting as `html`. 
 - You can configure [multiple reporters](https://playwright.dev/docs/test-reporters#multiple-reporters) to run on same project
 - The HTML reporter places [default reports in playwright-report](https://playwright.dev/docs/test-reporters#html-reporter) but we can override this by uisng the `PLAYWRIGHT_HTML_REPORT`
 - The `npx playwright show-report` will launch the browser and point to the _last generated report_, assuming `playwright-report` as the location by default. _At present, this does not check env-var so if you set a new location, pass that in at command-line instead_


#### 1.5.5.5 Specify Webserver

While Playwright ideally runs in CI/CD to test against staged or production deployments ("built" static sites), you also have the option to run it _against a local dev server_ for writing or validating tests during development.

This is achieved by [configuring a web server](https://playwright.dev/docs/test-webserver) and specifying the following:
 - `command` to start your dev server. Playwright will run this and wait for it to be ready _before_ it starts running tests.
 - `url` where you expect that dev server to have a preview running for testing, when ready.
 - `reuseExistingServer` flag that allows Playwright to reuse a dev server you already have running - and start one only if there is no server running already.
 - `stdout`, `stderr` to support debugging by printing verbose output or error messages from webserver. Can be set to `ignore` or `pipe` to turn it off or on. 
 - `timeout` to take into account longer waits required for the dev server to startup so that Playwright does not timeout early waiting for it to be ready for testing.

 🚨 _For now, we will use only production server testing since we need to resolve local dev server issues for Markdown_

### 1.5.6 Customize Playwright Test Spec

#### 1.5.6.1 Update default test spec

Let's rename `tests/example.spec.ts` to `tests/basic-a11y.spec.ts` and update it to write our first accessibility test that runs on a single page of our deployed site. _For now, let's have it test the `jQuery-UI` page which has the most widgets in a single page_.
 - Update this to test that core routes exist in our app
 - Update each test to validate heading of page on that route

> 🚧 TODO: _Use this section to show how we use Playwright VS Code to find locators quickly. Also use this to discuss timeout settings and webserver usage if any_


#### 1.5.6.2 Add accessibility tests


---

[👉🏽 [Next: How Assessment Works ](./6-assessment.md)]