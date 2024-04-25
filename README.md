![OIG2 H7B7oyw XKsTlgK_HDjN (2)](https://github.com/alireza-akbarzadeh/react-launchpad/assets/82927248/1a5a95be-a826-4304-99ad-6ff9ec7a4de3)

[![Setup Automated](https://img.shields.io/badge/setup-automated-blue?logo=gitpod)](https://gitpod.io/from-referrer/)
[![Discord](https://img.shields.io/discord/692816967895220344?logo=discord&label=Discord&color=5865F2)](https://discord.gg/9VYcxguT)


<p align="center">
 # React Launchpad open-source codebase
</p>

## Table of Contents

- [Getting Started](#getting-started)
- [Introduction](#Introduction)
- [Development Tools](#development-tools)
- [Testing](#testing)
- [Deployment](#deployment)
- [Scripts Overview](#scripts-overview)


## Introduction

React Launchpad is a modern React project starter setup aimed at simplifying the initial setup for React projects. It provides a streamlined starting point with pre-configured tools and dependencies to kickstart your development process.



## Getting Started

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
> I use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) package for update this project.
>
> Use this command for update your project: `ncu -i --format group`

> [!WARNING]  
> You need update `.react-email` folder before use `pnpm run email`. Check the link [here](https://github.com/resend/react-email/issues/868#issuecomment-1828411325) if you have the error : `renderToReadableStream not found`
>
> After upgrade Auth.js to v5: `NEXTAUTH_URL` has removed from `.env.example`.

> [!CAUTION]
> Errors while the build if you update `remark-gfm` package.




## Roadmap

- [x] ~Fix Vaul drawer for mobile sign in~
- [x] ~Update OG image~
- [x] ~Add Server Actions on billing form (stripe)~
- [x] ~Add Server Actions on user name form~
- [x] ~Upgrade Auth.js to v5~
- [x] ~Change database platform for Neon (planetscale removes its free plan on April 2024)~
- [x] ~Switch subscription plan (enable on stripe dashboard)~
- [ ] Update documentation for installation & configuration (work on it)
- [ ] Upgrade eslint to v9



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



### Contributing

The devtools community is possible thanks to thousands of kind volunteers like you. We welcome all contributions to the community and are excited to welcome you aboard.

> #### [Please follow these steps to contribute](https://react-launchpad.vercel.app/contribute).

Recent Contributions:

![Alt](https://repobeats.axiom.co/api/embed/1aef2bf4570efff1b67e8cd368d640180b823713.svg "Repobeats analytics image")

### Platform, Build, and Deployment Status

The general platform status for all our applications is available at [`https://react-launchpad.vercel.app/status`](https://react-launchpad.vercel.app). The build and deployment status for the code is available in [our DevOps Guide](https://react-launchpad.vercel.app/devops).

### License

Copyright © 2024 https://react-launchpad.vercel.app/

The content of this repository is bound by the following licenses:

- The computer software is licensed under the [BSD-3-Clause](LICENSE.md) license.
- The learning resources in the [`/curriculum`](/curriculum) directory including their subdirectories thereon are copyright © 2024 freeCodeCamp.org
