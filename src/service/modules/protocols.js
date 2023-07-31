import axios from "axios"
import store from "@/store"
import { baseURL } from "../../config";

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
      url: `/v1/protocols/stat`,
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

// get protocols sparkline
export function sparkline(name) {
  return new Promise((resolve, reject) => {
    axios({
      baseURL,
      method: "get",
      url: `/v1/protocols/${ name }/sparkline?tvl_type=tvl_usd`,
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