const { Serialize, Numeric } = require('eosjs')
const { TextEncoder, TextDecoder } = require('text-encoding')

const numericFromName = (accountName) => {
    const sb = new Serialize.SerialBuffer({
      textEncoder: new TextEncoder(),
      textDecoder: new TextDecoder()
    })

    sb.pushName(accountName)

    return Numeric.binaryToDecimal(sb.getUint8Array(8));
}

export {
  numericFromName
}