# Schema


## Phase 1

### users
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


## Phase 2

### boards

column name | data type | details
------------|-----------|-------------------------------------------------------
id          | integer   | not null, primary key
title       | string    | not null
starred     | boolean   | not null, default: false
visibility  | string    | not null
background  | string    | not null
creator_id  | integer   | not null, foreign key, indexed
team_id     | integer   | not null, foreign key, indexed **(BONUS ONLY)**

### lists

column name | data type | details
------------|-----------|------------------------------------
id          | integer   | not null, primary key
title       | string    | not null
order       | integer   | not null, indexed (with board_id)
board_id    | integer   | not null, foreign key, indexed

### cards

column name | data type | details
------------|-----------|-----------------------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
due_date    | datetime  |
order       | integer   | not null, indexed (with list_id)
list_id     | integer   | not null, foreign key, indexed
author_id   | integer   | not null, foreign key, indexed


## Phase 3

### board_shares

column name | data type | details
------------|-----------|---------------------------------
id          | integer   | not null, primary key
sharer_id   | integer   | not null, foreign key, indexed
board_id    | integer   | not null, foreign key, indexed
sharee_id   | integer   | not null, foreign key, indexed

### comments

column name | data type | details
------------|-----------|---------------------------------
id          | integer   | not null, primary key
body        | text      | not null
card_id     | integer   | not null, foreign key, indexed
author_id   | integer   | not null, foreign key, indexed


## Phase 4

### checklists

column name    | data type | details
---------------|-----------|-----------------------------------
id             | integer   | not null, primary key
title          | string    | not null
hide_completed | boolean   | not null, default: false
order          | integer   | not null, indexed (with card_id)
card_id        | integer   | not null, foreign key, indexed

### checklist_items

column name  | data type | details
-------------|-----------|----------------------------------------
id           | integer   | not null, primary key
title        | string    | not null
done         | boolean   | not null, default: false
order        | integer   | not null, indexed (with checklist_id)
checklist_id | integer   | not null, foreign key, indexed

### labels

column name | data type | details
------------|-----------|---------------------------------
id          | integer   | not null, primary key
name        | string    |
color       | string    | not null
board_id    | integer   | not null, foreign key, indexed

### card_labels

column name | data type | details
------------|-----------|---------------------------------
id          | integer   | not null, primary key
label_id    | integer   | not null, foreign key, indexed
card_id     | integer   | not null, foreign key, indexed

### card_members

column name | data type | details
------------|-----------|-----------
id          | integer   | not null, primary key
card_id     | integer   | not null, foreign key, indexed
member_id   | integer   | not null, foreign key, indexed

## Bonus

### teams

column name | data type | details
------------|-----------|---------------------------------
id          | integer   | not null, primary key
name        | string    | not null
short_name  | string    | not null
website     | string    |
description | text      |
owner_id    | integer   | not null, foreign key, indexed

### team_members

column name | data type | details
------------|-----------|---------------------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key, indexed
member_id   | integer   | not null, foreign key, indexed
