import { schema } from 'normalizr';

export const cardSchema = new schema.Entity('cards');

export const cardListSchema = [cardSchema];

export const listSchema = new schema.Entity('lists', {
  cards: cardListSchema,
});

export const listListSchema = [listSchema];

export const boardSchema = new schema.Entity('boards', {
  lists: listListSchema,
});

export const boardListSchema = [boardSchema];
