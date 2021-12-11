export const getTotalValue = (debts) => {
  let totalValue = 0;

  debts.forEach((debt) => {
    totalValue += debt.value;
  });

  return `${totalValue} zł`;
};

export const getDebtorsCount = (debts) => {
  return debts.length;
};

export const getHighestDebt = (debts) => {
  let highestDebt = {
    name: 'Brak dłużników',
    value: 0,
  };

  debts.forEach((debt) => {
    if (debt.value > 0 && debt.value > highestDebt.value) highestDebt = debt;
  });

  return highestDebt.name;
};

export const getLowestDebt = (debts) => {
  let lowestDebt = {
    name: 'Brak dłużników',
    value: 999999999999999,
  };

  debts.forEach((debt) => {
    if (debt.value > 0 && debt.value < lowestDebt.value) lowestDebt = debt;
  });

  return lowestDebt.name;
};
