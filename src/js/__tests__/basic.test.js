import orderByProps from '../basic';

test('function "orderByProps" should sort', () => {
  const newObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputOrder = ['name', 'level'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const received = orderByProps(newObj, inputOrder);
  expect(received).toEqual(result);
});

test('function "orderByProps" should sort', () => {
  const newObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputOrder = ['name', 'level', 'health', 'defence', 'attack'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ];
  const received = orderByProps(newObj, inputOrder);
  expect(received).toEqual(result);
});

test('function "orderByProps" should throw error', () => {
  const newObj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputOrder = ['blah-blah', 'level', 'health', 'defence', 'attack'];
  expect(() => {
    orderByProps(newObj, inputOrder);
  }).toThrowError(new Error('Пераметр blah-blah не существет'));
});
