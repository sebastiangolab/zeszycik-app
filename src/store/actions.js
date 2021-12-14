import { types } from 'store/types';

export const addDebts = (payload) => ({
  type: types.addDebts,
  payload,
});

export const deleteDebts = (id) => ({
  type: types.deleteDebts,
  payload: {
    id,
  },
});

export const editDebts = (payload) => ({
  type: types.editDebts,
  payload,
});
