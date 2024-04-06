# React & TypeScript Module Federation Demo

This is a little sandbox that I built to learn about and play around with Webpack Module Federation, using React and TypeScript of course.

## Overview

This project consists of 2 micro front-ends, and 2 proof of concept apps which utilize the micro front-ends in different ways:

* _micro1_ contains two components: `CardAlpha` and `ContactFormAlpha`
* _micro2_ contains one component: `ModalAlpha`
* _app1_ shows a grid of contact info cards (`micro1/CardAlpha`), which trigger modals (`micro2/ModalAlpha`) containing a dummy contact form (`micro1/ContactFormAlpha`).
* _app2_ shows a list of article cards (`micro1/CardAlpha`), which trigger modals (`micro2/ModalAlpha`) containing more details about the article.

## Running Locally

This project uses [NPM Workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) so all commands can be run at the root of the main project without needing to traverse the subfolders:

1. Ensure you are using the right version of Node (v20) with `nvm use`.
2. Install dependencies with `npm install --workspaces`
2. Start the _micro1_ dev server with: `npm run start-micro1`
    * Runs at [http://localhost:3030](http://localhost:3030)
3. Start the _micro2_ dev server with: `npm run start-micro2`
    * Runs at [http://localhost:3031](http://localhost:3031)
4. (Optional) Start the _app1_ dev server with `npm run start-app1`
    * Runs at [http://localhost:3000](http://localhost:3000)
5. (Optional) Start the _app2_ dev server with `npm run start-app2`
    * Runs at [http://localhost:3001](http://localhost:3001)
