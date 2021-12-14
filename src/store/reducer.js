import { types } from 'store/types';

const initialState = {
  debts: [
    {
      id: 0,
      name: 'Dyzio',
      value: 100,
      history: [
        {
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
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
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
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
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
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
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '08.12.2021',
          value: 100,
          mark: '+',
        },
      ],
    },
    {
      id: 4,
      name: 'Dyzio',
      value: 300,
      history: [
        {
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
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
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
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
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
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
          date: '01.12.2021',
          value: 20,
          mark: '+',
        },
        {
          date: '03.12.2021',
          value: 10,
          mark: '-',
        },
        {
          date: '04.12.2021',
          value: 10,
          mark: '-',
        },
        {
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
      return state;

    case types.deleteDebts:
      return {
        ...state,
        debts: state.debts.filter((debt) => debt.id != action.payload.id),
      }

    case types.editDebts:
      return state;

    default:
      return state;
  }
};
