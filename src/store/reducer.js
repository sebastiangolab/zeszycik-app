import { types } from 'store/types';
import uuid from 'react-native-uuid';
import { getDebtsWithoutId, getSelectDebt, getCurrentDate } from 'helpers/reducerHelpers';

const initialState = {
  debts: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addDebts:
      return {
        ...state,
        debts: [
          ...state.debts,
          {
            id: uuid.v4(),
            name: action.payload.name,
            value: action.payload.debtValue,
            history: [
              {
                id: uuid.v4(),
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
                id: uuid.v4(),
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
                id: uuid.v4(),
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
