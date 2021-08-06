<div align="center">
  <img 
  src="./images/react-logo.png"
  alt="react logo image" 
  style="width: 450px; height: auto; margin: 0;"
  >
  <h1>React Testing Workshops</h1>

</div>

**Table of Contents**

- [Introduction](#introduction)
  - [Folder Architecture](#folder-architecture)
  - [Getting started](#getting-started)
- [About testing](#about-testing)
- [Unit Tests](#unit-tests)
  - [Jest, "the test runner"](#jest-the-test-runner)
  - [Enzyme, from Airbnb](#enzyme-from-airbnb)
  - [React Testing Library by KCD](#react-testing-library-by-kcd)
    - [What is not `react-testing-library`:](#what-is-not-react-testing-library)
- [Links](#links)
  - [Jest](#jest)
  - [React testing library](#react-testing-library)
  - [React testing library with Typescript](#react-testing-library-with-typescript)
  - [Testing library](#testing-library)
  - [Kent C.Dodds](#kent-cdodds)
  - [Jest & Enzyme (redux)](#jest--enzyme-redux)
  - [Create React App](#create-react-app)
  - [Real World](#real-world)
  - [Blog articles](#blog-articles)
  - [Advanced testing packages](#advanced-testing-packages)
  - [Code coverage](#code-coverage)

<br>

## Introduction

**The react-testing repository** is a frontend workshop about how to test with the Reactjs.org library.

It turns around global topics about testing application but using the testing libraries as Jest, Enzyme, React-testing-library is the main focus.

### Folder Architecture

```
react-testing
|--- apps
|  |-- click-counter
|  |-- jotto-app
|  |-- jotto-react-content
|  |-- jotto-redux
|  |-- color-button
|
|-- images
|-- markdown
|
|-- random-word-server-api
|
|__ setups
|  ├── cra-setup
|  ├── standard-setup
|
|__ README.md
```

<br>

### Getting started

Fork the repository using [this](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide, then clone it locally.

```shell
git clone https://github.com/CodeIsaMystic/react-testing.git
cd react-testing
npm install
```

You can now run the Express Server on your `localhost`.

```shell
npm start
```

<br>
<br>

---

## About testing

Writing tests should not be complicated so, ***"Always Keep Things Simple!!"***

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

<div>
  <img src="https://jestjs.io/fr/img/opengraph.png"
    style="max-width: 850px; height: auto; width: 100%;">
</div>

*Jest is a pretty big package, Pure javascript.*
*There's no DOM API for example, that's why, in some cases, we need to include jsdom env in it.*

<br>

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

It works with projects using: **Babel, TypeScript, Node, React, Angular, Vue and more**!

*Jest is well-documented, requires little configuration and can be extended to match your requirements.*

<br>
<br>
<br>
<br>

### Enzyme, from Airbnb

<div>
  <img src="https://miro.medium.com/max/742/1*QANxvFyNL5Jvb7U5Ny0iFA.png"
    style="max-width: 850px; height: auto; width: 100%;">
</div>

<br>
<br>
<br>
<br>

---

### React Testing Library by KCD

The `React Testing Library` is a very light-weight solution for testing React components. It provides light utility functions on top of `react-dom` and `react-dom/test-utils`, in a way that encourages better testing practices.

<div>
  <img src="https://www.ibrahima-ndaw.com/static/4996d6d31bd748e276b9055ebfce4e42/f3583/cover.png"
    style="max-width: 850px; height: auto; width: 100%;">
</div>

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
<br>
<br>

---

## Links

---

### Jest

- [Jest getting started](https://jestjs.io/docs/en/getting-started)
- [Jest cheat sheet](https://github.com/sapegin/jest-cheat-sheet)
- [Jest #tobedisabled](https://github.com/testing-library/jest-dom/blob/main/README.md#tobedisabled)

---

### React testing library

- [The `react-testing-library` repository](https://github.com/testing-library/react-testing-library)
- [The `react-testing-library` documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [The `react-testing-library` cheat sheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [A `react-testing-library` tutorial](https://www.robinwieruch.de/react-testing-library)

### React testing library with Typescript
- [The `react-hooks-testing-library` repository](https://github.com/testing-library/react-hooks-testing-library)

### Testing library

- [The `Testing Library` main repository](https://github.com/testing-library)
- [The `Testing Library` main website](https://testing-library.com/)
- [The `Testing Library` website guidelines](https://testing-library.com/docs/guiding-principles/)

### Kent C.Dodds

- The Kent C.Dodds [website](https://kentcdodds.com/)
- The Kent C.Dodds [blog](https://kentcdodds.com/)
- The Kent C.Dodds [Medium](https://medium.com/@kentcdodds)

---

### Jest & Enzyme (redux)

[Snapshots](https://jestjs.io/docs/en/snapshot-testing) in Jest documentation.
[Empty Shallow Wrapper](https://backbencher.dev/blog/empty-shallowwrapper-snapshot-jest-enzyme) on snapshots tests using Jest with Enzyme.
[Conditional rendering of components](https://stackoverflow.com/questions/53360166/how-to-test-conditional-rendering-of-components-using-jest-and-enzyme/53370286#53370286) with Jest & Enzyme.

---

### Create React App

- [Create react app issue](https://github.com/facebook/create-react-app/issues/6888)

---

### Real World

- [Real World github repo](https://github.com/gothinkster/realworld)
- [Real World E2E tests](https://github.com/anishkny/realworld-e2e-test)

---

### Blog articles

- [Unit tests](https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009)
- [Javascripts tests](https://kentcdodds.com/blog/but-really-what-is-a-javascript-test)
- [Writing tests](https://kentcdodds.com/blog/write-tests)

---

### Advanced testing packages

- [nock](https://www.npmjs.com/package/nock)
- [supertest](https://www.npmjs.com/package/supertest)

---

### Code coverage

- [Show coverage with jest](https://joshtronic.com/2017/10/24/configuring-jest-to-show-code-coverage-for-all-of-your-files/)
- [Npm test "never exists"](https://stackoverflow.com/questions/55991641/npm-test-coverage-never-exits)
