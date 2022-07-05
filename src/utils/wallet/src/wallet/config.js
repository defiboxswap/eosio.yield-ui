const NODE_ENV = process.env.NODE_ENV; // NODE_ENV

export default {
  account: localStorage.getItem('accountInfo') ? JSON.parse(localStorage.getItem('accountInfo')) : {},
  env: NODE_ENV, // NODE_ENV
  actor: '-' // cpu account
}