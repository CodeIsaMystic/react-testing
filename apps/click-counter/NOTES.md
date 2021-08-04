# NOTES

[Enzyme repository](https://github.com/enzymejs/enzyme)
[Enzyme Documentation](https://enzymejs.github.io/enzyme/)

### Data-test Attribute

   => Check on Enzyme Docs =>API References/Shallow Rendering / .find(selector) => ShallowWrapper 
   => The Selectors...
   [Enzyme .find method](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/find.html)

### Strategies & Design Decisions

1. **DRY**
2. **Goals:** different for production than test code
3. **Fails:** fails tests tis easy to diagnose
4. **Maybe Repetitve**
   
   > ***==> A BALANCE BETWEEN DRY AND EASILY DIAGNOSED TESTS***

### One Expect per test

- test descriptions provide better documentation
- Failure Counts: a better indication of state of code
  - test stops at first failure
- Can use beforeEach() for common setup

### Counter Display Tests

-  Test **text displayed on page**
   - ***Not state value***
   - ***Testing behavior***, not implementation
  
- **The plan:** counter value will be in a <span>
   - ***data-test attr "count"***
   - Test that ***value is 0 initially***
   - ***Next Simulating Click***
 - Use Enzyme **.text() method**


   [Enzyme .text method](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/text.html)
   [Enzyme .simulate method](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html)

## DON T FIND TOO EARLY!!!

- Elements are unreliable after wrapper has changed

### Do This

```react js
const button = findByTestAttribute(wrapper, "increment-button")
button.simulate('click')

const count = findByTestAttribute(wrapper, "count").text()
expect(count).toBe("1")
```

### Not Do This

```react js
const button = findByTestAttribute(wrapper, "increment-button")
const count = findByTestAttribute(wrapper, "count").text()

button.simulate('click')
expect(count).toBe("1")
```


## Review of The Counter App

1. Setup with Enzyme  &  Used Enzyme shallow() to render a component
2. Tested using:
   1. find() that required DOM Elements were rendered
   2. text() to extract the text of an element
   3. simulate() to interact with rendered elements ('click')
3. Tested component for updates after interactions
4. Created some re-usable functions
   1. setup()
   2. findByTestAttr()