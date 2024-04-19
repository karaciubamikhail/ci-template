import getSortHealth from '../app';

const heroStatus = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('Sorting characters by health level', () => {
  const sortHeroHealth = heroStatus.sort(getSortHealth('health'));

  expect(sortHeroHealth).toEqual(heroStatus);
});