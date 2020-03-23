const fs = require('fs');
const axios = require('axios');
const _ = require('lodash');
let historyData;
const historicData = async () => {
  try {
    if (historyData) {
      return historyData;
    }

    historyData = (
      await axios.get('https://corona.lmao.ninja/historical', {
        proxy: false
      })
    ).data;
    return historyData;
  } catch (e) {
    console.log(e.message);
    return [];
  }
};

const mapCountryToHistoryCountry = (country) => {
  if (country.toLowerCase().includes('korea')) {
    return 'korea, south';
  }

  return country;
};

const getHistoricProvinceTableData = async (country) => {
  const data = await historicData();
  return data
    .filter((d) => {
      return (
        d.country.toLowerCase() ===
          mapCountryToHistoryCountry(country.toLowerCase()).toLowerCase() &&
        !_.isEmpty(d.province) &&
        !d.province.toLowerCase().includes('princess')
      );
    })
    .map((d) => {
      return {
        location: _.startCase(d.province)
      };
    });
};

const getDataForCountries = async () => {
  try {
    const json = (
      await axios.get('https://coronavirus-19-api.herokuapp.com/countries', {
        proxy: false
      })
    ).data;
    return json.map((data) => {
      return { ...data, location: mapCountryToHistoryCountry(data.country) };
    });
  } catch (e) {
    console.log(e.message);
  }
};

const getRoutes = async () => {
  if (fs.existsSync('routes.txt')) {
    fs.unlinkSync('routes.txt');
  }
  const routes = [];
  const countries = await getDataForCountries();
  let once = false;
  for (let countryKey in countries) {
    const countryData = countries[countryKey];
    routes.push({ route: countryData.location, name: countryData.location });

    const provinces = await getHistoricProvinceTableData(countryData.location);
    if (_.isEmpty(provinces)) {
      continue;
    }
    for (let provinceKey in provinces) {
      const province = provinces[provinceKey];
      routes.push({
        route: `${countryData.location}/${province.location}`,
        name: `${countryData.location}  ${province.location}`
      });
    }
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
  console.log('here here');
}
