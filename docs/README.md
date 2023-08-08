# Playwright For Accessibility Testing

##  👩🏽‍💻 | Import Visual Studio Code Profile

Use [Profiles in Visual Studio Code](https://code.visualstudio.com/docs/editor/profiles) to establish a consistent editor environment wherever you use VS Code (desktop, browser, codespaces). This is my [Playwright-FYI](./static/Playwright-FYI.code-profile) profile, setup for use in this demo. You can [import this](https://code.visualstudio.com/docs/editor/profiles#_import) to use it as your default profile when following this tutorial.

<br/>

## 🧪 | Test [jQuery UI v1.13.2](./jQuery-UI/) Demos

The jQuery UI site [provides a download](https://jqueryui.com/download/) of their comprehensive list of  [demos](https://jqueryui.com/demos/) we can use for testing. In Oct 2021 maintainers [announced jQuery UI 1.13](https://blog.jqueryui.com/2021/10/jquery-maintainers-update-and-transition-jquery-ui-as-part-of-overall-modernization-efforts/) will be the final release as they transition to more modern alternatives - however they note that **73% of the top 10M popular sites still run jQuery**, making this a good target for compliance.


The [ijQuery demos page](./jQuery-UI/) has **28 components** with addressable ids for individual testing:

1-[accordion](./jQuery-UI#accordion) ·  2-[autocomplete](./jQuery-UI#autocomplete) ·  3-[button](./jQuery-UI#button) ·  4-[button-icon](./jQuery-UI#button-icon) ·  5-[radioset](./jQuery-UI#radioset) ·  6-[radio1](./jQuery-UI#radio1) ·  7-[radio2](./jQuery-UI#radio2) ·  8-[radio3](./jQuery-UI#radio3) ·  9-[controlgroup](./jQuery-UI#controlgroup) ·  10-[car-type](./jQuery-UI#car-type) ·  11-[transmission-standard](./jQuery-UI#transmission-standard) ·  12-[transmission-automatic](./jQuery-UI#transmission-automatic) ·  13-[insurance](./jQuery-UI#insurance) ·  14-[horizontal-spinner](./jQuery-UI#horizontal-spinner) ·  15-[tabs](./jQuery-UI#tabs) ·  16-[tabs-1](./jQuery-UI#tabs-1) ·  17-[tabs-2](./jQuery-UI#tabs-2) ·  18-[tabs-3](./jQuery-UI#tabs-3) ·  19-[dialog-link](./jQuery-UI#dialog-link) ·  20-[dialog](./jQuery-UI#dialog) ·  21-[icons](./jQuery-UI#icons) ·  22-[slider](./jQuery-UI#slider) ·  23-[datepicker](./jQuery-UI#datepicker) ·  24-[progressbar](./jQuery-UI#progressbar) ·  25-[selectmenu](./jQuery-UI#selectmenu) ·  26-[spinner](./jQuery-UI#spinner) ·  27-[menu](./jQuery-UI#menu) ·  28-[tooltip](./jQuery-UI#tooltip)


<br/>

## 🧪 | Test [Bootstrap v5.3](./bootstrap/) Examples

While jQuery dominates the market with a ~75% share, [Bootstrap comes in second](https://w3techs.com/technologies/history_overview/javascript_library/all) with a consistent presence at ~21% - making it a good second target for accessibility compliance study.


The [Boostrap 5.3 examples](https://getbootstrap.com/docs/5.3/examples/) page provides the following **41** component-specific demo pages we can test.


1-[album-rtl](./bootstrap/album-rtl/) ·  2-[album](./bootstrap/album/) ·  3-[badges](./bootstrap/badges/) ·  4-[blog-rtl](./bootstrap/blog-rtl/) ·  5-[blog](./bootstrap/blog/) ·  6-[breadcrumbs](./bootstrap/breadcrumbs/) ·  7-[buttons](./bootstrap/buttons/) ·  8-[carousel-rtl](./bootstrap/carousel-rtl/) ·  9-[carousel](./bootstrap/carousel/) ·  10-[cheatsheet-rtl](./bootstrap/cheatsheet-rtl/) ·  11-[cheatsheet](./bootstrap/cheatsheet/) ·  12-[checkout-rtl](./bootstrap/checkout-rtl/) ·  13-[checkout](./bootstrap/checkout/) ·  14-[cover](./bootstrap/cover/) ·  15-[dashboard-rtl](./bootstrap/dashboard-rtl/) ·  16-[dashboard](./bootstrap/dashboard/) ·  17-[dropdowns](./bootstrap/dropdowns/) ·  18-[features](./bootstrap/features/) ·  19-[footers](./bootstrap/footers/) ·  20-[grid](./bootstrap/grid/) ·  21-[headers](./bootstrap/headers/) ·  22-[heroes](./bootstrap/heroes/) ·  23-[jumbotron](./bootstrap/jumbotron/) ·  24-[jumbotrons](./bootstrap/jumbotrons/) ·  25-[list-groups](./bootstrap/list-groups/) ·  26-[masonry](./bootstrap/masonry/) ·  27-[modals](./bootstrap/modals/) ·  28-[navbar-bottom](./bootstrap/navbar-bottom/) ·  29-[navbar-fixed](./bootstrap/navbar-fixed/) ·  30-[navbar-static](./bootstrap/navbar-static/) ·  31-[navbars-offcanvas](./bootstrap/navbars-offcanvas/) ·  32-[navbars](./bootstrap/navbars/) ·  33-[offcanvas-navbar](./bootstrap/offcanvas-navbar/) ·  34-[offcanvas](./bootstrap/offcanvas/) ·  35-[pricing](./bootstrap/pricing/) ·  36-[product](./bootstrap/product/) ·  37-[sidebars](./bootstrap/sidebars/) ·  38-[sign-in](./bootstrap/sign-in/) ·  39-[starter-template](./bootstrap/starter-template/) ·  40-[sticky-footer-navbar](./bootstrap/sticky-footer-navbar/) ·  41-[sticky-footer](./bootstrap/sticky-footer/)


<br/>

##  🧪 | Test [Markdown](.) Documentation

GitHub converts Markdown documents into static HTML when deploying to GitHub pages. To test Markdown-driven static sites, we'll use the `steps` folder - which happens to contain the steps for this demo/workshop.

**ABOUT** 👉🏽 |
1.1-[Project Motivation](./steps/01-about/1-motivation) ·  1.2 [Website Technologies](./steps/01-about/2-technologies) ·  1.3 [Web Accessibility Content Guidelines](./steps/01-about/3-wcag) ·  1.4 [aXe Testing Solution](.//steps/01-about/4-axe) ·  1.5 [Playwright Testing Framework](./steps/01-about/5-playwright) ·  1.6 [Assesment: Under the Hood](./steps/01-about/6-assessment) ·  1.7 [Workflow: End-to-End Experience](./steps/01-about/7-workflow)

**SETUP** 👉🏽 |
2.1 [Environment](./steps/02-setup/01-environment)
