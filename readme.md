# Introduction to GraphQL

This repository is a hosted solution introducing GraphQL. The `/server` folder contains a NodeJS/Express GraphQL & REST backend API. The `/client` folder is a React/Vite frontend that consumes this backend. The frontend connects to the REST API by default. To view the frontend connected to the GraphQL API, please switch to the `graphql` branch of this repository.

This repository does not make much sense without watching the presentation.

[View the presentation here](hygraph-portfolio-graphql.vercel.app/)

## How to setup repository locally

First, clone the repository using the following command:

```bash
git clone https://github.com/bahdcoder/intro-to-graphql.git
```

### Setup backend

1. Change directory to the `/server` folder.

```bash
cd ./server
```

2. Install dependencies and run development server

```bash
yarn
yarn dev
```

3. Build for production

```bash
yarn build
```

### Setup frontend

1. Change directory to the `/client` folder.

```bash
cd ./client
```

2. Install dependencies and run development server

```bash
yarn
yarn dev
```

3. Build for production

```bash
yarn build
```
