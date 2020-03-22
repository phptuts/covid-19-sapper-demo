import _ from 'lodash';
import { readable } from 'svelte/store';

const expiresAtKey = 'covid_data_expires_key';
const historicDataKey = 'historic_data_key';
const dataByCountryKey = 'data_by_country_key';
const worldDataKey = 'world_data_key';
const expiryTime = 1000 * 60 * 60;

let triggerRefresh = false;

const getDataByCountry = async () => {
  const response = await fetch(
    'https://coronavirus-19-api.herokuapp.com/countries'
  );

  return await response.json();
};

const worldData = async () => {
  const response = await fetch('https://corona.lmao.ninja/all');

  return await response.json();
};

const historicData = async () => {
  const response = await fetch('https://corona.lmao.ninja/historical');

  return await response.json();
};

const populateData = async () => {
  const expireTimestamp = localStorage.getItem(expiresAtKey);
  if (!_.isEmpty(expireTimestamp) && expireTimestamp > new Date().getTime()) {
    console.log('Cache Hit');
    return;
  }

  const expiresAt = new Date().getTime() + expiryTime;
  const historic = {
    data: [...(await historicData())]
  };

  const countriesWithHistoricData = historic.data.map((d) => d.country);

  const countries = {
    data: [
      ...(await getDataByCountry())
        .map((data) => {
          if (data.country === 'USA') {
            return {
              ...data,
              location: 'US'
            };
          }

          return {
            ...data,
            location: data.country
          };
        })
        .filter((data) => {
          if (countriesWithHistoricData.includes(data.location)) {
            return true;
          }

          if (
            data.location === 'UK' ||
            data.location === 'S. Korea' ||
            data.location === 'US'
          ) {
            return true;
          }

          return false;
        })
    ]
  };
  // console.log(
  //   countries.data
  //     .map((d) => '<a href="/' + d.location + '">' + d.location + '</a>')
  //     .join(' '),
  //   'countries_export'
  // );
  localStorage.setItem(expiresAtKey, expiresAt);
  localStorage.setItem(worldDataKey, JSON.stringify(await worldData()));
  localStorage.setItem(historicDataKey, JSON.stringify(historic));
  localStorage.setItem(dataByCountryKey, JSON.stringify(countries));
};

export const deleteCache = () => {
  triggerRefresh = true;
  localStorage.removeItem(expiresAtKey);
  localStorage.removeItem(worldDataKey);
  localStorage.removeItem(historicDataKey);
  localStorage.removeItem(dataByCountryKey);
};

export default readable(undefined, (set) => {
  const setData = () => {
    set({
      expiresAt: JSON.parse(localStorage.getItem(expiresAtKey)),
      historicData: JSON.parse(localStorage.getItem(historicDataKey)),
      dataByCountry: JSON.parse(localStorage.getItem(dataByCountryKey)),
      worldStats: JSON.parse(localStorage.getItem(worldDataKey))
    });
  };

  populateData().then(() => setData());

  setInterval(() => {
    if (triggerRefresh) {
      populateData().then(() => setData());
      triggerRefresh = false;
    }
  }, 20);

  setInterval(() => {
    populateData().then(() => setData());
  }, expiryTime);
});
