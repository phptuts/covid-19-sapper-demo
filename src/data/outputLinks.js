const fs = require('fs');
const superagent = require('superagent');

const getRoutes = async () => {
  if (fs.existsSync('routes.txt')) {
    fs.unlinkSync('routes.txt');
  }
  const routes = [];

  const response = await superagent.get('https://corona.lmao.ninja/countries');
  const countries = response.body;
  for (let countryKey in countries) {
    const countryData = countries[countryKey];
    routes.push({ route: countryData.country, name: countryData.country });
  }

  fs.writeFileSync(
    'routes.txt',
    routes
      .map(({ route, name }) => `<a href="${route}">${name}</a>`)
      .join('     ')
  );
};

try {
  getRoutes().then(() => console.log('finished routes'));
} catch (e) {
  console.error('ERROR', e);
}
