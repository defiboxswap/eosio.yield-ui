import Decimal from "decimal.js"
import numeral from "numeral"

export function toFixed(number, pp) {
  let num = isNaN(number) || !number ? 0 : number
  let p = isNaN(pp) || !pp ? 0 : pp
  num = getFullNum(num)
  var n = (num + "").split(".") // eslint-disable-line
  var x = n.length > 1 ? n[1] : "" // eslint-disable-line
  if (x.length > p) {
    // eslint-disable-line
    x = x.substr(0, p) // eslint-disable-line
  } else {
    // eslint-disable-line
    x += Array(p - x.length + 1).join("0") // eslint-disable-line
  } // eslint-disable-line
  return n[0] + (x == "" ? "" : "." + x) // eslint-disable-line
}

export function getFullNum(num) {
  if (isNaN(num)) {
    return num
  }
  const str = String(num)
  if (!/e/i.test(str)) {
    return num
  }
  return Number(num)
    .toFixed(18)
    .replace(/\.?0+$/, "")
}

export function accAdd(arg1, arg2) {
  const num = Decimal(arg1 * 1).add(new Decimal(arg2 * 1))
  // const m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/); // eslint-disable-line
  // const kx = num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
  return num.toFixed()
}

export function accSub(arg1, arg2) {
  const num = new Decimal(arg1).sub(new Decimal(arg2))
  // const m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/); // eslint-disable-line
  // const kx = num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
  return num.toFixed()
}

export function accMul(arg1, arg2) {
  if (!arg1 || !arg2) {
    return 0
  }
  const num = new Decimal(arg1).mul(new Decimal(arg2))
  // const m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/); // eslint-disable-line
  // const kx = num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
  return num.toFixed()
}

export function accDiv(arg1, arg2) {
  if (!arg1 || !arg2) {
    return 0
  }
  const num = new Decimal(arg1).div(new Decimal(arg2))
  // const m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/); // eslint-disable-line
  // const kx = num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
  return num.toFixed()
}

export function getUrlParams(url) {
  const params = {}
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
    // eslint-disable-line
    params[key] = value
  })
  return params
}

//
export function getReqUrl(hostname) {
  const env = process.env.NODE_ENV
  let linkUrl = ""
  switch (env) {
    case "tron":
    case "development":
      linkUrl = `http://${process.env.VUE_APP_BASEURL}:${process.env.VUE_APP_PORT1}`
      if (hostname) {
        linkUrl = process.env.VUE_APP_BASEURL
      }
      break
    default:
      linkUrl = location.origin
      break
  }
  return linkUrl
}

export function isIOS() {
  const u = navigator.userAgent
  const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  return isIos
}

export function GetUrlPara() {
  const url = document.location.toString()
  const arrUrl = url.split("?")
  if (arrUrl.length === 1) {
    return {
      dapp: "moreWallet",
    }
  }
  const para = arrUrl[1]
  const qureyArr = para.split("&")
  const params = {}
  for (let i = 0; i < qureyArr.length; i += 1) {
    const arr = qureyArr[i].split("=")
    params[arr[0]] = arr[1]
  }
  return params
}

export function getTargetOrigin() {
  const embedUrl = sessionStorage.getItem("swapEmbedUrl")
  if (embedUrl) {
    const paUrl = JSON.parse(embedUrl)
    const targetOrigin = decodeURIComponent(paUrl.origin)
    return targetOrigin
  }
  const paUrl = getUrlParams(window.location.href)
  sessionStorage.setItem("swapEmbedUrl", JSON.stringify(paUrl))
  const targetOrigin = decodeURIComponent(paUrl.origin)
  return targetOrigin
}

export function countdown(endtime, begintime) {
  const btime = begintime || Date.parse(new Date())
  const t = Date.parse(endtime) - btime
  const days = Math.floor(t / (1000 * 60 * 60 * 24))
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  let minutes = Math.floor((t / 1000 / 60) % 60)
  let seconds = Math.floor((t / 1000) % 60)
  hours = hours >= 10 ? hours : `0${hours}`
  minutes = minutes >= 10 ? minutes : `0${minutes}`
  seconds = seconds >= 10 ? seconds : `0${seconds}`
  if (t <= 0) {
    return {
      total: t,
      days: 0,
      hours: "00",
      minutes: "00",
      seconds: "00",
    }
  }
  return { total: t, days, hours, minutes, seconds }
}

