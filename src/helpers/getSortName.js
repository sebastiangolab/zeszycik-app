export const getSortName = (sortValue) => {
  switch (sortValue) {
    case 'alphabetically':
      return 'Sortowanie: Alfabetyczne';
    case 'ascending':
      return 'Sortowanie: wg. długu rosnąco';
    case 'descending':
      return 'Sortowanie: wg. długu malejąco';
  }
};
