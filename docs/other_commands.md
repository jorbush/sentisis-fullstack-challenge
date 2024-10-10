# Other Commands

## MongoDB

### Start MongoDB

Runnig MongoDB locally ([Community Edition](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#std-label-install-mdb-community-macos)):

```bash
brew services start mongodb-community@8.0
```

### Stop MongoDB

```bash
brew services stop mongodb-community@8.0
```

## Prisma

If is the first time you are running the project, you need to run the following commands:

### Generate Prisma Client

```bash
npx prisma generate
```

### Migrate Database

```bash
npx prisma db push
```
