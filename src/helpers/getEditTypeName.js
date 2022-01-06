export const getEditTypeName = (editValue) => {
  switch (editValue) {
    case 'add':
      return 'Dodać do długu';
    case 'delete':
      return 'Odjąć od długu';
    case 'editName':
      return 'Zmienić nazwę';
  }
};
