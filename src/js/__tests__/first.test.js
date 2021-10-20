import person from '../first.js';

test('should person', () => {
  const result = person({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
  expect(person({ name: 'Маг', health: 45 })).toBe('wounded');
  expect(person({ name: 'Лучник', health: 10 })).toBe('critical');
});
