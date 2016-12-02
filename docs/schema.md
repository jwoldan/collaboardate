# Schema

## users
column name     | data type  | details
----------------|------------|----------------------------
id              | integer    | not null, primary key
username        | string     | not null, indexed, unique
email           | string     | not null, indexed, unique
password_digest | string     | not null
session_token   | string     | not null, indexed, unique
full_name       | string     | not null
initials        | string     | not null
bio             | text       |
avatar          | attachment |
