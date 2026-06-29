# Portfolio App

A dynamic React application for showcasing a personal portfolio.

## Data Source
- Portfolio data is fetched from the [static-data](https://github.com/kaletushar222/static-data) GitHub repository.
- The app uses the raw JSON data as a database.
- **Note:** Raw data may take up to 5 minutes to refresh after a commit to the static-data repo.

## Features
- Dynamic sections: Home, About, Skills, Resume, Gallery, Contact
- Data-driven UI powered by remote JSON
- Modern design and responsive layout

## Usage
1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the app: `npm start`

## Customization
- Update your portfolio data in the static-data repo and commit changes.
- Wait a 5 - 10 minutes for the raw data to refresh and appear in your app.

## Versioning
- The app uses **automated version bumping** via the `bump-version.yml` GitHub workflow.
- When a pull request is created for the `main` branch, the workflow automatically increments the version in `src/config.json`.
- The version bump is committed back to the PR branch.
- **Auto-deployment** is triggered automatically when changes are merged to the `main` branch.
- To merge code to `main` for auto-deployment: Create a pull request, let the workflow bump the version, then merge to `main`.

---

Made with ❤️ by Tushar Kale