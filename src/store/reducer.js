import { types } from 'store/types';

const initialState = {
  debts: [
    {
      id: 0,
      name: 'Dyzio',
      value: 300,
    },
    {
      id: 1,
      name: 'Arkadiusz Ogarkowski',
      value: 300,
    },
    {
      id: 2,
      name: 'Arek Ogarek',
      value: -54,
    },
    {
      id: 3,
      name: 'Ktoś o bardzo długiej nazwie aby się nie mieściła',
      value: 5004,
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addDebts:
      return state;

    case types.deleteDebts:
      return state;

    case types.editDebts:
      return state;

    default:
      return state;
  }
};