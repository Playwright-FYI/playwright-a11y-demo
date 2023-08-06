## 1.6 How Assessment Works


---

[👉🏽 [Next: E2E Developer Workflow ](./7-workflow.md)]

<!--

### 1.4.2 axe-core Rules

The aXe-core engine has a set of predefined [Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/developer-guide.md#rules)
 - Rules are defined as JSON Objects ([see format](https://github.com/dequelabs/axe-core/blob/develop/lib/core/base/rule.js#L30))
 - Rule has a unique `id` (user-friendly label)
 - Rule has `impact` value { minor, moderate, serious, or critical }
 - Rules grouped by WCAG conformance (A, AA, AAA)
 - Bonus non-WCAG Rules - for best-practices
 - Bonus non-WCAG Rules - that are experimental
 - See the [full list of Rule objects](https://github.com/dequelabs/axe-core/tree/develop/lib/rules) (currently 99)

Rules Objects define associated Checks in 3 categories:
 - **any** - Any one of these returns true => Rule `passes`
 - **all** - All of these return true => Rule `passes`
 - **none** - None of these return true => Rule `passes`

Rules can have **optional** `selector` to identify elements it applies to.
 - **no elements found** => Rule is `inapplicable`.

Rule "Checks" can return true, false or undefined. If the Rule did _not_ satisfy the requirement for `passes`:
 - **and had undefined checks** => Rule is `incomplete`
 - **and had failed checks** => Rule has `violations`

The final result is that **for each Rule** the test runner 
 1. keeps 4 outcome `{ }` objects - pass, violation, inapplicable, incomplete
 2. has a `nodes[]` array in each to represent matching elaments
 3. assesses `Checks` on matched elements to get Node outcome `{}`
 4. adds Rule outcome to `nodes[]` for relevant outcome in (2)
 
Once Rule assessment is complete for _all matched nodes_ in page, the four outcome objects in (1) are added into a global `accessibility-results.json` report under the relevant top-level `passes[],violations[],incomplete[],inapplicable[]` arrays.


### 1.4.3 axe-core Checks

The Rules are associated with a set of predefined [Checks](https://github.com/dequelabs/axe-core/blob/develop/doc/developer-guide.md#checks)

- Checks are also defined as JSON Objects ([see format](https://github.com/dequelabs/axe-core/blob/develop/lib/core/base/check.js))
- Every Check object has a unique `id` and `evaluate` function
- Every Check object 
- See the [full list of Check objects](https://github.com/dequelabs/axe-core/tree/develop/lib/checks) (organized in 16 categories)


### 1.4.4 Assessment Example

Here is an example of a Rule with id `area-alt` that checks if `<area>` elements in image maps have _alternate text_ defined.

```json
{
  "id": "area-alt",
  "selector": "map area[href]",
  "excludeHidden": false,
  "tags": [
    "cat.text-alternatives",
    "wcag2a",
    "wcag244",
    "wcag412",
    "section508",
    "section508.22.a",
    "ACT",
    "TTv5",
    "TT6.a"
  ],
  "actIds": ["c487ae"],
  "metadata": {
    "description": "Ensures <area> elements of image maps have alternate text",
    "help": "Active <area> elements must have alternate text"
  },
  "all": [],
  "any": ["non-empty-alt", "aria-label", "aria-labelledby", "non-empty-title"],
  "none": []
}
```

### 1.4.4 axe-core Checks

To see this in action, let's analyze the Rule object above:
 - 
- Every Check has a user-friendly `id` - ex: `aria-label`
- That id has a related JSON object - see: [aria-label.json](https://github.com/dequelabs/axe-core/blob/develop/lib/checks/shared/aria-label.json)
- That JSON has an `evaluate` function - see: `aria-label-evaluate` 
- That function is implemented in Check test action - see: [aria-label.js](https://github.com/dequelabs/axe-core/blob/develop/test/checks/shared/aria-label.js)

```json
// aria-label.json
{
  "id": "aria-label",
  "evaluate": "aria-label-evaluate",
  "metadata": {
    "impact": "serious",
    "messages": {
      "pass": "aria-label attribute exists and is not empty",
      "fail": "aria-label attribute does not exist or is empty"
    }
  }
}
```



The axe test runner validates the rule using associated `Checks` - which are _test actions_ executed on the selected page element, returning {true, false or undefined} as the outcome. 

The Rule processes all its check outcomes and returns a final **Result** as {`pass`, `fail`, `incomplete`or `inapplicable`}. The axe runner then returns the array of Result objects in the test report.

_Note:_ There can be multiple elements in a page that match the _Check_ requirements for a given rule - so multiple _Result_ objects can be generated (one per matched element for a Check) for each Rule. The test report collects Result objects into 4 arrays, mapping to the {`pass`, `fail`, `incomplete`or `inapplicable`} outcomes.

-->