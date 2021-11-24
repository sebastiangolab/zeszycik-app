import { types } from 'store/types';

export const addDebts = (payload) => ({
  type: types.addDebts,
  payload,
});

export const deleteDebts = (payload) => ({
  type: types.deleteDebts,
  payload,
});

export const editDebts = (payload) => ({
  type: types.editDebts,
  payload,
});