export function simpleAddress(address, len) {
  let leng = len || 5
  return address.substring(0, leng) + "......" + address.substring(address.length - leng, address.length)
}

export function localStorageGet(name, fdt) {
  let defalut = fdt || {}
  let flg = !window.localStorage.getItem(name) || window.localStorage.getItem(name) === undefined || window.localStorage.getItem(name) === "undefined" || window.localStorage.getItem(name) === "null"
  return flg ? defalut : JSON.parse(window.localStorage.getItem(name))
}

export function sessionStorageGet(name, fdt) {
  let defalut = fdt || {}
  let flg = !window.sessionStorage.getItem(name) || window.localStorage.getItem(name) === undefined || window.sessionStorage.getItem(name) === "undefined" || window.sessionStorage.getItem(name) === "null"
  return flg ? defalut : JSON.parse(window.sessionStorage.getItem(name))
}

export function toNonExponential(num, l) {
  if (num === null) {
    return 0
  }
  if (isNaN(num)) {
    return 0
  }
  const fnum = new Decimal(num)
  if (l) {
    return fnum.toFixed(l)
  }
  return fnum.toFixed()
}

export function numeralFormat(num, p) {
  let value = toNonExponential(num * 1, p)
  if ((value * 1).toFixed() === "0") {
    return value
  }
  let xstr = "0"
  if (p) {
    xstr = "0."
    for (var i = 0; i < p; i++) {
      // eslint-disable-line
      xstr += "0" // eslint-disable-line
    }
  }
  if (p === 0) {
    return numeral(value).format("0,0")
  }
  return numeral(value).format(`0,${xstr}`)
}

export function decimalWhat(num) {
  let getNum = num * 1
  let l = 8
  if (getNum > 0) {
    l = 4
  }
  if (getNum >= 1000) {
    l = 2
  }
  if (getNum >= 1000000) {
    l = 0
  }
  if (getNum <= 0) {
    l = 4
  }
  // if (getNum < 0.1) {
  //   l = 3;
  // }
  // if (getNum <= 0.01) {
  //   l = 4;
  // }
  if (getNum < 0.001) {
    l = 5
  }
  if (getNum <= 0.0001) {
    l = 6
  }

  if (getNum <= 0.00001) {
    l = 7
  }
  if (getNum <= 0.000001) {
    l = 8
  }
  if (getNum <= 0.000001) {
    l = 8
  }
  if (getNum <= 0.0000001) {
    l = 9
  }
  if (getNum <= 0.00000001) {
    l = 10
  }
  if (getNum <= 0.000000001) {
    l = 11
  }
  if (getNum <= 0.0000000001) {
    l = 12
  }
  if (getNum === 0 || !getNum) {
    l = 2
  }
  return l
}

export function browserIsPhone() {
  var u = navigator.userAgent
  var browser = {
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: u.indexOf("Android") > -1 && u.indexOf("Linux") > -1,
    iPhone: u.indexOf("iPhone") > -1,
    iPad: u.indexOf("iPad") > -1,
    weixin: u.indexOf("MicroMessenger") > -1,
    qq: u.match(/\sQQ/i) == " qq",
  }
  return browser.mobile || browser.android || browser.iPhone || browser.weixin
}

export function filterOtc(price) {
  let otcPrice = ""
  if (!price && price !== 0) {
    return null
  }
  if (price == 0) {
    otcPrice = 0
    return otcPrice
  }
  if (price < 0.001) {
    otcPrice = "<0.001"
  } else if (0.001 <= price && price < 0.01) {
    otcPrice = toFixed(price, 5)
  } else if (0.01 <= price && price < 0.1) {
    otcPrice = toFixed(price, 4)
  } else if (0.1 <= price && price < 1) {
    otcPrice = toFixed(price, 3)
  } else {
    otcPrice = toFixed(price, 2)
  }
  return otcPrice
}

export function setOtcPrice({ symbol0, symbol1, price, priceItem }) {
  let otcPrice = 0
  let { eosUsdtPrice, usnUsdtPrice } = priceItem
  if (symbol0 === "USDT" || symbol1 === "USDT") {
    otcPrice = accMul(price, 1)
    return otcPrice
  } else if (symbol0 === "USN" || symbol1 === "USN") {
    if (symbol0 === "USDT" || symbol1 === "USDT") {
      otcPrice = accMul(price, 1)
      return otcPrice
    } else {
      otcPrice = accMul(price, usnUsdtPrice)
      return otcPrice
    }
  } else if (symbol0 === "EOS" || symbol1 === "EOS") {
    otcPrice = accMul(price, eosUsdtPrice)
    return otcPrice
  } else {
    return null
  }
}

