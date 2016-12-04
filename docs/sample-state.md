```js
{

  current_user: {
    id: 1,
    username: 'app-academy',
  },

  errors: {
    session: {
      name: [],
      email: [],
      password: [],
    },
    profile: [],
    team: [],
  },

  boards: {
    1: {
      id: 1;,
      title: 'Sample Board',
      starred: false,
      visibility: 'private',
      background: 'blue',
      creator_id: 1,
      team_id: 1,

      lists: {
        1: {
          id: 1,
          title: 'Sample List',
          order: 0,
        },
      },

      shares: {
        1: {
          id: 1,
          sharer_id: 1,
          sharee_id: 2,
        },
      },

      labels: {
        1: {
          id: 1,
          name: 'Sample Label',
          color: 'blue',
        },
      },
    },
  },

  cards : {
    1: {
      id: 1,
      title: 'Sample Card',
      description: 'Sample card description',
      due_date: '2016-01-01 15:30',
      order: 0,
      list_id: 1,
      author_id: 1,

      comments: {
        1: {
          id: 1,
          body: 'Sample comment',
          author_id: 1,
        }
      },

      checklists: {
        1: {
          id: 1,
          title: 'Sample Checklist',
          hide_completed: false,
          order: 0,
          items: {
            1: {
              title: 'Sample checklist item',
              done: false,
              order: 0,
            },
          },
        },
      },

      card_labels: {
        1: {
          id: 1,
          label_id: 1,
        },
      },

      card_members: {
        1: {
          id: 1,
          member_id: 1,
        },
      },
    },
  },

  teams: {
    1: {
      id: 1,
      name: 'Sample Team',
      description: 'Sample team description',
      owner_id: 1,

      team_members: {
        1: {
          id: 1,
          member_id: 1,
        },
      },
    },
  },
}
```
