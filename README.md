# Workflow repo for the CA

##  Description

This is a project that allows users to browse venues and view venue details. This project also includes end-to-end tests using Playwright and unit testing using Vitest, and follows code quality standards using ESLint and Prettier.

## Prerequisites

- Node.js (v20+)
- npm

## Getting started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo-url.git
    ```
2. Navigate to the project directory:
    ```bash
    cd workflow-repo-ca
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Running the project

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.

### Running tests

- `npm run test`: Run the tests.

### Pre-commit hooks

This project uses pre-commit hooks to automatically lint and format your code before each commit.

Hooks are managed using Husky and Lint-staged.

To install the hooks after cloning:
```bash
npx husky install
```

### Environment Variables

- Create a .env file in the root directory:

```env
API_KEY=your-api-key-here
BASE_URL=https://example.com/api
```
Add .env to .gitignore.

## Technologies

- Javascript
- HTML
- CSS
- ESLint
- Prettier
- Playwright
- Vitest

## User stories

- User can register.
- User can login.
- User can view venue list.

## Author
👤Vicbro00