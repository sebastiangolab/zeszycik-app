export const sortDebts = (debts, sortType) => {
  switch (sortType) {
    case 'alphabetically':
      return debts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    case 'ascending':
        return debts.sort((a, b) => (a.value > b.value) ? 1 : (a.value === b.value) ? ((a.value > b.value) ? 1 : -1) : -1);
    case 'descending':
        return debts.sort((a, b) => (a.value < b.value) ? 1 : (a.value === b.value) ? ((a.value > b.value) ? 1 : -1) : -1);
  }
};
