export default function orderByProps(obj, rule) {
  const newObj = { ...obj };
  const result = [];

  for (const prop in rule) {
    if (Object.prototype.hasOwnProperty.call(newObj, rule[prop])) {
      result.push({ key: rule[prop], value: obj[rule[prop]] });
      delete newObj[rule[prop]];
    } else {
      throw new Error(`Пераметр ${rule[prop]} не существет`);
    }
  }

  const sorted = Object.keys(newObj);

  if (sorted.length > 0) {
    sorted.sort();
    sorted.forEach((item) => {
      result.push({ key: item, value: obj[item] });
    });
  }
  return result;
}
