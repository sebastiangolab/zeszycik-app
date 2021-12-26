import { types } from 'store/types';

export const addDebts = (name, debtValue, mark, description) => ({
  type: types.addDebts,
  payload: {
    name,
    debtValue,
    mark,
    description,
  },
});

export const deleteDebts = (id) => ({
  type: types.deleteDebts,
  payload: {
    id,
  },
});

export const addValueToDebt = (id, editValue, description) => ({
  type: types.addValueToDebt,
  payload: {
    id,
    editValue,
    description,
  },
});

export const removeValueFromDebt = (id, editValue, description) => ({
  type: types.removeValueFromDebt,
  payload: {
    id,
    editValue,
    description,
  },
});

export const changeDebtorName = (id, newName) => ({
  type: types.changeDebtorName,
  payload: {
    id,
    newName,
  },
});