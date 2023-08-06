# About This Project

This repository contains the code, content and documentation for an exploration of _Accessibility Testing With Playwright_.

Read on to learn:
 - What motivated this project?
 - What does accessibility testing mean?
 - Why are we looking at jQuery & Bootstrap?
 - Why are we using Playwright?
 - What does an e2e workflow look like?

 Let's start by first understanding what Web Accessibility means and why it is important.

## 1.1 Background

According to the [W3C Web Accessibility Initiative](https://www.w3.org/WAI/fundamentals/accessibility-intro/):

 > Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people cal `perceive, understand, navigate and interact with` the Web, and can `contribute to` the Web.

Here, disabilities can refer to _auditory, cognitive, neurological, physical, speech, or visual_ impairments. And while the initiative was defined for people with disabilities, the [curb cut effect](https://uxdesign.cc/the-curb-cut-effect-universal-design-b4e3d7da73f5) shows that it leads to experiences that are _better for everyone_ as a result.

As modern web application developers, we should keep web accessibility guidelines in mind when designing and building user experiences so they are truly accessible to everyone.

## 1.2 Motivation

The problem needs to be addressed in two directions:
 - how do we ensure that _new_ websites are born accessibility compliant?
 - how do we ensure that _existing_ website are remediated for compliance?

To get a sense of the scope of impact, let's look at data on web accessibility compliance for popular sites deployed today.

[WebAIM](https://webaim.org/) - is an initiative that shares developer resources, training and guidance with _web accessibility in mind_. Their annual [Web AIM Million](https://webaim.org/projects/million/) report is a signature initiative that tracks the accessibility compliance of the top 1M sites every year, using the WAVE accessibilty engine. 

Here are some insights from the 2023 report.

 - The 1M pages had 49.9M distinct a11y errors 👉🏽 that's ~50 errors/page
 - The 1M pages have **1B page elements** 👉🏽 page complexity is increasing!
 - 96.2% of pages had WCAG 2 failures 👉🏽 true for 5 years (see figure)

![WCAG Conformance Report](../../static/002-wcag-conformance.png)

In other words, _96% of the top 1M pages are not friendly to people with disabilities_. 


## 1.3 Objectives

The report also shares the graphic below indicating that  **96% of the detected errors are caused by 6 main types of failures**. This gives us a more manageable starting point to explore accessibility compliance.

Specifically, _if we can remediate these 6 types of errors first_, we can have a non-proprtionaly large impact on accessibility compliance for the web at scale.

![WCAG Conformance Report](../../static/003-webaim-chart.png)

**Our objectives:**
 - Understand what technologies are used in building websites
 - Identifying where these 6 errors originate most (site/tech)
 - Create remediation tools to help address them
    - proactively, when authoring (new) sites.
    - reactively, when testing (existing) sites.

We'll tackle the first objective next.

---

[👉🏽 [Next: Website Technologies](./2-technologies.md)]