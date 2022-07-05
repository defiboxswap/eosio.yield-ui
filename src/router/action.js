import router from './index';
// import store from '../store';

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0;
  next();
});

router.afterEach((to) => {
  if (to.name && to.name !== 'nopage') {
    sessionStorage.setItem('afterRouteName', to.name);
  }
});
