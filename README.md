# Turbo Demo

Demo project to learn how to setup and use turbo to speed up build and execution during development on a sample monorepo project.

## Pre-requirements

1. Nodejs installed locally (highly recommend using `nvm` for this).
1. `turbo` to be installed both globally and at the project root `package.json`, as suggested below in the official docs.
1. `pnpm` to be installed globally.

## What you need to know

In order to understand how everything works, please visit the following official documentation:

1. `turbo` installation [page](https://turborepo.dev/docs/getting-started/installation)
1. `turbo` existing repository [page](https://turborepo.dev/docs/getting-started/add-to-existing-repository)
1. `vite` guide [page](https://vite.dev/guide)
1. `express` getting started [page](https://expressjs.com/en/starter/installing.html)

## Getting started

No environment variables are needed.

You can build the `frontend` by doing either:

```bash
turbo build
# or
pnpm build
```

And you can run both the `frontend` and `backend` by doing either:

```bash
turbo dev
# or
pnpm dev
```