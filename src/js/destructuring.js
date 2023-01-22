export default function destructuring(character) {
  const arr = [];
  const { special } = character;
  for (const item in special) {
    const { id, name, icon, description = 'Описание недоступно' } = special[item];
    arr.push({
      id, name, icon, description,
    });
  }
  return arr;
}
