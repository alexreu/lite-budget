# LiteBudget

LiteBudget is a personal finance management application designed to help users track their expenses, manage budgets, and monitor their financial health. Built with modern web technologies, LiteBudget provides a simple yet powerful interface to handle daily financial tasks.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

## Features

- **Expense Tracking**: Manage and categorize your daily transactions.
- **Budget Management**: Create, view, and manage multiple budgets.
- **Account Management**: Track multiple bank accounts, including balances.
- **Visualization**: View monthly and yearly expense reports with interactive charts.
- **Authentication**: Secure user authentication with session management.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.

## Tech Stack

- **Frontend**:

  - [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
  - [TypeScript](https://www.typescriptlang.org/) - Type-safe programming language that builds on JavaScript.
  - [Ant Design](https://ant.design/) - A UI library for designing responsive, modern user interfaces.
  - [Chart.js](https://www.chartjs.org/) - For rendering dynamic charts and graphs.

- **Backend**:

  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - For backend logic and API endpoints.
  - [Prisma](https://www.prisma.io/) - ORM for interacting with the database.
  - [Supabase](https://supabase.io/) - Managed PostgreSQL database with real-time capabilities.

- **Authentication**:

  - [Auth.js (NextAuth.js)](https://authjs.dev/) - Secure user authentication with multiple providers.

- **Testing**:

  - [Jest](https://jestjs.io/) - JavaScript testing framework for unit tests.
  - [Playwright](https://playwright.dev/) - End-to-end testing framework for testing user interactions.

- **CI/CD**:
  - [Vercel](https://vercel.com/) - Deployment platform optimized for Next.js applications.

## Installation

1. **Clone the repository**:

   ```shell
   git clone https://github.com/yourusername/litebudget.git

   cd litebudget
   ```

2. **Install dependencies**:
   ```shell
    pnpm install
   ```
3. **Setup prisma**:
   Initialize Prisma and run migrations:

   ```shell
   pnpx prisma init
   pnpx prisma migrate dev
   pnpx prisma generate
   ```

## Environment Variables

Create a .env file in the root directory and configure the following environment variables:

```shell
DATABASE_URL=your_database_url
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

## Running the Application

**Development**

To start the application in development mode:

```shell
pnpm run dev
```

**Production**

To start the application in production mode:

```shell
pnpm run build
pnpm run start
```

The application will be available at `http://localhost:3000`.

## Testing

**Unit Tests**

```shell
pnpm run test
```

**E2E Tests**

```shell
pnpm run test:e2e
```

## License

This project is proprietary and not open source. All rights reserved.
