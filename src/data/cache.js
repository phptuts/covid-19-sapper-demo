import _ from 'lodash';

const cacheKeysKey = 'cache_keys';
const expiryTime = 1000 * 60 * 60;

export const deleteCacheKeys = () => {
  const cacheKeys = localStorage.getItem(cacheKeysKey);

  if (_.isEmpty(cacheKeys)) {
    return;
  }
  JSON.parse(cacheKeys).forEach((key) => {
    localStorage.removeItem(key);
  });
};

export const getCacheData = (cacheKey) => {
  if (!process.browser) {
    return;
  }

  if (_.isEmpty(localStorage.getItem(cacheKey))) {
    return undefined;
  }

  const { expires, data } = JSON.parse(localStorage.getItem(cacheKey));
  console.log(expires, 'expires');
  if (expires && expires > new Date().getTime()) {
    console.log(cacheKey, 'Cache Key Hit');
    return data;
  }

  return undefined;
};

export const saveCache = (cacheKey, data) => {
  if (!process.browser) {
    return;
  }

  const expires = new Date().getTime() + expiryTime;
  localStorage.setItem(cacheKey, JSON.stringify({ expires, data }));
  let cacheKeys = [];
  if (!_.isEmpty(localStorage.getItem(cacheKeysKey))) {
    cacheKeys = JSON.parse(localStorage.getItem(cacheKeysKey));
  }
  cacheKeys.push(cacheKey);
  localStorage.setItem(cacheKeysKey, JSON.stringify(cacheKeys));
  console.log('cache key saved ' + cacheKey);
};

const saveCountryCacheData = (data, country, cackeKeyBase) => {

}