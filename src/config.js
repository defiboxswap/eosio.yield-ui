export const VUE_APP_TIMEOUT = process.env.NODE_ENV === "production" ? 20000 : 60000;

export const baseURL = process.env.VUE_APP_BASEURL ? process.env.VUE_APP_BASEURL :
                       process.env.NODE_ENV === "production" ? "https://api.tokenyield.io" : "https://dev.api.tokenyield.io"

export const BLOCK_EXPLORER_URL = "https://bloks.io";
export const TRANSACTION_URL = `${BLOCK_EXPLORER_URL}/transaction/`;

export const CONTRACT_ORACLE = process.env.VUE_APP_CONTRACT_ORACLE ? process.env.VUE_APP_CONTRACT_ORACLE :
                               process.env.NODE_ENV === "production" ? "oracle.yield" : "d.o.yield"

export const CONTRACT_YIELD = process.env.VUE_APP_CONTRACT_YIELD ? process.env.VUE_APP_CONTRACT_YIELD :
                              process.env.NODE_ENV === "production" ? "eosio.yield" : "d.e.yield"

export const CONTRACT_ADMIN = process.env.VUE_APP_CONTRACT_ADMIN ? process.env.VUE_APP_CONTRACT_ADMIN :
                              process.env.NODE_ENV === "production" ? "admin.yield" : "d.a.yield"
