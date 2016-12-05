# Component Hierarchy

## AccountContainer

* AccountForm
  * AccountErrors

## SessionContainer

* SessionForm
  * SessionErrors

## InterfaceContainer

* NavigationBar
  * BoardSelector
  * Search
  * CreateButton
  * Create Menu
  * ProfileButton
  * ProfileMenu
  * InformationButton
  * InformationMenu
  * NotificationButton
  * Notifications
    * Notification

### BoardsContainer

* PersonalBoards
  * BoardButton
  * CreateBoardButton
* TeamBoards
  * TeamBoardsHeader
  * BoardButton
  * CreateBoardButton
* CreateTeamLink

### BoardContainer

* BoardHeader
* MenuLink
* BoardLists
  * ListContainer
    * ListHeader
    * Card
    * AddCardButton
  * AddListButton

### CardDetailContainer

* CardHeader
* Checklists
  * Checklist
    * ChecklistItem
  * AddChecklistItemForm
* AddCommentForm
* CommentList
  * Comment
* ActivityList
  * ActivityItem
* CardSidebar
  * AddButtons
  * ActionButtons
  * ShareLink

### ProfileContainer

* ProfileForm
  * ProfileErrors
* ProfileTabs
* Profile Content

# Routes

Path           | Component
---------------|--------------------------------------
/signup        | AccountContainer
/login         | SessionContainer
/ (logged in)  | InterfaceContainer, BoardsContainer
/b/:id         | BoardContainer
/c/:id         | CardDetailContainer (modal)
/profile       | ProfileContainer
