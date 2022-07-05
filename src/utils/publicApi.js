import store from "../store"
import { GetUrlPara } from "@/utils/public"
import i18n from "@/utils/lang"

// APP Get Account Information -Return to the beginning: Android | iOS | Web (No)
export function AppInit(callback) {
  const urlParams = GetUrlPara()
  const source = urlParams.source
  if (!store.state.sys.isAppView) {
    // setIsAppView
    store.dispatch("setIsAppView", source || "")
  }
  if (urlParams.language) {
    // setLanguage
    i18n.locale = urlParams.language
    store.dispatch("setLanguage", urlParams.language)
  }
  if (source && source !== "web") {
    // Get APP account information
    const accountInfo = {
      account_name: "",
      chain: "eos", // Not logged into the default EOS chain
    }
    let data = null
    if (source === "ios") {
      data = JSON.parse(window.prompt("getAccountInfo", "")) // eslint-disable-line
    } else {
      data = JSON.parse(window.action.getAccountInfo())
    }
    if (!data.account) {
      // App not logged in
      localStorage.setItem("token", "")
      accountInfo.account = ""
      accountInfo.chain = "eos" // Not logged into the default EOS chain
      // isLoginApp = false;
    } else {
      // App logged in
      localStorage.setItem("token", data.token || "")
      accountInfo.account = data.account
      accountInfo.chain = data.chain
      // isLoginApp = true;
    }
    store.dispatch("setAccountInfo", accountInfo)
  }

  // Determine if there is a fallback - event that some operation needs to be performed after initialization
  if (callback) {
    callback({ source })
  }
}
