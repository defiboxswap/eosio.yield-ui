import axios from "axios"
import store from "@/store"

// const baseURL = "https://api.defibox.io/yield"
const baseURL = process.env.NODE_ENV === "development" ? "" : "https://api.defibox.io/yield"
function getHeaders() {
  return {
    chain: "eos",
    channel: "dapp",
    language: store.state.app.language || "en",
    project: "yield",
    "Content-Type": "application/x-www-form-urlencoded",
  }
}

// get protocols list
export function list(params) {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/protocols`,
      headers: getHeaders(),
      params
    })
      .then((result) => {
        resolve(result.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// get protocols list
export function name(name) {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/protocols/${ name }`,
      headers: getHeaders(),
    })
      .then((result) => {
        resolve(result.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}


// get protocols list
export function stat() {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/protocol/stat`,
      headers: getHeaders(),
    })
      .then((result) => {
        resolve(result.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}