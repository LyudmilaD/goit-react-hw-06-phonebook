import { createAction } from '@reduxjs/toolkit';
import { ADD, DEL, FILTER } from './contactsTypes';
import { nanoid } from 'nanoid';

export const addContacts = createAction(ADD, contact => ({
  payload: { id: nanoid(), ...contact },
}));
export const deleteContacts = createAction(DEL);
export const filterContact = createAction(FILTER, event => ({
  payload: event.currentTarget.value,
}));
