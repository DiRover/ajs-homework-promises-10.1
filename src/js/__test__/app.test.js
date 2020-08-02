import app from '../app';

test('should call our callback 1', (done) => {
  const expected = {
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  };
  app.load().then((saving) => {
    expect(saving).toEqual(expected);
    done();
  });
});
