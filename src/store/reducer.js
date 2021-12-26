import { types } from 'store/types';
import { v4 as uuid } from 'uuid';
import { getDebtsWithoutId, getSelectDebt, getCurrentDate } from 'helpers/reducerHelpers';

const initialState = {
  debts: [
    {
      id: 0,
      name: 'Dyzio',
      value: 100,
      history: [
        {
          id: 199,
          date: '01.12.2021',
          value: 20,
          mark: '+',
          description: 'Test'
        },
        {
          id: 299,
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 399,
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 499,
          date: '08.12.2021',
          value: 100,
          mark: '+',
        },
      ],
    },
    {
      id: 1,
      name: 'Arkadiusz Ogarkowski',
      value: 300,
      history: [
        {
          id: 599,
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          id: 699,
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 799,
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 899,
          date: '08.12.2021',
          value: 100,
          mark: '+',
        },
      ],
    },
    {
      id: 2,
      name: 'Aresk Ogarek',
      value: -54,
      history: [
        {
          id: 999,
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          id: 1099,
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 1199,
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 1299,
          date: '08.12.2021',
          value: 100,
          mark: '+',
        },
      ],
    },
    {
      id: 3,
      name: 'Patryk',
      value: 5005,
      history: [
        {
          id: 1399,
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          id: 1499,
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 1599,
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 1699,
          date: '08.12.2021',
          value: 100,
          mark: '+',
        },
      ],
    },
    {
      id: 5,
      name: 'Arkadiusz Ogarkowski',
      value: 200,
      history: [
        {
          id: 2199,
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          id: 2299,
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 2399,
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 2499,
          date: '08.12.2021',
          value: 100,
          mark: '+',
        },
      ],
    },
    {
      id: 6,
      name: 'Arek Ogarek',
      value: -54,
      history: [
        {
          id: 2599,
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          id: 2699,
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 2799,
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 2899,
          date: '08.12.2021',
          value: 100,
          mark: '+',
        },
      ],
    },
    {
      id: 7,
      name: 'Ktoś o bardzo długiej nazwie aby się nie mieściła',
      value: 5004,
      history: [
        {
          id: 2999,
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          id: 3099,
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 3199,
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
          id: 3299,
          date: '08.12.2021',
          value: 100,
          mark: '+',
        },
      ],
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addDebts:
      return {
        ...state,
        debts: [
          ...state.debts,
          {
            id: uuid(),
            name: action.payload.name,
            value: action.payload.debtValue,
            history: [
              {
                id: uuid(),
                date: getCurrentDate(),
                value: Math.abs(action.payload.debtValue),
                mark: action.payload.mark,
                description: action.payload.description,
              },
            ],
          },
        ],
      };

    case types.deleteDebts:
      return {
        ...state,
        debts: getDebtsWithoutId(state.debts, action.payload.id),
      };

    case types.addValueToDebt:
      return {
        ...state,
        debts: [
          ...getDebtsWithoutId(state.debts, action.payload.id),
          {
            ...getSelectDebt(state.debts, action.payload.id),
            value: getSelectDebt(state.debts, action.payload.id).value + action.payload.editValue,
            history: [
              {
                id: uuid(),
                date: getCurrentDate(),
                value: Math.abs(action.payload.editValue),
                mark: '+',
                description: action.payload.description,
              },
              ...getSelectDebt(state.debts, action.payload.id).history,
            ],
          },
        ],
      };

    case types.removeValueFromDebt:
      return {
        ...state,
        debts: [
          ...getDebtsWithoutId(state.debts, action.payload.id),
          {
            ...getSelectDebt(state.debts, action.payload.id),
            value: getSelectDebt(state.debts, action.payload.id).value - action.payload.editValue,
            history: [
              {
                id: uuid(),
                date: getCurrentDate(),
                value: Math.abs(action.payload.editValue),
                mark: '-',
                description: action.payload.description,
              },
              ...getSelectDebt(state.debts, action.payload.id).history,
            ],
          },
        ],
      };

    case types.changeDebtorName:
      return {
        ...state,
        debts: [
          ...getDebtsWithoutId(state.debts, action.payload.id),
          {
            ...getSelectDebt(state.debts, action.payload.id),
            name: action.payload.newName,
          },
        ],
      };

    default:
      return state;
  }
};
