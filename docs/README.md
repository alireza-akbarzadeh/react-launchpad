![Project Logo](https://github.com/alireza-akbarzadeh/react-launchpad/assets/82927248/1a5a95be-a826-4304-99ad-6ff9ec7a4de3)

[![Setup Automated](https://img.shields.io/badge/setup-automated-blue?logo=gitpod)](https://gitpod.io/from-referrer/)
[![Discord](https://img.shields.io/discord/692816967895220344?logo=discord&label=Discord&color=5865F2)](https://discord.gg/9VYcxguT)

<p align="center">
  <h1>React Launchpad open-source codebase</h1>
</p>

## Table of Contents

- [Getting Started](#getting-started)
- [Introduction](#introduction)
- [Development Tools](#development-tools)
- [Testing](#testing)
- [Deployment](#deployment)
- [Scripts Overview](#scripts-overview)
- [Roadmap](#roadmap)
  - [UI](#ui)
  - [Hooks and Utilities](#hooks-and-utilities)
  - [Code Quality](#code-quality)
  - [Testing app](#testing-app)
- [Contributing](#contributing)
- [Platform, Build, and Deployment Status](#platform-build-and-deployment-status)
- [License](#license)

## Introduction

React Launchpad is a modern React project starter setup aimed at simplifying the initial setup for React projects. It provides a streamlined starting point with pre-configured tools and dependencies to kickstart your development process.

## Getting Started

To get started with this app, follow these steps:

To get started with this app, follow these steps:

1. Fork & clone the repository:

   ```bash
   git clone https://github.com/<your_username>/react-launchpad.git
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:5173) with your browser to see the result.




> [!NOTE]  
> I use [Neode](https://github.com/adam-cowley/neode) for managing application data in this project. Ensure that


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




## Roadmap


- [ ] **Update documentation for installation & configuration**: This is currently a work in progress. Enhancing documentation ensures smoother onboarding for new contributors and users. Focus on clarity, completeness, and providing examples where necessary.\

- [ ] **Create a starter app  and  show how folder structure and explain how the project work**: This is currently a work in progress. 

- [] **Enhance Testing Coverage**: Consider expanding test coverage, especially for critical functionalities. Incorporate unit tests, integration tests, and end-to-end tests to ensure robustness and reliability.

- [] **Streamline Development Workflow**: Evaluate the existing development process and tooling. Identify areas where automation can be introduced to streamline repetitive tasks and improve developer productivity.

- [] **Address Technical Debt**: Take time to address any accumulated technical debt. Refactor code, resolve code smells, and optimize performance to maintain codebase health and sustainability.

- [] **Community Engagement**: Foster community engagement by encouraging contributions, providing clear contribution guidelines, and actively participating in relevant forums or communities related to your project.

- [] **Accessibility and Internationalization**: Assess the accessibility and internationalization aspects of your project. Ensure that the application is accessible to users with disabilities and supports multiple languages for a broader user base.

- [] **Performance Optimization**: Continuously monitor and optimize application performance. Implement techniques such as code splitting, lazy loading, and caching to enhance user experience and reduce load times.

By following this roadmap and implementing the suggested improvements, you can enhance the overall quality, maintainability, and user satisfaction of your project.




### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Shadcn/ui](https://ui.shadcn.com/) – Re-usable components built using Radix UI and Tailwind CSS
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) – Generate dynamic Open Graph images at the edge



### Hooks and Utilities

- `useIntersectionObserver` – React hook to observe when an element enters or leaves the viewport
- `useLocalStorage` – Persist data in the browser's local storage
- `useScroll` – React hook to observe scroll position ([example](https://github.com/mickasmt/precedent/blob/main/components/layout/navbar.tsx#L12))
- `nFormatter` – Format numbers with suffixes like `1.2k` or `1.2M`
- `capitalize` – Capitalize the first letter of a string
- `truncate` – Truncate a string to a specified length
- [`use-debounce`](https://www.npmjs.com/package/use-debounce) – Debounce a function call / state update


### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript



### Testing app

Mocking api for test perposes with fakerjs and msw.

Run a test like a pro with and vitest ui and react testing library.

![Testing Screenshot](https://github.com/alireza-akbarzadeh/react-launchpad/assets/82927248/706d8d64-864a-4fda-b84b-2d61608acf54)

Integrate type checking and eslint and commitlint and husky for caching errors in compile time.


## 🚀 Deployment

Easily deploy your React.js app with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=github&utm_campaign=next-enterprise) by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise)



### Contributing

The devtools community is possible thanks to thousands of kind volunteers like you. We welcome all contributions to the community and are excited to welcome you aboard.

> #### [Please follow these steps to contribute](https://react-launchpad.vercel.app/contribute).

Recent Contributions:

![Alt](https://repobeats.axiom.co/api/embed/1aef2bf4570efff1b67e8cd368d640180b823713.svg "Repobeats analytics image")

### Platform, Build, and Deployment Status

The general platform status for all our applications is available at [`https://react-launchpad.vercel.app/status`](https://react-launchpad.vercel.app). The build and deployment status for the code is available in [our DevOps Guide](https://react-launchpad.vercel.app/devops).

