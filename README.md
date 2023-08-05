# Playwright For Accessibility Testing - Demo Walkthrough

[![pages-build-deployment](https://github.com/Playwright-FYI/playwright-a11y-demo/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Playwright-FYI/playwright-a11y-demo/actions/workflows/pages/pages-build-deployment) &nbsp; 

## About This Project

For more details check out [docs/index](./docs/index.md) in the repo, or the "/" base URL on deployed site. This is a Markdown page that contains:
 - motivation for project
 - context for why jQuery & Bootstrap samples
 - overview of accessibility standards & guidelines
 - overview of how axe-core testing works
 - example of an axe-core test report
 - overview of how playwright works with axe-core
 - steps describing accessibility testing with Playwright
 - steps describing accessibility reporting insights
 - steps describing dev environment for e2e workflows
 - steps describing the e2e author-test-remediate flow
 - summary of learnings for accessibility compliance



## HTML Test Samples

For the experiments, we have samples using:
 - jquery-ui-1.13.2.custom - from jQuery-UI `demos`
 - bootstrap-5.3.1-examples - from Bootstrap `examples`
 - markdown - this project's documentation

## Deployed Samples

The samples are deployed directly to GitHub pages with no additional build step specified by the source. There are 3 core routes in the deployed server:
 - /jquery-UI - root of jQuery samples
 - /bootstrap - root of boostrap sanples
 - /steps - root of markdown samples.

The GitHub deployment process converts the markdown samples into HTML - but the other content should have a direct source-deploy correlation since they are already in static site page form.

## View Production Deployment

You can view the production deployment at [the GitHub Pages endpoint](https://playwright-fyi.github.io/playwright-a11y-demo/) 

## View Local Dev Server

We can view the jquery-ui and bootstrap samples (static HTML) directly in a simple webserver (e.g., `python3 -m http.server`). 

The challenge here is in previewing the HTML version of the _Markdown_ files. GitHub converts these to HTML when deploying to web pages, but how do we emulate that in a local devserver?

### Experiment: Docsify

I'm using [docsify](https://docsify.js.org/#/?id=docsify) which loads your Markdown into an index.html for viewing. We can now use:

```bash
# Install docsify in dev env
$ npm i docsify-cli -g

# Initailize required folder 
docsify init ./docs

# Preview locally
$ docsify serve docs
```

You don't need to change anything else. Docsify just adds an _index.html_ to the root of the folder hosted in GitHub Pages - and has that intelligently load and parse Markdown on the fly.

This means you can _also_ preview this site using `python3 -m https.server`.

_Note:_ This ends up creating custom URLs (with /#) as a side-effect, which interferes with our testing strategy. So for now, we will remove the docsify support (see `.parked` files) and revert to default GitHub Pages behavior. And simply test in production.

---

![GitHub stars](https://img.shields.io/github/last-commit/Playwright-FYI/playwright-a11y-demo/main) &nbsp;
![GitHub issues](https://img.shields.io/github/issues/Playwright-FYI/playwright-a11y-demo) &nbsp;
![GitHub issues](https://img.shields.io/github/issues-closed/Playwright-FYI/playwright-a11y-demo) &nbsp;
![GitHub issues](https://img.shields.io/github/issues-pr/Playwright-FYI/playwright-a11y-demo) &nbsp;
<br/>
![GitHub stars](https://img.shields.io/github/stars/Playwright-FYI/playwright-a11y-demo) &nbsp;
![GitHub stars](https://img.shields.io/github/watchers/Playwright-FYI/playwright-a11y-demo) &nbsp;
![GitHub issues](https://img.shields.io/github/repo-size/Playwright-FYI/playwright-a11y-demo) &nbsp;
![GitHub stars](https://img.shields.io/github/commit-activity/t/Playwright-FYI/playwright-a11y-demo?label=commits-total) &nbsp;
