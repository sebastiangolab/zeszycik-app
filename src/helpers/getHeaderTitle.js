export const getHeaderTitle = (path) => {


  if (path.includes('detailDebt')) return 'Szczegóły dłużnika';
  if (path.includes('editDebt')) return 'Edycja dłużnika';
  if (path.includes('deleteDebt')) return 'Usuń dłużnika';

  switch (path) {
    case '/search':
      return 'Szukaj';
    case '/statistics':
      return 'Statystyki';
    case '/about':
      return 'O aplikacji';
    case '/addDebt':
      return 'Dodaj dłużnika';
    case '/privacy':
      return 'Polityka prywatności';
    default:
      return 'Zeszycik';
  }
};
