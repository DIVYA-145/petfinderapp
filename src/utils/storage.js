export const getPets = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const savePet = (key, pet) => {
  const arr = getPets(key);
  arr.push(pet);
  localStorage.setItem(key, JSON.stringify(arr));
};
