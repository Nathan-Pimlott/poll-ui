# Poll UI

A web app allowing users to vote on polls.

### Installation

- Install dependencies

```
npm i
```

### Run dev server

After following "Installation", run

```
npm run dev
```

You should see the app running at http://localhost:8080

### Run Cypress tests

- Follow "Run dev server"

- Open Cypress

```
npx cypress open
```

This should open a new window that allows you to run the tests.

### Run Cypress tests headless

- Follow "Run dev server"

- In another tab, run

```
npm run test:functional
```

You should see the output of the tests in terminal

### TODO

- Add more functional tests to test for errors etc.
- Clean up styling.
- Move away from material ui, maybe add tailwind?
