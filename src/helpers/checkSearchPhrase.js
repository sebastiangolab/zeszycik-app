export const checkSearchPhrase = (text, searchPhrase) => {
  if (searchPhrase === '') return true;

  const lowerText = text.toLowerCase();
  const lowerSearchPhrase = searchPhrase.toLowerCase();
  if (lowerText.includes(lowerSearchPhrase)) return true;

  return false;
};
