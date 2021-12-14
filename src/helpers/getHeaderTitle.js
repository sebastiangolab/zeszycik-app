export const getHeaderTitle = (path) => {
  switch (path) {
    case '/search':
      return 'Szukaj';
    case '/statistics':
      return 'Statystyki';
    case '/about':
      return 'O aplikacji';
    case '/addDebt':
      return 'Dodaj dłużnika';
    case '/detailDebt':
      return 'Szczegóły dłużnika';
    case '/editDebt':
      return 'Edycja dłużnika';
    case '/deleteDebt':
      return 'Usuń dłużnika';
    default:
      return 'Zeszycik';
  }
};
