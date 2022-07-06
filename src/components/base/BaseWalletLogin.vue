<template>
  <div class="walletLogin">
    <div class="tit">Select wallet</div>
    <span class="close" @click="handleCloseLoginWallet">
      <v-icon small>mdi-window-close</v-icon>
    </span>
    <div class="wlainbox">
      <div class="wlleft">
        <!-- Scatter Authorize -->
        <div class="scatterbox">
          <!-- Plug in not installed -->
          <div class="supportList">
            <template v-for="(item, index) in walletsPlugList">
              <div :key="index" class="supportListImg flex" @click="handleScatterPower(item)">
                <!-- <svg-icon v-if="item.icon" :icon="item.icon" :size="26" /> -->
                <!-- <img v-else :src="item.svgUrl" alt="" class="walletLogo" /> -->
                <img :src="item.svgUrl" alt="" class="walletLogo" />
                {{ item.name[0].toUpperCase() + item.name.substr(1) }}
              </div>
            </template>
          </div>
        </div>
      </div>
      <template>
        <div class="wlright">
          <!-- Select Scatter installation mode -->
          <div class="scatteranz" v-if="wlstatus === -111111" style="padding-left: 10px">
            <h2 style="margin: 0">{{ $t('jy.anz') }} Scatter</h2>
            <p style="margin-top: 5px; text-align: center; font-size: 14px">
              {{ $t('wallet.scataz') }}
            </p>
            <div style="width: 300px; margin: auto">
              <v-btn class="default-sty defaultno" @click="handleToScatter(1)" style="width: 300px; margin: 15px 0 20px">{{ $t('wallet.tizi') }}</v-btn>
              <v-btn class="default-sty" @click="handleToScatter(0)" v-if="$store.state.app.language === 'zh-CN'" style="width: 300px">{{ $t('wallet.notizi') }}</v-btn>
            </div>
            <span class="ansuces" @click="handleResh" v-if="clickTrue">{{ $t('wallet.ansuccess') }}</span>
          </div>
          <!-- Mobile wallet list -->
          <div class="walletList">
            <template v-if="chainValue === 'WAX'">
              <div class="wlright">
                <div class="scatterbox center pointer">
                  <div @click="handleCloudWallet" class="default-sty btnbig waxBtn flex">
                    WAX Cloud Wallet
                  </div>
                </div>
              </div>
            </template>
            <div class="wlistbox flex">
            </div>
          </div>
          <div v-if="wlstatus === -1 && chainValue !== 'ENU' && chainValue !== 'FIBOS'" class="no_wallet">
            
            <p>Please open your desktop wallet program first, then refresh the page</p>
            
          </div>
        </div>
      </template>
    </div>
    <span class="bottombg hidden"></span>
    <a href="https://chrome.google.com/webstore/detail/scatter/ammjpmhgckkpcamddpolhchgomcojkle" target="_blank" ref="hasScatter"></a>
    <a href="https://defibox.s3.ap-northeast-1.amazonaws.com/Scatter_v6.1.7.zip" target="_blank" ref="noScatter"></a>
  </div>
</template>

<script>
import DApp from '@/utils/wallet/index';
// import * as waxjs from "@waxio/waxjs/dist";
import { walletsPlug } from '@/utils/walletLogin.js';