export function klineSetOtcPrice({ symbol0, symbol1, price, priceItem }) {
  let otcPrice = 0
  if (symbol0 === "EOS" || symbol1 === "EOS") {
    otcPrice = accMul(price, priceItem)
    return otcPrice
  } else {
    return null
  }
}

export function throttle(fn, wait = 200, options = {}) {
  let timer
  let previous = 0
  let throttled = function () {
    let now = +new Date()
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    if (remaining < 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      fn.apply(this, arguments)
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        previous = options.leading === false ? 0 : new Date().getTime()
        timer = null
        fn.apply(this, arguments)
      }, remaining)
    }
  }
  return throttled
}

export function formatNumber(num) {
  // console.log(num, 'num');
  if (isNaN(num)) {
    return 0
  }
  num = String(num)
  let length = ("" + num).split(".").length
  let long = 0
  if (length > 1) {
    long = ("" + num).split(".")[1].length
  }
  // console.log(), "num");

  let fo = parseFloat(num).toLocaleString("en", { minimumFractionDigits: long })
  if (!fo) fo = String(parseFloat(num)).toLocaleString("en", { minimumFractionDigits: long })
  // return parseFloat(num).toLocaleString('en', { minimumFractionDigits: long });
  return fo
  // return ('' + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
  // return ('' + num).replace(/(?<=(^|\s)\d+)(?=(\d{3})+\b)/g, ',');
  // return ('' + num).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

export function toPrecision(arg1) {
  if (!arg1) {
    return 0
  }
  let num = new Decimal(arg1)
  if (num > 0.00000001) {
    return toFixed(num, 8)
  }

  num = num.toPrecision(4)
  if (num.includes("e")) {
    const [num1, uint] = num.split("e")
    const newUint = Number(uint)
    num = accMul(new Decimal(num1).toString(10), new Decimal(10).pow(newUint).toString(10))
  }
  return num
}

export function toPrecision1(arg1) {
  if (!arg1) {
    return 0
  }
  let num = new Decimal(arg1)
  if (num > 0) {
    return toFixed(num, 2)
  }

  num = num.toPrecision(4)
  if (num.includes("e")) {
    const [num1, uint] = num.split("e")
    const newUint = Number(uint)
    num = accMul(new Decimal(num1).toString(10), new Decimal(10).pow(newUint).toString(10))
  }
  return num
}

export function accGte(arg1, arg2) {
  return new Decimal(arg1).gte(new Decimal(arg2))
}

export function accGt(arg1, arg2) {
  return new Decimal(arg1).gt(new Decimal(arg2))
}

export function accountFormat(name) {
  return `${name.substring(0, 4)}****${name.substring(8, 12)}`
}

// KMB
export function getKMBUnit(num, decimal = 2) {
  if (num >= 1000000000) {
    return formatNumber(toFixed(accDiv(num, 1000000000), decimal)) + "B"
  } else if (num >= 1000000) {
    return formatNumber(toFixed(accDiv(num, 1000000), decimal)) + "M"
  } else if (num >= 10000) {
    return formatNumber(toFixed(accDiv(num, 1000), decimal)) + "K"
  } else {
    return formatNumber(toFixed(num, decimal))
  }
}

// Number、String、Undefined、Boolean、Object、Array、Function、Null、Symbol、Set、Map
export function checkType(arg) {
  let type = Object.prototype.toString.call(arg)
  return type.substring(0, type.length - 1).split(" ")[1]
}

// handleHttp
export function handleHttp(url) {
  if (!url) return '-'
  if(url.substr(0,7).toLowerCase() == "http://") return url.substring(7)
  if(url.substr(0,8).toLowerCase() == "https://") return url.substring(8)
  return url
}

// handleCategory
export function handleCategory(category) {
  if (!category) return ''
  if(category.toLowerCase() == "cdp") return this.$t('yield.yield46')
  if(category.toLowerCase() == "dexes") return this.$t('yield.yield47')
  if(category.toLowerCase() == "lending") return this.$t('yield.yield48')
  if(category.toLowerCase() == "liquid staking") return this.$t('yield.yield49')
  if(category.toLowerCase() == "tvl rankings") return this.$t('yield.yield50')
  return category
}