export default function destructuring(character) {
  const arr = [];
  const { special } = character;
  for (const item in special) {
    let { id, name, icon, ...description } = special[item];
    if (Object.keys(description).length === 0) {
      description = 'Описание недоступно';
    } else {
      description = Object.values(description).toString();
    }
    arr.push({
      id, name, icon, description,
    });
  }
  return arr;
}
