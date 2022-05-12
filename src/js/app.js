import orderByProps from './basic';
// eslint-disable-next-line
console.log('worked');

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
// eslint-disable-next-line
console.log(orderByProps(obj, ['name', 'level']));
