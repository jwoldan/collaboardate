# API Endpoints

## HTML API

### Root

- `GET /` - loads React app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Boards

- `GET /api/boards`
- `POST /api/boards`
- `GET /api/boards/:id`
- `PATCH /api/boards/:id`
- `DELETE /api/boards/:id`

For creation and deletion of board shares:

- `POST /api/boards/:id/board_shares`
- `DELETE /api/boards/:id/board_shares`

### Lists

- `POST /api/lists`
- `PATCH /api/lists/:id`
- `DELETE /api/lists/:id`

_(No index and show routes, as lists will always be available with and accessed through boards)_

### Cards

- `POST /api/cards`
- `PATCH /api/cards/:id`
- `DELETE /api/cards/:id`

_(No index and show routes, as cards will always be available with and accessed through lists)_

For creation and deletion of card labels (join table between cards and labels):

- `POST /api/cards/:id/card_labels`
- `DELETE /api/cards/:id/card_labels`

For creation and deletion of card members (join table between cards and users):

- `POST /api/cards/:id/card_members`
- `DELETE /api/cards/:id/card_members`

### Comments

- `POST /api/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

_(No index and show routes, as comments will always be available with and accessed through cards)_

### Checklists

- `POST /api/checklists`
- `PATCH /api/checklists/:id`
- `DELETE /api/checklists/:id`

_(No index and show routes, as checklists will always be available with and accessed through cards)_

### Checklist Items

- `POST /api/checklist_items`
- `PATCH /api/checklist_items/:id`
- `DELETE /api/checklist_items/:id`

_(No index and show routes, as checklist items will always be available with and accessed through checklists)_

### Labels

- `POST /api/labels`
- `PATCH /api/labels/:id`
- `DELETE /api/labels/:id`

_(No index and show routes, as labels will always be available with and accessed through boards)_

### Teams

- `POST /api/teams`
- `PATCH /api/teams/:id`
- `DELETE /api/teams/:id`

_(No index and show routes, as teams will always be available with and accessed through users)_

For creation and deletion of team members:

- `POST /api/teams/:id/team_members`
- `DELETE /api/teams/:id/team_members`
