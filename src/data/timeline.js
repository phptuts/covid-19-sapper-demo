import _ from 'lodash';

const byProvince = (country, historicData) => {
  return historicData.data
    .filter((geoInfo) => geoInfo.country === country)
    .filter((geoInfo) => !_.isEmpty(geoInfo.province))
    .filter((geoInfo) => !geoInfo.province.includes(','))
    .filter((geoInfo) => !geoInfo.province.includes('Princess'))
    .map((geoInfo) => {
      const timeline = parseAllTimelines(geoInfo.timeline);

      return {
        ...geoInfo,
        ...mapToTableData(timeline),
        location: geoInfo.province
      };
    });
};

const mapToTableData = (timeline) => {
  return {
    deaths: _.max(_.keys(timeline.deaths).map((date) => timeline.deaths[date])),
    recovered: _.max(
      _.keys(timeline.recovered).map((date) => timeline.recovered[date])
    ),
    cases: _.max(_.keys(timeline.cases).map((date) => timeline.cases[date]))
  };
};

const byCountry = (historicData) => {
  return historicData.data.reduce(reduceByCountry, {});
};

const reduceByCountry = (prev, next) => {
  if (!prev[next.country]) {
    prev[next.country] = parseAllTimelines(next.timeline);
    return prev;
  }

  prev[next.country].cases = mergeTimeline(
    prev[next.country].cases,
    next.timeline.cases
  );

  prev[next.country].recovered = mergeTimeline(
    prev[next.country].recovered,
    next.timeline.recovered
  );

  prev[next.country].deaths = mergeTimeline(
    prev[next.country].deaths,
    next.timeline.deaths
  );

  return prev;
};

const mergeTimeline = (prevTimeline, nextTimeline) => {
  return _.keys(prevTimeline).reduce((prev, dateString) => {
    prev[dateString] += Math.abs(+nextTimeline[dateString]);

    return prev;
  }, prevTimeline);
};

const parseAllTimelines = (timeline) => {
  const newTimline = {};
  newTimline.deaths = parseTimeline(timeline.deaths);
  newTimline.recovered = parseTimeline(timeline.recovered);
  newTimline.cases = parseTimeline(timeline.cases);

  return newTimline;
};

const parseTimeline = (timeline) => {
  return _.keys(timeline).reduce((prev, dateString) => {
    prev[dateString] = Math.abs(+timeline[dateString]);
    return prev;
  }, timeline);
};

export default {
  byProvince,
  byCountry
};
