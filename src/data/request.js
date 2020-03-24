import _ from 'lodash';
import superagent from 'superagent';
import { saveCache, getCacheData } from './cache.js';

const allCountriesDataCacheKey = 'all_countries_cache_key';
const worldHistoricCacheKey = 'world_data_cache_key';
const allWorldCacheKey = 'all_world_cache_key';
const countryTimelineCacheKey = 'country_timeline_cache_key';

export const getDataForCountries = async () => {
  const cachedData = getCacheData(allCountriesDataCacheKey);
  if (cachedData) {
    return cachedData;
  }

  const response = await superagent.get(
    'https://corona.lmao.ninja/countries/countries'
  );

  const data = response.body.map((data) => {
    return { ...data, location: mapCountryToHistoryCountry(data.country) };
  });

  saveCache(allCountriesDataCacheKey, data);

  return data;
};

export const getWorldData = async () => {
  const cachedData = getCacheData(allWorldCacheKey);
  if (cachedData) {
    return cachedData;
  }

  const response = await superagent.get('https://corona.lmao.ninja/all');

  saveCache(allWorldCacheKey, response.body);

  return response.body;
};

export const historicData = async () => {
  const cachedData = getCacheData(worldHistoricCacheKey);

  if (cachedData) {
    return cachedData;
  }

  const response = await superagent.get('https://corona.lmao.ninja/historical');

  saveCache(worldHistoricCacheKey, response.body);

  return response.body;
};

export const getCountryTimeline = async (country) => {
  const countryKey = mapCountryToHistoryCountry(country);
  const cacheKey = countryTimelineCacheKey + '_' + countryKey;
  const cachedData = getCacheData(cacheKey);

  if (cachedData) {
    return cachedData.timeline;
  }

  const response = await superagent.get(
    'https://corona.lmao.ninja/historical/' + countryKey
  );

  saveCache(cacheKey, response.body);

  return response.body.timeline;
};

export const getDataForCountry = async (country) => {
  return (await getDataForCountries()).find(
    (c) => c.location.toLowerCase() === country.toLowerCase()
  );
};

export const getHistoricCountryProvinceData = async (country, province) => {
  const data = await historicData();

  return data.find(
    (d) =>
      d.country.toLowerCase() ===
        mapCountryToHistoryCountry(country).toLowerCase() &&
      d.province.toLowerCase() === province.toLowerCase()
  );
};

export const getHistoricTimelineDataForProvince = async (country, province) => {
  const data = await historicData();

  const info = data.find(
    (d) =>
      d.country.toLowerCase() ===
        mapCountryToHistoryCountry(country).toLowerCase() &&
      d.province.toLowerCase() === province.toLowerCase()
  );

  const lastKey = _.last(_.keys(info.timeline.cases));
  const generalInfo = {
    location: info.province,
    cases: info.timeline.cases[lastKey],
    recovered: info.timeline.recovered[lastKey],
    deaths: info.timeline.deaths[lastKey]
  };
  return { ...generalInfo, timeline: info.timeline };
};

export const getHistoricProvinceTableData = async (country) => {
  const data = await historicData();
  return data
    .filter((d) => {
      return (
        d.country.toLowerCase() ===
          mapCountryToHistoryCountry(country.toLowerCase()) &&
        !_.isEmpty(d.province) &&
        !d.province.toLowerCase().includes('princess')
      );
    })
    .map((d) => {
      const lastKey = _.last(_.keys(d.timeline.cases));
      return {
        location: _.startCase(d.province),
        cases: d.timeline.cases[lastKey],
        recovered: d.timeline.recovered[lastKey],
        deaths: d.timeline.deaths[lastKey]
      };
    })
    .filter((d) => d.cases > 0);
};

const mapCountryToHistoryCountry = (country) => {
  if (country.toLowerCase().includes('korea')) {
    return 'korea, south';
  }

  return country;
};
