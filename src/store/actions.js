import { types } from 'store/types';

export const addDebts = (name, debtValue) => ({
  type: types.addDebts,
  payload: {
    name,
    debtValue,
  },
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
