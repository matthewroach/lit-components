# Lit Components

A collection of Web Components

## Installing

As the package is published to the GitHub packages it requires an `.npmrc` file configured to the GitHub registry for the scope `@matthewroach` and a personal GitHub access code

```
# .npmrc
@matthewroach:registry=https://npm.pkg.github.com/

//npm.pkg.github.com/:_authToken=${AUTH_TOKEN}

```

Install the package

```
npm i @matthewroach/lit-components --save-dev
```

## Versioning

Version is handling with `npm` and uses [semver](https://semver.org)

Use the correct `npm run version:{type}` command to bump the version

- `major` - Used for created a breaking change release - 1.0.0 -> 2.0.0
- `minor` - Increase the minor version - 1.1.0 -> 1.2.0
- `patch` - Small backwards compatible changes/bug fixes - 1.0.1 -> 1.0.2
- `prerelease` - Allows the release of a future version - 1.0.1 -> 1.0.1-prerelease.0

## Publishing

Publishing happens automatically with GitHub actions when a new tag is create

### Manual Publishing

Package is published to GitHub packages. This requires `npm` configuration updates and an `authToken`.

Publish happens with `npm publish` command.

Before publishing a new version needs to be created. Not creating a new version with the `npm run version:{type}` script will result in an error - `409 Conflict`

```
# .npmrc
@matthewroach:registry=https://npm.pkg.github.com/

//npm.pkg.github.com/:_authToken=${AUTH_TOKEN}
```
