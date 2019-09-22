CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(255) NOT NULL,
    birthday VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS reports (
    week VARCHAR(10) NOT NULL,
    report TEXT NOT NULL,
    UNIQUE(week)
);

INSERT OR IGNORE INTO reports(week, report)
VALUES (1, '## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm install`

Installs a module that can be used in the app.

[https://github.com/pererselena/jsramverk] My github repo.');
