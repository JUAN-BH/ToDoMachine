export const saveLocalStorage = (key, value) => {
  let valuesSaved = JSON.parse(localStorage.getItem(key));
  if (Array.isArray(valuesSaved)) {
    valuesSaved = [...valuesSaved, value];
    localStorage.setItem(key, JSON.stringify(valuesSaved));
  } else {
    valuesSaved = [value];
    localStorage.setItem(key, JSON.stringify(valuesSaved));
  }
};
