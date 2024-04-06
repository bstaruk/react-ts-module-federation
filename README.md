# React & TypeScript Module Federation Demo

This is a little sandbox that I built to learn about and play around with Webpack Module Federation, using React and TypeScript of course.

## Overview

This project consists of 2 micro front-ends, and 2 proof of concept apps which utilize the micro front-ends in different ways:

* `micro1` contains two components: `CardAlpha` and `ContactFormAlpha`
* `micro2` contains one component: `ModalAlpha`
* `app1` shows a grid of contact info cards (`CardAlpha`), which trigger modals (`ModalAlpha`) containing a dummy contact form (`ContactFormAlpha`).
* `app2` shows a list of news article cards (`CardAlpha`), which trigger modals (`ModalAlpha`) containing more details about the article.

## Running Locally

This project was only setup to run locally for now, but it could be deployed to a Jamstack environment by swapping out the `remotes` paths in each app's Webpack config.

To run everything locally:

1. Ensure you are using the right version of Node with `nvm use` in the project root.
2. Start the `micro1` dev server with: `cd micro1 && npm install && npm run start`
  * Runs at [http://localhost:3030](http://localhost:3030)
3. Start the `micro2` dev server with: `cd micro2 && npm install && npm run start`
  * Runs at [http://localhost:3031](http://localhost:3031)
4. (Optional) Start the `app1` dev server with `cd app1 && npm install && npm run start`
  * Runs at [http://localhost:3000](http://localhost:3000)
5. (Optional) Start the `app2` dev server with `cd app2 && npm install && npm run start`
  * Runs at [http://localhost:3001](http://localhost:3001)
