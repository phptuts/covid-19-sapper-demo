import _ from 'lodash';
import superagent from 'superagent';
import { saveCache, getCacheData } from './cache.js';
import { standardizeCountryName } from './countryNameFixer';

const allCountryTimelineData = 'all_country_timeline_data';
const allCountriesDataCacheKey = 'all_country_data_cache_key';
const countryTimelineCacheKey = 'country_timeline_cache_key_';
const countryDataCacheKey = 'country_data_cache_key_';
const provinceCacheKey = 'province_cache_key';
const allWorldCacheKey = 'all_world_cache_key';

export const getWorldStats = async () => {
  const cachedData = getCacheData(allWorldCacheKey);
  if (cachedData) {
    return cachedData;
  }

  const response = await superagent.get('https://corona.lmao.ninja/all');

  saveCache(allWorldCacheKey, response.body);

  return response.body;
};

export const getDataForCountries = async () => {
  const cachedData = getCacheData(allCountriesDataCacheKey);
  if (cachedData) {
    return cachedData;
  }

  const response = await superagent.get('https://corona.lmao.ninja/countries');

  const countriesData = response.body.map((c) => {
    let country = c.country;

    // Temp Fix
    if (country.toLowerCase().includes('iran')) {
      country = 'Iran';
    }

    return { ...c, location: country };
  });

  saveCache(allCountriesDataCacheKey, countriesData);

  return countriesData;
};

export const getProvincesForCountry = async (country) => {
  const data = await getDataProvinces();

  return data
    .filter((data) => {
      return (
        !_.isEmpty(data.province) &&
        standardizeCountryName(data.country.toLowerCase()) ===
          standardizeCountryName(country.toLowerCase()) &&
        !data.province.toLowerCase().includes('princess')
      );
    })
    .map((provinceData) => {
      return {
        location: provinceData.province,
        deaths: provinceData.stats.deaths,
        cases: provinceData.stats.confirmed,
        recovered: provinceData.stats.recovered
      };
    });
};

export const getDataForCountry = async (country) => {
  const cacheKey = countryDataCacheKey + country.toLowerCase();
  const cachedData = getCacheData(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const response = await superagent.get(
    'https://corona.lmao.ninja/countries/' + country.toLowerCase()
  );
  saveCache(cacheKey, response.body);

  return response.body;
};

export const getCountryTimeline = async (country) => {
  const cacheKey = countryTimelineCacheKey + country.toLowerCase();
  const cachedData = getCacheData(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const response = await superagent.get(
    'https://corona.lmao.ninja/v2/historical/' + country
  );
  saveCache(cacheKey, response.body);

  return response.body;
};

export const getWorldTimeline = async () => {
  try {
    const countriesData = await getCountriesTimeline();

    return countriesData.reduce(
      (prev, countryData) => {
        _.keys(countryData.timeline.deaths).forEach((key) => {
          if (!prev.cases[key]) {
            prev.cases[key] = 0;
            prev.deaths[key] = 0;
          }
          prev.cases[key] += countryData.timeline.cases[key];
          prev.deaths[key] += countryData.timeline.deaths[key];
        });
        return prev;
      },
      { cases: {}, deaths: {} }
    );
  } catch (e) {
    return { cases: {}, deaths: {} };
  }
};

const getDataProvinces = async () => {
  const response = await superagent.get('https://corona.lmao.ninja/v2/jhucsse');

  saveCache(provinceCacheKey, response.body);

  return response.body;
};

const getCountriesTimeline = async () => {
  const cachedData = getCacheData(allCountryTimelineData);

  if (cachedData) {
    return cachedData;
  }

  const response = await superagent.get(
    'https://corona.lmao.ninja/v2/historical'
  );
  saveCache(allCountryTimelineData, response.body);

  return response.body;
};
