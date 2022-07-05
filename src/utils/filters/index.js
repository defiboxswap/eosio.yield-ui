import Vue from 'vue'
import moment from 'moment';


Vue.filter('dateFormat', (value) => moment.utc(value).format('YYYY-MM-DD'));
Vue.filter('dateFormatYMDF', (value) => moment(value).format('YYYY-MM-DD HH:mm'));
Vue.filter('dateFormatAll', (value) => moment.utc(value).format('YYYY-MM-DD HH:mm:ss'));
Vue.filter('dateFormatMonth', (value) => moment.utc(value).format('MM-DD'));
Vue.filter('dateFormatMonthTime', (value) => moment.utc(value).format('MM-DD HH:mm'));
Vue.filter('dateFormatMonthYear', (value) => moment.utc(value).format('YYYY-MM-DD HH:mm'));

Vue.filter('dateFormatD', (value) => moment(value).format('YYYY-MM-DD'));
Vue.filter('dateFormatBIH', (value) => moment(value).format('YYYY-MM-DD HH:mm:ss'));
Vue.filter('dateFormatBIHM', (value) => moment(value).format('YYYY-MM-DD HH:mm'));
Vue.filter('dateFormatTimeBIH', (value) => moment(value).format('HH:mm:ss'));
Vue.filter('dateFormatMonthHour', (value) => moment(value).format('MM-DD HH:mm:ss'));
Vue.filter('dateFormatMonthHour2', (value) => moment(value).format('MM-DD HH:mm'));
Vue.filter('dateFormatT', (value) => {
  const zone = moment().utcOffset() / 60; // time zone
  return moment(value)
    .add(0 - zone, 'hours')
    .format('MM-DD HH:mm:ss');
});
Vue.filter('dateFormatT2', (value) => {
  const zone = moment().utcOffset() / 60; // time zone
  return moment(value)
    .add(0 + zone, 'hours')
    .format('MM-DD HH:mm');
});
Vue.filter('dateAdd72FormatT2Year', (value) => {
  const zone = moment().utcOffset() / 60; // time zone
  return moment(value)
    .add(0 + zone, 'hours')
    .add(72, 'hours')
    .format('YYYY-MM-DD HH:mm');
});
Vue.filter('dateFormatT2Year', (value) => {
  const zone = moment().utcOffset() / 60; // time zone
  return moment(value)
    .add(0 + zone, 'hours')
    .format('YYYY-MM-DD HH:mm');
});
Vue.filter('dateFormatTYear', (value) => {
  const zone = moment().utcOffset() / 60; // time zone
  return moment(value)
    .add(0 - zone, 'hours')
    .format('YYYY-MM-DD HH:mm:ss');
});
Vue.filter('dateFormatDay', (value) => {
  const zone = moment().utcOffset() / 60; // time zone
  return moment(value)
    .add(0 - zone, 'hours')
    .format('YYYY-MM-DD');
});
Vue.filter('dateFormatNYRSF', (value) => {
  const zone = moment().utcOffset() / 60; // time zone
  return moment(value)
    .add(0 - zone, 'hours')
    .format('YYYY-MM-DD HH:mm');
});


Vue.directive('visible', (el, binding) => {
  let value = !!(binding.value);
  if (value) {
      el.style.visibility = 'visible';
  } else {
      el.style.visibility = 'hidden';
  }
});