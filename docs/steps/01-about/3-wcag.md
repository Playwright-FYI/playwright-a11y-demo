## 1.3. Web Accessibility Initiative (WAI)

To understand web accessibility compliance, we need to learn about the current **standards, guidelines, and tooling** for acessibility compliance!

### 1.3.1 Web Accesibility Standards

Web Accessibility is governed by the [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) which defines a core specification (ARIA) and publishes three guidelines (ATAG, WCAG, UAAG) to assist enforcement.
- [WAI-ARIA](https://www.w3.org/WAI/intro/aria.php) 👉🏽 Accessible Rich Internet Applications **specification**.
- [ATAG](https://www.w3.org/WAI/standards-guidelines/atag/) 👉🏽 Authoring Tool Accessibility **Guidelines** for _content creation software_ 
- [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) 👉🏽 Web Content Accessibility **Guidelines** for _content itself_ 
- [UAAG](https://www.w3.org/WAI/standards-guidelines/uaag/) 👉🏽 User Agent Accessibility **Guidelines** - for _content access software_

We focus primarily on WCAG since websites are about the content.


### 1.3.1 Web Content Accessibility Guidelines (WCAG)

WCAG consists of WCAG 2.0, WCAG 2.1 and WCAG 2.2 - each version iteratively adds to the previous set of guidelines. To manage the constant evolution of technologies and a11y needs, WCAG uses a  _[layers of guidance](https://www.w3.org/WAI/WCAG21/Understanding/intro#layers-of-guidance)_ approach - going from _broad principles_ to _fine techniques_.

 
 1. `4` Core **Principles** 
    - Perceivable, 
    - Operable, 
    - Understandable, 
    - Robust (POUR) 
    - which map to: 👇🏽
 2. `13` _non-testable_ **Guidelines** (see figure)
    - these are _not_ directly testable 
    - so they in turn map to 👇🏽
 3. `58` _testable_ **Success Criteria**
    - these _are_ testable
    - with 3 conformance levels (A=lowest, AA, AAA=highest)
    - where criteria are associated with: 👇🏽 
 4. **Sufficent & Advisory Techniques** 
    - these define options for evaluating criteria
    - _Sufficient_ techniques = _enough_ to meet criteria 
    - _Advisory_ techniques = extras to go beyond 'sufficient'

![WCAG Guidelines](../..//static/004-wcag-layers.png)

This figure [from Deque Systems](https://www.deque.com/accessibility-compliance/) illustrates the relationship between the 4 principles, the 13 guidelines and the 3 conformance levels.

_Now that we understand the standards and guidelines that **define** accessibility compliance, we need tools that can help us **evaluate** it.

---

[👉🏽 [Next: aXe Accessibility Solution](./4-axe.md)]