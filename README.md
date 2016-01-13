# YNU_SITE API

Provide RESTFul API of YNU SITE (**for inner usage purpose only**)

Project structure generated via [express-generator](https://www.npmjs.com/package/express-generator)

## Install some useful tools
```bash
npm install -g mysql
npm install -g sequelize-auto
npm install -g sequelize-cli
```
### [sequelize-auto](https://github.com/sequelize/sequelize-auto)

Automatically generate models for [SequelizeJS](https://github.com/sequelize/sequelize) via the command line.

```bash
# simple usage example
cd /path/to/project/root
sequelize-auto -o "./models" -d database -h mysql_host -u username -x password -e mysql
```

### [sequelize-cli](https://github.com/sequelize/cli)

The Sequelize Command Line Interface (CLI)

```bash
$ sequelize [--HARMONY-FLAGS]
Sequelize [Node: 2.5.0, CLI: 1.8.3, ORM: 2.1.3]

Usage
  sequelize [task]

Available tasks
  db:migrate             Run pending migrations.
  db:migrate:old_schema  Update legacy migration table
  db:migrate:undo        Revert the last migration run.
  db:migrate:undo:all    Revert all migrations ran.
  db:seed                Run seeders.
  db:seed:undo           Deletes data from the database.
  db:seed:undo:all       Deletes data from the database.
  help                   Display this help text. Aliases: h
  init                   Initializes the project.
  init:config            Initializes the configuration.
  init:migrations        Initializes the migrations.
  init:models            Initializes the models.
  init:seeders           Initializes the seeders.
  migration:create       Generates a new migration file. Aliases: migration:generate
  model:create           Generates a model and its migration. Aliases: model:generate
  seed:create            Generates a new seed file. Aliases: seed:generate
  version                Prints the version number. Aliases: v

Available manuals
  help:db:migrate             The documentation for "sequelize db:migrate".
  help:db:migrate:old_schema  The documentation for "sequelize db:migrate:old_schema".
  help:db:migrate:undo        The documentation for "sequelize db:migrate:undo".
  help:db:migrate:undo:all    The documentation for "sequelize db:migrate:undo:all".
  help:db:seed                The documentation for "sequelize db:seed".
  help:db:seed:undo           The documentation for "sequelize db:seed:undo".
  help:db:seed:undo:all       The documentation for "sequelize db:seed:undo:all".
  help:init                   The documentation for "sequelize init".
  help:init:config            The documentation for "sequelize init:config".
  help:init:migrations        The documentation for "sequelize init:migrations".
  help:init:models            The documentation for "sequelize init:models".
  help:init:seeders           The documentation for "sequelize init:seeders".
  help:migration:create       The documentation for "sequelize migration:create".
  help:model:create           The documentation for "sequelize model:create".
  help:seed:create            The documentation for "sequelize seed:create".
  help:version                The documentation for "sequelize version".
```

## How to start

```bash
# make some configuration modification on `configuration/config.js` according to your environment
vi configuration/config.js
# install node deps
npm install
# start serve
npm start
```