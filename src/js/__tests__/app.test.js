import person from '../app.js';

test('person return value live level : healthy', () => {
  expect(person({ name: 'Маг', health: 90 })).toBe('healthy');
});
test('person return value live level :wounded', () => {
  expect(person({ name: 'Маг', health: 45 })).toBe('wounded');
});
test('person return value live level : critical', () => {
  expect(person({ name: 'Лучник', health: 10 })).toBe('critical');
});
