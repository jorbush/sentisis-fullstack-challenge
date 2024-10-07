# Sentisis FullStack Challenge

A technical challenge for a FullStack position at Sentisis

The challenge is defined [here](./docs/challenge.md) and the decisions made during the development are [here](./docs/decisions.md).

## How to run the project locally

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## How to run the project in production

```bash
npm run build
npm run start
```

## How to run the tests

_TODO_

## Linting & Formatting

This project uses [Next Lint](https://nextjs.org/docs/app/building-your-application/configuring/eslint) and [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting:
```bash
npm run lint # Next Lint
npx run oxlint # Oxlint
```

And [Prettier](https://prettier.io/) for code formatting:
```bash
npm run format
npm run check-format # check for formatting issues
```
