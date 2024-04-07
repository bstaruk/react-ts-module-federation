# React & TypeScript Micro Front-Ends via Webpack Module Federation

This is a little proof of concept that I built to learn more about micro front-ends and Webpack [Module Federation](https://module-federation.io), using React & TypeScript.

## Overview

This project consists of 2 micro front-ends, and 2 apps which utilize components from the micro front-ends in different ways:

* **_micro1_** exposes 2 components: `CardAlpha` and `ContactFormAlpha`
* **_micro2_** exposes 1 component: `ModalAlpha`
* **_app1_** shows a grid of contact info cards (`micro1/CardAlpha`), which trigger modals (`micro2/ModalAlpha`) containing a dummy contact form (`micro1/ContactFormAlpha`).
* **_app2_** shows a list of article cards (`micro1/CardAlpha`), which trigger modals (`micro2/ModalAlpha`) containing more details about the article.

## Running Locally

This project uses [NPM workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) so all commands can be run at the root of the main project without needing to traverse the subfolders:

1. Ensure you are using the right version of Node (v20) with `nvm use`
2. Install dependencies with `npm install --workspaces`

### Starting Everything At Once

After installing dependencies, you can start the entire demo with one command using [concurrently](https://github.com/open-cli-tools/concurrently):

1. `npm run start-all`

### Starting Each Server Manually

If you prefer starting each dev server individually:

1. Start the **_micro1_** dev server with: `npm run start-micro1`
    * Runs at [http://localhost:3030](http://localhost:3030)
2. Start the **_micro2_** dev server with: `npm run start-micro2`
    * Runs at [http://localhost:3031](http://localhost:3031)
3. (Optional) Start the **_app1_** dev server with `npm run start-app1`
    * Runs at [http://localhost:3000](http://localhost:3000)
4. (Optional) Start the **_app2_** dev server with `npm run start-app2`
    * Runs at [http://localhost:3001](http://localhost:3001)
