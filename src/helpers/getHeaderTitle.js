export const getHeaderTitle = (path) => {
  switch (path) {
    case '/search':
      return 'Szukaj';
    case '/statistics':
      return 'Statystyki';
    case '/about':
      return 'O aplikacji';
    default:
      return 'Zeszycik';
  }
};
