import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContacts, deleteContacts, filterContact } from './contactsActions';

const items = createReducer([], {
  [addContacts]: (state, { payload }) => {
    if (state.find(({ name }) => name === payload.name)) {
      alert(`Contact ${payload.name} is already exist`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContacts]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
