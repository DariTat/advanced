export default function orderByProps(obj, [key1, key2]) {
  const arr = [];
  const sortable = [];
  for (const key in obj) {
    if (key === key1 || key === key2) {
      arr.push({ key: `${key}`, value: obj[key] });
    } else {
      sortable.push({ key: `${key}`, value: obj[key] });
      sortable.sort((x, y) => (x.key > y.key ? 1 : -1));
    }
  }
  const result = [...arr, ...sortable];
  return result;
}
