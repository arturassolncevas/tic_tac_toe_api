# Tic-tac-toe API

API for [Tic-tac-toe client](https://github.com/arturassolncevas/tic_tac_toe_client)

## Prerequisites

- [Node.js](https://nodejs.org/en/) v12.16.2

- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)


## Installation

Install dependencies

```bash
yarn install
```
Migrate and seed database (sqlite3 file will be created in db/ folder)
```bash
export NODE_ENV=development && yarn migrate && yarn seed
```

## Usage
Development

```bash
yarn start:development
```
For production (migrate and seed database with NODE_ENV=production)
```bash
yarn build
yarn start:production
```

Application is listening on 127.0.0.1:3000
## Testing

Migrate and seed database with NODE_ENV=test
```bash
yarn test
```
## Docker
Build image (package install warnings will be resolved in next upcoming version)
```bash
docker build . -t <name>
```
Run container
```bash
docker run -p 3000:3000 -it <name>
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
