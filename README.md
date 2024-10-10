# Sentisis FullStack Challenge

A technical challenge for a FullStack position at Sentisis

The challenge is defined [here](./docs/challenge.md) and the decisions made during the development are [here](./docs/decisions.md).

## Requirements

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/) (locally or using a provider like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)). See [Other Commands](./docs/other_commands.md#prisma) for more information.

## Setup

You need to create a `.env` file in the root of the project with the following content:

```
DATABASE_URL="mongodb://localhost:27017/sentisis-challenge"
```

This is the url in the case you are using MongoDB locally. You can use MongoDB Atlas or any other MongoDB provider and change the url accordingly.

## Run the project locally

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Run the project in production mode

```bash
npx prisma generate
npm run build
npm run start
```

## Testing

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
