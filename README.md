---
title: React Launchpad
---

# React Launchpad

React Launchpad is a modern React project starter setup aimed at simplifying the initial setup for React projects. It provides a streamlined starting point with pre-configured tools and dependencies to kickstart your development process.

## Table of Contents

- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Development Tools](#development-tools)
- [Testing](#testing)
- [Deployment](#deployment)
- [Scripts Overview](#scripts-overview)

## Getting Started

To get started with this app, follow these steps:

1. Fork & clone the repository:

    ```bash
    git clone https://github.com/<your_username>/launchpad.git
    ```

2. Install the dependencies:

    ```bash
    pnpm install
    ```

3. Run the development server:

    ```bash
    pnpm dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

Feel free to remove what is unused for you and add a new package of your choice. I tried my best to pick the latest and amazing technology currently existing in the React ecosystem.

- **React** - v18.2.0
- **React Router Dom** - v6.22.3
- **React Hook Form** - v7.51.2
- **Zustand** - v4.5.2
- **React Query** - v5.28.4
- **Axios** - v1.6.8
- **Tailwind CSS** - v3.4.1
- **Zod** - v3.22.4
- **Date-fns** - v3.6.0
- **Lucide React** - v0.358.0

## Development Tools

- **Vite** - v5.1.6
- **TypeScript** - v5.2.2
- **ESLint** - v8.57.0
- **Prettier** - v3.2.5
- **Husky** - v9.0.11
- **Storybook** - v8.0.5
- **Chromatic Storybook** - v1.2.25
- **MSW** - v2.1.6
- **Vitest** - v1.5.0

## Testing

### Testing app

Mocking test and fakerjs and msw.

Run a test like a pro with and vitest ui and react testing library.

![Testing Screenshot](https://github.com/alireza-akbarzadeh/react-launchpad/assets/82927248/706d8d64-864a-4fda-b84b-2d61608acf54)

Integrate type checking and eslint and commitlint and husky for caching errors in compile time.

## 🚀 Deployment

Easily deploy your React.js app with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=github&utm_campaign=next-enterprise) by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise)

## 📃 Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server with colorized output
- `build`: Builds the app for production
- `start`: Starts the production server
- `format`: Formats the code with Prettier
- `lint`: Lints the code using ESLint
- `lint:fix`: Automatically fixes linting errors
- `prettier`: Checks the code for proper formatting
- `prettier:fix`: Automatically fixes formatting issues
- `story`: Starts the Storybook server
- `build-story`: Builds the Storybook for deployment
- `test`: Runs unit and integration tests
- `test:ui`: Runs end-to-end tests in headless mode
- `coverage`: checking for how many of your code is tested

