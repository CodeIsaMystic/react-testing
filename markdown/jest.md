<div align="center">

<img src="https://jestjs.io/fr/img/opengraph.png"
    style="max-width: 850px; height: auto; width: 100%;">

  <h1>Jest, the Test Runner...</h1>
  
  <a href="https://jestjs.io/docs/en/getting-started">Docs</a> | <a href="https://github.com/sapegin/jest-cheat-sheet">Cheatsheet</a>

</div>

- [Jest getting started](https://jestjs.io/docs/en/getting-started)
- [Jest cheat sheet](https://github.com/sapegin/jest-cheat-sheet)
- [Jest #tobedisabled](https://github.com/testing-library/jest-dom/blob/main/README.md#tobedisabled)

  <br>

_Jest is a pretty big package, Pure javascript._
_There's no DOM API for example, that's why, in some cases, we need to include jsdom env in it._

  <hr>
  <br>

**Table of Contents**

- [Introduction](#introduction)
  - [Scripts](#scripts)
  - [Some others libraries](#some-others-libraries)
- [Setups](#setups)
  - [Babel](#babel)
  - [Advanced settings](#advanced-settings)
  - [Packages](#packages)
- [Code coverage](#code-coverage)

<br>

## Introduction

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

_Jest is well-documented, requires little configuration and can be extended to match your requirements._

<br>
<br>
<br>
<br>

### Scripts

1. npm run test
   `"test": "jest"`
2. npm run test:watch
   `"test:watch": "jest --watch"`
3. npm run test:coverage
   `"test:coverage": "jest --coverage"` to access to istanbul, `coverage/lcov-report/index.html`

NOTE:
`"test": "react-scripts test --env=jsdom"` with Create React App

<br>
<br>
<br>
<br>

<hr />

### Some others libraries

**Different libraries with different syntax**

- Jest : `test.only()` or `test.skip()`
- Mocka : `it.only()` or `it.skip()`
- Jasmine : `iit()` or `xit()`

---

**NOTES:**

Summary of **Testing React Applications** workshop by Kent C. Dodds

- configuring Jest & Babel
- Jest JSDOM
- CSS Imports
- CSS Modules
- Handling Dynamic Imports
- Adding Code Coverage
- Jest Watch Mode
- Jest config review

---

## Setups

Luckily for us Create React App will configure all that stuff for us, but all apps does not use it and it could be great to learn how to configure `jest`...

---

### Babel

1. touch `.babelrc` on root directory
2. install: `yarn --dev babel-core babel-preset-env` with npm `npm install --save-dev ...`
3. loader: `babel-loader`
4. react: `babel-preset-react`

**Tip :** _To use pure javascript syntax on .babelrc configuration, set .babelrc to a .js file, set on `package.json`_

```json
"babel": { "presets": "./.babelrc.js },
```

---

### Advanced settings

- **_configuration on .babelrc.js:_**

```javascript
/* presets .babelrc.js on package.json */
const isTest = String(process.env.NODE_ENV) === "test"

module.exports = {
  /* Env plugin modules config
         Tree shaking */
  presets: [["env", { modules: isTest ? "commonjs" : false }], "react"],
  plugins: [
    "syntax-dynamic-import",
    "transform-class-properties",
    "transform-object-rest-spread",
    /* Dynamic imports config
        in plugins */
    isTest ? "dynamic-import-node" : null,
  ].filter(Boolean),
}
```

---

### Packages

- **on package.json :**

```json
  "babel-plugin-dynamic-import-node": "1.2.0",
  "babel-plugin-syntax-dynamic-import": "6.18.0",
  "babel-plugin-transform-class-properties": "6.24.1",
  "babel-plugin-transform-object-rest-spread": "6.26.0",
```

<br>
<br>
<br>
<br>

---

## Code coverage

_Istanbul shows a "recap" of our tests with a graphic interface, displayed on the browser._
**To access of the Istanbul report:**
Find the right directory then hit the command:

`start coverage/lcov-report/index.html`

**If it shows a display error on the browser, we have the possibility to hit :**

`CI=true npm run test` or `CI=true npm run test --coverage`

  <br>
  <br>
  <br>
  <br>
