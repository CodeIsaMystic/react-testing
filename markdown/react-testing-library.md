<div align="center">
  <img 
  src="https://www.ibrahima-ndaw.com/static/4996d6d31bd748e276b9055ebfce4e42/f3583/cover.png"
  alt="react logo image"
  style="width: 850px; height: auto; margin: 0;"
  >
  <h1>React Testing Library by Kent C.Dodds</h1>
  <a href="https://testing-library.com/docs/react-testing-library/intro/">Docs</a> | 
  <a href="https://github.com/testing-library/react-testing-library">Repository</a>

</div>

<br>
<br>
<br>
<br>

**Table of Contents**

- [Introduction about testing](#introduction-about-testing)
- [Unit Tests](#unit-tests)
  - [Jest, "the test runner"](#jest-the-test-runner)
  - [React Testing Library by KCD](#react-testing-library-by-kcd)
    - [What is not `react-testing-library`:](#what-is-not-react-testing-library)
- [Links](#links)
  - [React testing library](#react-testing-library)
  - [React testing library with Typescript](#react-testing-library-with-typescript)
  - [Testing library](#testing-library)
  - [Kent C.Dodds](#kent-cdodds)
  - [Blog articles](#blog-articles)

<br>

## Introduction about testing

Writing tests should not be complicated so, **_"Always Keep Things Simple!!"_**

**It only need to code clean and organized as much as possible** and it should allowing for us to test in a simplifying way.

**Combining Unit Test with Snapshots on React should do the job!**

<br>

**So, in summary:**

- coding clean, pure functions
- organizing files architecture
- trying to be sure of what we render (shallowing, units tests)
- making some snapshots ( updating, checking... )
- using code coverage

<br>
<br>

## Unit Tests

### Jest, "the test runner"

**Jest is a delightful JavaScript Testing Framework** with a focus on simplicity.
This framework designed to ensure correctness of any JavaScript codebase.
It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

By ensuring your tests have unique global state, **Jest can reliably run tests in parallel**.
To make things quick, **Jest runs previously failed tests first** and re-organizes runs based on how long test files take.

**Generate code coverage by adding the flag --coverage**.
No additional setup needed. Jest can collect code coverage information from entire projects, including untested files.

Jest uses a custom resolver for imports in your tests, making it simple to mock any object outside of your test’s scope.
You can **use mocked imports with the rich Mock Functions API to spy on function calls** with readable test syntax.

<br>
<br>
<br>
<br>

---

### React Testing Library by KCD

The `React Testing Library` is a very light-weight solution for testing React components.
**It provides light utility functions on top of `react-dom` and `react-dom/test-utils`** , in a way that encourages better testing practices.

Its primary guiding principle is:

> The more your tests resemble the way your software is used, the more confidence they can give you.

<br>
<br>
<br>

**The React Testing Library created by Kent C. Dodds**, is a testing library known as "opinionated".
Made initially for Reactjs, this library gives **a specific approach** to make and think our tests.
It lets us **test our software the way the users use it**.
It provides a virtual DOM, and lets us find some elements...

<br>
<br>

The react testing library **provides a virtual DOM just for testing, and combine with Jest** to code some suites tests,
run them and determines whether it pass or fail.

<br>
<br>
<br>

#### What is not `react-testing-library`:

1. A test runner or framework
2. Specific to a testing framework (though we recommend Jest as our preference, the library works with any framework. See Using Without Jest)

> NOTE: This library is built on top of [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro/) which is where most of the logic behind the queries is.

<br>
<br>
<br>

---

## Links

---

### React testing library

- [The `react-testing-library` repository](https://github.com/testing-library/react-testing-library)
- [The `react-testing-library` documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [The `react-testing-library` cheat sheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [A `react-testing-library` tutorial](https://www.robinwieruch.de/react-testing-library)

### React testing library with Typescript

- [The `react-hooks-testing-library` repository](https://github.com/testing-library/react-hooks-testing-library)

---

### Testing library

- [The `Testing Library` main repository](https://github.com/testing-library)
- [The `Testing Library` main website](https://testing-library.com/)
- [The `Testing Library` website guidelines](https://testing-library.com/docs/guiding-principles/)

---

### Kent C.Dodds

- The Kent C.Dodds [website](https://kentcdodds.com/)
- The Kent C.Dodds [blog](https://kentcdodds.com/)
- The Kent C.Dodds [Medium](https://medium.com/@kentcdodds)

---

### Blog articles

- About [unit tests](https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009)
- About [javascripts tests](https://kentcdodds.com/blog/but-really-what-is-a-javascript-test)
- About [writing tests](https://kentcdodds.com/blog/write-tests)