export default {
  name: 'WalletLogin',
  data() {
    const dappLogo = `${window.location.origin}/static/logoicon.png`;
    // const env = process.env.NODE_ENV;
    const postUrl = `${window.location.origin}/api/wv`;

    return {
      loadingCode: false,
      walletChecked: null, // 当前选中的钱包配置
      checkLoginPost: false, // 开启轮询请求后台
      // wallets,
      walletsPlugList: [],
      wlstatus: 0, // 中间按钮操作显示
      walletName: '',
      uuID: '',
      dappLogo,
      postUrl,
      timer: {
        one: null,
        two: null
      },
      scatterLoginLoading: false, // scatter 登录中
      overdueTimestamp: '', // 二维码过期时间
      overdueCode: false, // 是否过期
      loginCodeThis: null, // 当前钱包项(二维码过期时可使用)
      resetHelpCenter: '',
      clickTrue: false, // 是否点击安装Scatter
      whatUserAgent: 87, // 87是谷歌，其他
      hrefDesktopWallet: {
        'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360028370252-%E6%A1%8C%E9%9D%A2%E9%92%B1%E5%8C%85%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B',
        'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360028370252-%E6%A1%8C%E9%9D%A2%E9%8C%A2%E5%8C%85%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B',
        en: 'https://support.newdex.net/hc/en-us/articles/360028370252-Desktop-Wallet-Tutorial',
        ko: 'https://support.newdex.net/hc/ko/articles/360028370252-Desktop-Wallet-Tutorial'
      },
      hrefTronDesktopWallet: {
        'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360031458931-%E6%A1%8C%E9%9D%A2%E9%92%B1%E5%8C%85%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B-TRON-',
        'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360031458931-%E6%A1%88%E9%A0%AD%E9%8C%A2%E5%8C%85%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B',
        en: 'https://support.newdex.net/hc/en-us/articles/360031458931-Desktop-Wallet-Tutorial-tron-',
        ko: 'https://support.newdex.net/hc/ko/articles/360031458931-Desktop-Wallet-Tutorial-tron-'
      },
      chainValue: 'WAX', // 主链选中
      chainIcon: '', // 主链选的icon
      chainOptions: [],

      foWallet: {
        name: 'FO',
        key: 'FO',
        url: '/static/img/wallet/FO.png',
        logo: '/static/img/wallet/w/FO.png',
        download: 'https://wallet.fo/',
        options: {},
        version: '3.0.0.0',
        status: 1,
        active: null
      }
    };
  },
  props: {
    walletLoginShow: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  watch: {
    walletLoginShow: function change(val) {
      if (val) {
        const bychain = sessionStorage.getItem('checkWalletByChain') || 'EOS';
        this.handleCheckChain(bychain);
        return;
      }
      this.scatterLoginLoading = false;
      this.checkLoginPost = val;
      this.walletName = '';
      this.wlstatus = 0;
    }
  },
  created() {
    this.handlePushdata();
  },
  mounted() {
    // 是否为火狐浏览器
    if (navigator.userAgent.toUpperCase().indexOf('FIREFOX') !== -1) {
      this.whatUserAgent = 70;
    }
    let bychain = sessionStorage.getItem('checkWalletByChain') || 'EOS';
    this.handleCheckChain(bychain);
  },
  beforeDestroy() {
    if (this.timer.two) {
      window.clearTimeout(this.timer.two);
    }
    if (this.timer.one) {
      window.clearTimeout(this.timer.one);
    }
  },
  methods: {
    handlePushdata() {
      this.chainOptions = [
        // EOS 主链列表
        {
          value: 'EOS',
          label: 'EOS',
          helpCenter: {
            'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/' + '360016322611-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Scatter%E7%94%B5%E8%84%91%E6%A1%8C%E9%9D%A2%E7%89%88',
            'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/' + '360016322611-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Scatter%E9%9B%BB%E8%85%A6%E6%A1%8C%E9%9D%A2%E7%89%88-',
            en: 'https://support.newdex.net/hc/en-us/articles/360016322611-How-to-Use-Scatter-',
            ko: 'https://support.newdex.net/hc/ko/articles/' + '360016322611-Scatter-%EB%8D%B0%EC%8A%A4%ED%81%AC-%ED%86%B1-%EB%B2%84%EC%A0%84%EC%9D%98-%EC%82%AC%EC%9A%A9-%EC%84%A4%EB%AA%85'
          }
        },
        // {
        //   value: "BOS",
        //   label: "BOS",
        //   helpCenter: {
        //     "zh-CN":
        //       "https://support.newdex.net/hc/zh-cn/articles/360022336152-",
        //     "zh-TW":
        //       "https://support.newdex.net/hc/zh-tw/articles/360022336152-%E5%A6%82%E4%BD%95%E5%9C%A8Scatter%E4%B8%AD%E9%85%8D%E5%AF%98BOS%E7%B6%B2%E7%B5%A1",
        //     en:
        //       "https://support.newdex.net/hc/en-us/articles/360022336152-How-to-Configure-BOS-Network-in-Scatter",
        //     ko:
        //       "https://support.newdex.net/hc/ko/articles/360022336152-How-to-Configure-BOS-Network-in-Scatter"
        //   }
        // },
        // {
        //   value: "TELOS",
        //   label: "TELOS",
        //   helpCenter: {
        //     "zh-CN":
        //       "https://support.newdex.net/hc/zh-cn/articles/360027755432-%E5%A6%82%E4%BD%95%E5%9C%A8Scatter%E4%B8%AD%E9%85%8D%E7%BD%AETELOS%E7%BD%91%E7%BB%9C",
        //     "zh-TW":
        //       "https://support.newdex.net/hc/zh-tw/articles/360027755432-%E5%A6%82%E4%BD%95%E5%9C%A8Scatter%E4%B8%AD%E9%85%8D%E5%AF%98TELOS%E7%B6%B2%E7%B5%A1",
        //     en:
        //       "https://support.newdex.net/hc/en-us/articles/360027755432-How-to-Configure-TEOLS-Network-in-Scatter",
        //     ko:
        //       "https://support.newdex.net/hc/ko/articles/360027755432-How-to-Configure-TEOLS-Network-in-Scatter"
        //   }
        // },
        // {
        //   value: "MEETONE",
        //   label: "MEETONE",
        //   helpCenter: {
        //     "zh-CN":
        //       "https://support.newdex.net/hc/zh-cn/articles/360024662611-%E5%A6%82%E4%BD%95%E5%9C%A8Scatter%E4%B8%AD%E9%85%8D%E7%BD%AEMEETONE%E7%BD%91%E7%BB%9C",
        //     "zh-TW":
        //       "https://support.newdex.net/hc/zh-tw/articles/360024662611-%E5%A6%82%E4%BD%95%E5%9C%A8Scatter%E4%B8%AD%E9%85%8D%E5%AF%98MEET-ONE%E7%B6%B2%E7%B5%A1",
        //     en:
        //       "https://support.newdex.net/hc/en-us/articles/360024662611-How-to-configure-MEET-ONE-network-in-Scatter",
        //     ko:
        //       "https://support.newdex.net/hc/ko/articles/360024662611-How-to-configure-MEET-ONE-network-in-Scatter"
        //   }
        // },
        // {
        //   value: 'ENU',
        //   label: 'ENU',
        //   helpCenter: {
        //     'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360024831012-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8IronMan%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E7%89%88',
        //     'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360024831012-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8IronMan%E6%B5%81%E8%A6%BD%E5%99%A8%E5%A4%96%E6%8E%9B%E7%A8%8B%E5%BC%8F%E7%89%88',
        //     en: 'https://support.newdex.net/hc/en-us/articles/360024831012-How-to-Use-IronMan-Browser-Extension',
        //     ko: 'https://support.newdex.net/hc/ko/articles/360024831012-How-to-Use-IronMan-Browser-Extension',
        //   },
        // },
        // {
        //   value: 'FIBOS',
        //   label: 'FIBOS',
        //   helpCenter: {
        //     'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360025931151-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8IronMan%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6%E5%AF%BC%E5%85%A5FIBOS%E8%B4%A6%E6%88%B7',
        //     'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360025931151-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8IronMan%E6%B5%81%E8%A6%BD%E5%99%A8%E5%A4%96%E6%8E%9B%E7%A8%8B%E5%BC%8F%E5%B0%8E%E5%85%A5FIBOS%E5%B8%B3%E6%88%B6',
        //     en: 'https://support.newdex.net/hc/en-us/articles/360025931151-How-to-Configure-FIBOS-Network-in-IroMan',
        //     ko: 'https://support.newdex.net/hc/ko/articles/360025931151-How-to-Configure-FIBOS-Network-in-IroMan',
        //   },
        // },
        {
          value: 'WAX',
          label: 'WAX',
          helpCenter: {
            'zh-CN': 'https://support.newdex.net/hc/zh-cn/articles/360037974631',
            'zh-TW': 'https://support.newdex.net/hc/zh-tw/articles/360037974631',
            en: 'https://support.newdex.net/hc/en-us/articles/360037974631',
            ko: 'https://support.newdex.net/hc/ko/articles/360037974631'
          }
        }
      ];
    },
    handleToScatter(flg) {
      this.clickTrue = true;
      if (flg) {
        this.$refs.hasScatter.click();
        return;
      }
      this.$refs.noScatter.click();
    },
    // 云钱包登录
    handleCloudWallet() {
      this.wlstatus = 0;
      let waxParams = {
        embed: this.$embed || false,
        chain: 'wax',
        channel: 'cloudwallet',
        // channel: 'wax', // 2022/01/22  因无法正常交易回退到之前版本
        node: this.$store.state.sys.node
      };
      // start 2022/01/22  因无法正常交易回退到之前版本
      // DApp.init(waxParams);
      // let item = {
      //   name: 'Wax'
      // };
      // this.handleScatterPower(item);
      // end 2022/01/22  因无法正常交易回退到之前版本

      // start 2022/01/21 晚测试收藏正确的版本
      // let item = {
      //   name: 'Wax'
      // };
      DApp.init(waxParams, () => {
        this.handleGetAccount();
      });
      // end 2022/01/21 晚测试收藏正确的版本

      // this.handleScatterPower(item);

      // const params = { chain: this.chain }
      // Wax.init(params);
      // this.handleGetAccount();
    },
    // scatter 登录
    async handleScatterPower(item) {
      this.scatterLoginLoading = true;
      let chainParams = {
        embed: this.$embed || false,
        chain: 'eos',
        node: this.$store.state.sys.node,
        channel: item.name.toLowerCase()
      };
      // console.log(chainParams,'chainParams');
      if (item.name === 'Anchor') {
        // 获取免CPU白名单接口（那些钱包是可以使用免CPU的） 都是白名单
        this.$store.dispatch('setIsFreeCpuWhite', chainParams.channel);
        // 实例 Dapp
        DApp.init(chainParams, () => {
          this.handleGetAccount();
        });
        return;
      }
      // 是否打开scatter
      const scatterInstall = sessionStorage.getItem('scatterInstall');
      if (scatterInstall === 'Scatter connected') {
        try {
          // 如果有账号先退出
          const result = await this.handleScatterOut();
          if (result === 'anchor') return;
          this.handleGetAccount();
        } catch (error) {
          this.$store.dispatch('setAccountInfo', {});
          window.location.reload();
          console.log(error); // eslint-disable-line
        }
        return;
      }
      this.wlstatus = -1;
      this.handleScatterOut();
    },
    // 获取用户信息
    async handleGetAccount() {
      const account = await DApp.getAccount();
      if (account && account.account) {
        this.$store.dispatch('setAccountInfo', account || {});
        this.handleCloseLoginWallet();
      }
      this.wlstatus = 0;
      this.scatterLoginLoading = false;
      // this.handleCloseLoginWallet();
    },

    // 登录错误回调
    handleGetIdentityErrorBack() {
      this.handleCloseLoginWallet(); // 关闭登录弹出窗
      const route = this.$route;
      if (route && route.meta && route.meta.isUser) {
        this.$router.push('/');
      }
    },

    // 先退出scatter
    async handleScatterOut() {
      // 非云钱包登录操作
      if (DApp.chain !== 'eos') {
        const result = await DApp.forgetIdentity();
        console.log(result, '先退出scatter'); // eslint-disable-line
        if (result === 'anchor') {
          this.$store.dispatch('setAccountInfo', {});
          window.location.reload();
          return result;
        }
      }
      this.$store.dispatch('setAccountInfo', {});
      const route = this.$route;
      if (route && route.meta && route.meta.isUser) {
        this.$router.push('/');
      }
    },
    // 关闭登录弹窗
    handleCloseLoginWallet() {
      this.$emit('listenWalletLoginClose', false);
    },

    // 刷新页面
    handleResh() {
      window.location.reload();
    },

    // 主链选择
    handleCheckChain(val) {
      this.chainValue = val;
      this.resetHelpCenter = this.chainOptions.find((v) => v.value === val).helpCenter;
      this.scatterLoginLoading = false;
      this.wlstatus = 0;
      // sessionStorage.setItem('checkWalletByChain', val);
      this.walletsPlugList = walletsPlug[val] || [];
    }

    // 链的logo
    // chainLogo(val) {
    //   return chainLogo(val);
    // }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

$-clolor: #feb75e;
$-clolor2: RGBA(20, 159, 252, 1);
$-clolor3: rgb(210, 220, 234);
.colorThis {
  cursor: pointer;
}

.fontColor {
  color: #333;
  font-size: 15px;
}

.walletLogin {
  position: relative;
  padding: 20px;
  .close {
    position: absolute;
    height: 30px;
    width: 30px;
    text-align: center;
    right: 0px;
    top: 0px;
    cursor: pointer;
  }
  .chainbox {
    position: absolute;
    top: -20px;
    left: 10px;
    z-index: 999;
    // cursor: pointer;
    img {
      width: 19px;
      display: inline-block;
      vertical-align: middle;
      margin-bottom: 2px;
      margin-left: -1px;
      background: #fff;
      border-radius: 50%;
    }

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .bottombg {
    position: absolute;
    // width: 104.5%;
    height: 15px;
    bottom: -30px;
    left: -20px;
    background: $-clolor;
  }
}

.optionChain {
  img {
    width: 19px;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  span {
    display: inline-block;
    vertical-align: middle;
  }
}
.tit {
  font-size: 16px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 24px;
}
.wlainbox {
  background: #fff;
  position: relative;
  // height: 380px;
  justify-content: space-around;
  // align-items: flex-start;

  .wlleft,
  .wlright {
    // width: 50%;
  }

  .wlleft {
    text-align: center;
  }

  .scatterbox {
    .loginCaption {
      margin-top: -17px;
      margin-bottom: 29px;
    }
  }
  .no_wallet {
    text-align: center;
    font-size: 14px;
    color: #888;
    .colorThis {
      color: #888;
    }
  }
}

.scatterlogo {
  width: 115px;
  height: 90px;
  margin: 0 auto;
  border-radius: 50%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  i {
    font-size: 90px;
    color: $-clolor2;
  }
}

.supportList {
  // padding: 0px 40px 0 40px;
  // width: 430px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  flex-wrap: wrap;
  .moreList {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    // max-width: 430px;
  }

  .supportListImg {
    cursor: pointer;
    // width: 132px;
    // min-width: 132px;
    width: 100%;
    height: 54.5px;
    overflow: hidden;
    border: 1px solid #eff0f1;
    margin-bottom: 10.5px;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 15px;
    font-weight: 600;
    color: #222222;
    svg {
      margin-right: 6px;
    }
    &:nth-child(3n) {
      margin-right: 0px;
    }
    // &:nth-child(n + 4) {
    //   margin-bottom: 0px;
    // }

    img {
      width: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .walletLogo {
      width: 26px;
      height: 26px;
      margin-right: 6px;
    }
    &:last-of-type {
      margin-bottom: 10.5px;
    }
  }
}

.default-sty {
  margin: auto;
  border: 1px solid $-clolor;
  color: $-clolor;
  font-weight: normal;
}

.defaultno {
  background: $-clolor;
  color: #fff;
}

.walbtn {
  padding: 0;
  position: relative;
  font-weight: normal;

  img {
    vertical-align: top;
  }

  &:active,
  &:focus {
    color: #2380c4;
    border-color: #dcdfe6;
    background-color: transparent;
    outline: none;
  }

  &.active {
    color: #2380c4;
    border-color: #beddf4;
    outline: none;
    background-color: #e9f4fb;
  }

  &.nosure:active,
  &.nosure:focus,
  &.nosure:hover {
    border-color: #dcdfe6;
    background-color: #fff;
    outline: none;
    cursor: default;
  }

  .tiob {
    position: absolute;
    font-size: 12px;
    right: 0;
    bottom: 0;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 3px;
    background: RGBA(176, 176, 176, 0.8);
    color: #fff;
    padding: 4px 2px;

    &.tiobActive {
      background: RGBA(254, 80, 49, 0.8);
    }
  }
}

.btnbig {
  width: 100%;
  height: 54.5px;
  overflow: hidden;
  border: 1px solid #eff0f1;
  margin-bottom: 10.5px;
  border-radius: 10px;
  padding: 0 20px;

  font-size: 15px;
  font-weight: 600;
  color: #222222;
  svg {
    margin-right: 6px;
  }
}

.tilist {
  p {
    position: relative;
    padding-right: 30px;
    min-height: 25px;
    padding-left: 10px;
    text-align: left;
    color: #999;

    i {
      top: 8px;
      left: 0;
      position: absolute;
      display: inline-block;
      color: $-clolor;
      background: $-clolor;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      vertical-align: middle;
      margin-top: -1px;
      margin-right: 5px;
    }
  }
}

.wlright {
  h2 {
    font-size: 16px;
    text-align: center;
    margin: 0 0 30px 0;
    color: #333;
    font-weight: normal;
  }
}

.walletList {
  .searchTip {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
.el-icon-more {
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: $-clolor3;
  border-radius: 50%;
  margin: 0 6px;
  color: $-clolor3;
  cursor: pointer;
  &:hover {
    color: $-clolor;
    border-color: $-clolor;
  }
}
// 每个宽度44px
.wlistbox {
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  margin: 0 auto -5px;
  button {
    margin-bottom: 20px;
    margin-left: 0;
  }
  i {
    font-size: 22px;
  }
  .walletitem {
    width: 32px;
    height: 32px;
    margin: 0 10px 10px;
    cursor: pointer;

    img {
      vertical-align: top;
      width: 100%;
    }
  }
}
.wlcenter {
  position: absolute;
  height: 100%;
  width: 60px;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  z-index: 9;

  .huo {
    width: 40px;
    position: absolute;
    padding: 10px;
    left: 50%;
    top: 50%;
    transform: translate3D(-50%, -50%, 0);
    background: #fff;
    z-index: 9;
    color: #999;
    text-align: center;
  }

  .btnback {
    width: 83px;
    position: absolute;
    text-align: center;
    top: 1px;
    color: #666;
    z-index: 9;
    cursor: pointer;
    font-size: 16px;
    top: -15px;

    &:hover {
      color: $-clolor;
    }
  }

  .btnleft {
    left: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .btnright {
    left: -420px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::after {
    content: ' ';
    background: #dedede;
    width: 1px;
    height: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    z-index: 8;
  }
}

.fontcolor3 {
  color: #333 !important;
}
.fontcolor6 {
  color: #666 !important;
}
.fontcolor9 {
  color: #999 !important;
}
.walletCode {
  // min-height: 214px;
  text-align: center;

  .codebox {
    position: relative;
    width: 150px;
    height: 150px;
    margin: auto;

    .canvasbox {
      width: 100%;
    }

    img {
      width: 77px;
    }

    .logocode {
      padding: 2px;
      position: absolute;
      width: 26px;
      height: 26px;
      left: 50%;
      top: 50%;
      border-radius: 5px;
      background: #fff;
      transform: translate3D(-50%, -50%, 0);
    }

    .overdueCode {
      background: rgba(255, 255, 255, 0.9);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      span {
        min-width: 100%;
      }

      a {
        display: block;
      }
    }
  }

  p {
    color: #999;
    padding: 10px 0;
  }

  a {
    color: $-clolor;
  }

  .activebox {
    font-size: 12px;
    display: inline-block;
    padding: 6px 20px;
    border-radius: 20px;
    margin: 10px 0 0;
    background: RGBA(255, 239, 239, 1);
    color: RGBA(255, 70, 70, 1);
  }
}

.scatteranz {
  margin: -10px 0 0 0;

  p {
    color: #666;
    font-size: 12px;
    padding: 5px 0;
  }

  .ansuces {
    display: inline-block;
    float: right;
    cursor: pointer;
    color: $-clolor;
    margin-top: 25px;
    margin-right: 65px;
  }
}
.walletmain {
  position: relative;
  padding: 13px 0 0 0;
  .el-tooltip {
    display: inline-block;
    height: 32px;
    margin: 0 0 13px 12px;
    cursor: pointer;
  }
  img {
    vertical-align: top;
  }
  .walletlayer {
    position: absolute;
    top: -1px;
    right: -10px;
    width: 11px;
    height: calc(100% + 2px);
    background: #fff;
    box-shadow: 5px 0px 8px -4px rgba(0, 0, 0, 0.1);
    border-radius: 0 4px 4px 0;
    border: 1px solid #ebeef5;
    border-left: none;
  }
}
// bos登录不能扫码蒙版
.walletLogin ::v-deep .payMask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  z-index: 100;
  div {
    font-size: 14px;

    p {
      padding: 0;
      margin-bottom: 10px;
      color: #333;
    }
  }
}
// 波场样式
.tronLoginClass {
  .wlleft {
    width: 100%;
  }
}
.theme-1B1D27 {
  .fontColor {
    color: rgba(255, 255, 255, 0.8);
  }
  .btnbig {
    border-color: #4e5b85;
    background: transparent;
    &:hover {
      color: white;
      background: #278eda;
    }
  }
  .wlright {
    h2 {
      color: #fff;
    }
  }

  .scatteranz {
    p {
      color: #fff;
    }
  }

  .tilist {
    p {
      color: rgba(255, 255, 255, 0.8);
      i {
      }
    }
  }

  .wlcenter {
    .huo {
      background: RGBA(33, 42, 63, 1);
      color: rgba(255, 255, 255, 0.8);
    }

    .btnback {
      color: rgba(255, 255, 255, 0.8);

      &:hover {
        color: $-clolor;
      }
    }

    &::after {
      background: #dedede;
    }
  }

  .fontcolor6,
  .fontcolor3,
  .fontcolor9 {
    color: rgba(255, 255, 255, 0.8) !important;
  }
}

::v-deep .el-tooltip__popper.is-light {
  border-color: #eee !important;
}
</style>
