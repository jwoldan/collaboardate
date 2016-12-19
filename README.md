# README

Collaboardate is a web application inspired by Trello and built using Ruby on Rails and React/Redux. For additional details on the development of this project, see the [production README](docs/README.md) and [development README](docs/development-readme.md).

## Prerequisites
- Up to date versions of ruby and npm.  
- A local Postgresql installation- on a Mac, your easiest option is [Postgres.app](http://postgresapp.com/).

## Project Setup

1. `git clone https://github.com/jwoldan/collaboardate.git`
2. `cd collaboardate`
3. `bundle install`
4. `npm install`
5. `npm run webpack-once`

## Database Setup

Before executing these commands, make sure Postgres.app is running.

1. `bundle exec rake db:create`
2. `bundle exec rake db:schema:load`
3. `bundle exec rake db:seed`

## Starting the Server
1. `bundle exec rails server`
2.  Visit http://localhost:3000/ to see Collaboardate in action!
