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

### For HTML Samples
Both jQuery and Bootstrap folders contain _HTML_ files that make it easy to view them from any local webserver.  I prefer to use the built-in webserver in Python3, which is likely installed on most desktop environemnts.

```bash
# Start python server at project root
python3 -m http.server
Serving HTTP on :: port 8000 (http://[::]:8000/) ...

# Open browser to localhost:8000 to see folder listing
#    - Click on `docs/jQuery-UI` 
#      to view jQuery samples on a single page
#    - Click on `docs/bootstrap`
#      to get listing of sample subfolders
#      click one (e.g., album) to see that sample

```

### For Markdown Samples

Markdown is just text by default and needs an additional processing step to be rendered into HTML that is served in GitHub Pages. We need a local devserver that is capable of making this translation for _GitHub Flavored Markdown_.

A quick search of npm gave me [md-fileserver](https://github.com/commenthol/md-fileserver) as one option that I am choosing to use for now.

```bash
# Install the package in your local development environment
$ npm install -g md-fileserver

# Start the server from project root
# Specifying the markdown folder you want server ('docs/`)
mdstart docs     

# This launches the browser to localhost:4000
# showing the directory structure
# You will need to manually click Markdown filenames
# to see it render them as HTML
# 🚨 | I have not validated if the HTML generated
#      here is exactly the same as GitHub Pages 
#      but it provides one equivalent for testing
```

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
