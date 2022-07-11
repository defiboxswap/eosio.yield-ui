<template>
  <div>
    <div class="ProtocolsDetails" v-if="isMobile" :class="{ noRole: !role }">
      <div class="ProtocolsDetails-layout">
        <div class="ProtocolsDetails-title">
          {{ $t("yield.yield7") }}
          <span>
            <span v-if="projectName">> {{ projectName }}</span>
          </span>
        </div>

        <div v-if="projectInfo">
          <div class="ProtocolsDetails-projectList">
            <div class="projectList-box">
              <div class="flex">
                <div class="box-left flex">
                  <img :src="projectInfo.logo" class="box-avatar" :onerror="errImg" />
                </div>
                <div class="flex-1">
                  <div class="box-name">{{ projectInfo.name }}</div>
                  <div class="flex flex-wrap">
                    <div class="box-label" style="text-align: center">{{ handleCategory(projectInfo.category) }}</div>
                    <!-- <div class="box-label">Corss-chain</div> -->
                  </div>
                </div>
              </div>

              <div class="box-data">
                <div class="flex">
                  <div class="data-box flex-1">
                    <!-- Ranking -->
                    <div class="data-name">{{ $t("yield.yield91") }}</div>
                    <div class="data-number">{{ projectInfo.rank }}</div>
                  </div>
                  <div class="data-box flex-1">
                    <div class="data-name">{{ $t("yield.yield117") }}</div>
                    <div class="data-number">
                      <a class="info-text" :href="projectInfo.website" target="_blank">
                        <span v-if="projectInfo.website">{{ handleHttp(projectInfo.website) }}</span>
                        <span v-else>-</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <div class="data-box flex-1">
                    <div class="data-name">{{ $t("yield.yield92") }}</div>
                    <div class="data-number">
                      <span v-if="projectInfo.contracts" @click="openWindow('https://bloks.io/account/' + projectInfo.contracts)">{{ projectInfo.contracts }}</span>
                      <span v-else>-</span>
                    </div>
                  </div>
                  <!-- <div class="data-box flex-1">
                    <div class="data-name">{{ $t("yield.yield55") }}</div>
                    <div class="data-number">
                      <span v-if="projectInfo.cmc">{{ projectInfo.cmc }}</span>
                      <span v-else>-</span>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>

          <div class="ProtocolsDetails-des">{{ projectInfo.description }}</div>

          <div class="ProtocolsDetails-data">
            <div id="view1Data"></div>
            <div class="data-view">
              <div class="flex" style="margin-bottom: 10px">
                <div class="flex-1">
                  <div class="view-title">{{ $t("yield.yield41") }}</div>
                  <div class="view-text">${{ getKMBUnit(overViewData.tvl_usd, 2) }}</div>
                </div>
                <div class="flex-1">
                  <div class="view-title">{{ $t("yield.yield42") }}</div>
                  <div class="view-text">{{ overViewData.tvl_usd_change }}</div>
                </div>
              </div>

              <div class="flex">
                <div class="flex-1">
                  <div class="view-title">{{ $t("yield.yield54") }}</div>
                  <div class="view-text">{{ getKMBUnit(overViewData.agg_rewards) }}</div>
                </div>
                <div class="flex-1"></div>
              </div>
            </div>
          </div>

          <div class="ProtocolsDetails-overview">
            <div class="overview-title">Overview</div>
            <div class="overview-box">
              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield143") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.tokenCode === null">-</span>
                    <template v-else>
                      <span v-if="projectInfo.tokenCode">{{ projectInfo.tokenCode }}</span>
                      <span v-else>-</span>
                    </template>
                  </div>
                </div>
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield142") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.tokenSymcode === null">-</span>
                    <template v-else>
                      <span v-if="projectInfo.tokenSymcode">{{ projectInfo.tokenSymcode }}</span>
                      <span v-else>-</span>
                    </template>
                  </div>
                </div>
              </div>

              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield55") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.marketcap">{{ projectInfo.marketcap }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield73") }}</div>
                  <div class="box3-text">
                    <span v-if="!projectInfo.recover">-</span>
                    <span v-else>{{ projectInfo.recover }}</span>
                  </div>
                </div>
              </div>

              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield73") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.otherInfo.open_source === null">-</span>
                    <template v-else>
                      <span v-if="projectInfo.otherInfo.open_source">yes</span>
                      <span v-else>no</span>
                    </template>
                  </div>
                </div>
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield69") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.otherInfo.multi_sig === null">-</span>
                    <template v-else>
                      <span v-if="projectInfo.otherInfo.multi_sig">yes</span>
                      <span v-else>no</span>
                    </template>
                  </div>
                </div>
              </div>

              <div class="box-line"></div>

              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield135") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.circulating">{{ projectInfo.circulating }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield136") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.maxSupply">{{ projectInfo.maxSupply }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>

              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">Auditing report</div>
                  <div class="box3-text">
                    <template v-if="projectInfo.otherInfo.audit_report.length > 0">
                      <div class="curPoint" @click="openWindow(url)" v-for="(url, index) in projectInfo.otherInfo.audit_report" :key="index">report{{ index + 1 }}</div>
                    </template>
                    <div v-else>-</div>
                  </div>
                </div>
                <!-- <div class="box-w">
                  <div class="box3-title">MULTI-SIG</div>
                  <div class="box3-text">YES</div>
                </div> -->
              </div>
            </div>

            <div class="overview-box" style="margin-top: 15px">
              <div class="flext">
                <div class="box-w">
                  <!-- <div class="box3-title">token</div> -->
                  <div class="box3-text flex" @click="openWindow(projectInfo.cmc)">
                    <img src="@/assets/img/ProtocolsDetails/CoinMarketCap.png" alt="" />
                    <span v-if="projectInfo.cmc">{{ handleHttp(projectInfo.cmc) }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
                <div class="box-w">
                  <div class="box3-text flex" @click="openWindow(projectInfo.coinGecko)">
                    <img src="@/assets/img/ProtocolsDetails/CoinGecko.png" alt="" />
                    <span v-if="projectInfo.coinGecko">{{ handleHttp(projectInfo.coingecko) }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>

              <div class="flext">
                <div class="box-w">
                  <div class="box3-text flex" @click="openWindow(projectInfo.defiLlama)">
                    <img src="@/assets/img/ProtocolsDetails/DefiLlama.png" />
                    <!-- <span>DefiLlama</span> -->
                    <span v-if="projectInfo.defillama">{{ handleHttp(projectInfo.defillama) }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
                <div class="box-w">
                  <!-- <div class="box3-title">MULTI-SIG</div>
                  <div class="box3-text">YES</div> -->
                  <div class="box3-text flex" @click="openWindow(projectInfo.dappradar)">
                    <img src="@/assets/img/ProtocolsDetails/DappRadar.png" />
                    <!-- <span>DappRadar</span> -->
                    <span v-if="projectInfo.dappradar">{{ handleHttp(projectInfo.dappradar) }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>

              <div class="box-line"></div>

              <div class="flext">
                <div class="box-w">
                  <div class="box3-text flex" @click="openWindow(projectInfo.twitter)">
                    <img src="@/assets/img/ProtocolsDetails/Twitter.png" />
                    <span>{{ handleHttp(projectInfo.twitter) }}</span>
                  </div>
                </div>
                <div class="box-w">
                  <div class="box3-text flex" @click="openWindow(projectInfo.discord)">
                    <img src="@/assets/img/ProtocolsDetails/Discord.png" />
                    <span>{{ handleHttp(projectInfo.discord) }}</span>
                  </div>
                </div>
              </div>

              <div class="flext">
                <div class="box-w">
                  <div class="box3-text flex" @click="openWindow(projectInfo.telegram)">
                    <img src="@/assets/img/ProtocolsDetails/Telegram.png" />
                    <span>{{ handleHttp(projectInfo.telegram) }}</span>
                  </div>
                </div>
                <!-- <div class="box-w">
                  <div class="box3-title">MULTI-SIG</div>
                  <div class="box3-text">YES</div>
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <BaseNoData></BaseNoData>
        </div>
      </div>

      <div class="ProtocolsDetails-footer" v-if="role">
        <template v-if="role == 2">
          <template v-if="projectInfo.status == 'active'">
            <div class="footer-text1">{{ $t("yield.yield96") }}</div>
            <div class="footer-text2">{{ rewards }}</div>
          </template>
          <template v-if="projectInfo.status == 'denied'">
            <div style="align-self: center; color: #333">
              <!-- denied -->
              {{ $t("yield.yield139") }}
            </div>
          </template>
          <div>
            <div style="margin: 10px 0">
              {{ $t("yield.yield88") }}:
              <span style="font-weight: bold">{{ $t(statusToLanguage[projectInfo.status]) }}</span>
            </div>
          </div>

          <div class="flex flex-jus-center">
            <!-- CLAIM -->
            <v-btn class="footer-button1" :loading="claimLoading" @click="handleClaim" v-if="projectInfo.status == 'active'">{{ $t("yield.yield97") }}</v-btn>
            <!-- EDIT -->
            <v-btn class="footer-button2" @click="gotoEdit">{{ $t("yield.yield98") }}</v-btn>
          </div>
        </template>
        <template v-else-if="role == 1">
          <div class="flex flex-jus-center">
            <!-- Allow -->
            <v-btn class="footer-button1" :loading="claimLoading" @click="handleAllow">{{ $t("yield.yield103") }}</v-btn>
            <!-- Refuse -->
            <v-btn class="footer-button2" :loading="claimLoading" @click="handleRefuse">{{ $t("yield.yield104") }}</v-btn>
          </div>
        </template>
      </div>
    </div>
    <div class="ProtocolsDetailsPC" v-else>
      <div class="ProtocolsDetailsPC-overLay"></div>
      <div class="ProtocolsDetailsPC-overLayPatch ProtocolsDetailsPC-layout">
        <!-- Projects -->
        <div class="ProtocolsDetailsPC-title">
          {{ $t("yield.yield7") }}
          <span>
            <span v-if="projectName">> {{ projectName }}</span>
          </span>
        </div>

        <div v-if="projectInfo" v-loading="loading">
          <div class="ProtocolsDetailsPC-box1">
            <div class="flext">
              <div class="box1-left">
                <div class="flex">
                  <img :src="projectInfo.logo" class="box1-logo" :onerror="errImg" />
                  <div>
                    <div class="box1-text1">{{ projectInfo.name }}</div>
                    <div class="flex flex-wrap">
                      <div class="box1-label">{{ handleCategory(projectInfo.category) }}</div>
                      <!-- <div class="box1-label">Corss-chain</div> -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="box1-line"></div>

              <div class="flex-1">
                <div class="box1-info flext flex-jus-between">
                  <div>
                    <!-- Ranking -->
                    <div class="info-title">{{ $t("yield.yield91") }}</div>
                    <div class="info-text">{{ projectInfo.rank }}</div>
                  </div>
                  <div>
                    <!-- <div v-if="projectInfo.website"> -->
                    <!-- website -->
                    <div class="info-title">{{ $t("yield.yield117") }}</div>
                    <a class="info-text" :href="projectInfo.website" target="_blank">
                      <span v-if="projectInfo.website">{{ handleHttp(projectInfo.website) }}</span>
                      <span v-else>-</span>
                    </a>
                  </div>
                  <div>
                    <!-- Protocols address -->
                    <div class="info-title">{{ $t("yield.yield92") }}</div>
                    <div class="info-text curPoint">
                      <span v-if="projectInfo.contracts" @click="openWindow('https://bloks.io/account/' + projectInfo.contracts)">{{ projectInfo.contracts }}</span>
                      <span v-else>-</span>
                    </div>
                  </div>
                  <div>
                    <!-- Market Cap -->
                    <!-- <div class="info-title">{{ $t("yield.yield55") }}</div>
                    <div class="info-text">
                      <span v-if="projectInfo.cmc">{{ projectInfo.cmc }}</span>
                      <span v-else>-</span>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="box-des" v-if="projectInfo.description">{{ projectInfo.description }}</div>
          </div>

          <div class="ProtocolsDetailsPC-box2 flex">
            <div class="box2-left">
              <div class="">
                <div class="flex">
                  <div class="box2-circle"></div>
                  <div class="">{{ $t("yield.yield41") }}</div>
                </div>
                <div class="box2-number">${{ getKMBUnit(overViewData.tvl_usd, 2) }}</div>
              </div>

              <div class="">
                <div class="flex">
                  <div class="box2-circle"></div>
                  <div class="">{{ $t("yield.yield42") }}</div>
                </div>
                <div class="box2-number">{{ overViewData.tvl_usd_change }}</div>
              </div>

              <div class="">
                <div class="flex">
                  <div class="box2-circle"></div>
                  <div class="">{{ $t("yield.yield54") }}</div>
                </div>
                <div class="box2-number">{{ getKMBUnit(overViewData.agg_rewards) }}</div>
              </div>
            </div>
            <div id="view1Data"></div>
          </div>

          <div>
            <!-- Information -->
            <div class="ProtocolsDetailsPC-box3Title">{{ $t("yield.yield118") }}</div>

            <div class="flex flex-jus-between">
              <div class="ProtocolsDetailsPC-box3">
                <div class="flext">
                  <div class="box3-left">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield143") }}</div>
                      <div class="box3-text">
                        <span v-if="projectInfo.tokenCode === null">-</span>
                        <template v-else>
                          <span v-if="projectInfo.tokenCode">{{ projectInfo.tokenCode }}</span>
                          <span v-else>-</span>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div class="box3-center flext flex-jus-between">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield142") }}</div>
                      <div class="box3-text">
                        <!-- <span v-if="projectInfo.otherInfo.main_contract === null">-</span>
                        <span v-else>{{ projectInfo.otherInfo.main_contract }}</span> -->
                        <span v-if="projectInfo.tokenSymcode === null">-</span>
                        <template v-else>
                          <span v-if="projectInfo.tokenSymcode">{{ projectInfo.tokenSymcode }}</span>
                          <span v-else>-</span>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div class="box3-right flext flex-jus-between">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield55") }}</div>
                      <div class="box3-text">
                        <span v-if="projectInfo.marketcap">${{ projectInfo.marketcap }}</span>
                        <span v-else>-</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flext">
                  <div class="box3-left">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield135") }}</div>
                      <div class="box3-text">
                        <span v-if="projectInfo.circulating">{{ projectInfo.circulating }}</span>
                        <span v-else>-</span>
                      </div>
                    </div>
                  </div>
                  <div class="box3-center flext flex-jus-between">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield136") }}</div>
                      <div class="box3-text">
                        <span v-if="projectInfo.maxSupply">{{ projectInfo.maxSupply }}</span>
                        <span v-else>-</span>
                      </div>
                    </div>
                  </div>
                  <div class="box3-right flext flex-jus-between"></div>
                </div>
              </div>
              <div class="ProtocolsDetailsPC-box3">
                <div class="flext">
                  <div class="box3-left">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield73") }}</div>
                      <div class="box3-text">
                        <span v-if="!projectInfo.recover">-</span>
                        <span v-else>{{ projectInfo.recover }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="box3-center flext flex-jus-between">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield72") }}</div>
                      <div class="box3-text">
                        <span v-if="projectInfo.otherInfo.open_source === null">-</span>
                        <template v-else>
                          <span v-if="projectInfo.otherInfo.open_source">yes</span>
                          <span v-else>no</span>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div class="box3-right flext flex-jus-between">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield69") }}</div>
                      <div class="box3-text">
                        <span v-if="projectInfo.otherInfo.multi_sig === null">-</span>
                        <template v-else>
                          <span v-if="projectInfo.otherInfo.multi_sig">yes</span>
                          <span v-else>no</span>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flext">
                  <div class="box3-center">
                    <div>
                      <div class="box3-title">Auditing report</div>
                      <div class="box3-text flex" style="gap: 10px">
                        <template v-if="projectInfo.otherInfo.audit_report.length > 0">
                          <span class="curPoint" @click="openWindow(url)" v-for="(url, index) in projectInfo.otherInfo.audit_report" :key="index">report{{ index + 1 }}</span>
                        </template>
                        <span v-else>-</span>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="box3-center flext flex-jus-between">
                    <div>
                      <div class="box3-title">OPEN SURCE</div>
                      <div class="box3-text">NO</div>
                    </div>
                  </div> -->
                  <!-- <div class="box3-right flext flex-jus-between"></div> -->
                </div>
              </div>
            </div>

            <div class="ProtocolsDetailsPC-box4 flex">
              <div class="flex-1 flext flex-column flex-jus-between" style="height: 103px">
                <div class="flex flex-jus-between" style="width: 100%">
                  <div class="flex-1 box4-w flex" @click="openWindow(projectInfo.cmc)">
                    <img src="@/assets/img/ProtocolsDetails/CoinMarketCap.png" class="box4-img" />
                    <span v-if="projectInfo.cmc">{{ handleHttp(projectInfo.cmc) }}</span>
                    <span v-else>-</span>
                  </div>
                  <div class="flex-1 box4-w flex" @click="openWindow(projectInfo.coingecko)">
                    <img src="@/assets/img/ProtocolsDetails/CoinGecko.png" class="box4-img" />
                    <!-- <span>CoinGecko</span> -->
                    <span v-if="projectInfo.coingecko">{{ handleHttp(projectInfo.coingecko) }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
                <div class="flex flex-jus-between" style="width: 100%">
                  <div class="flex-1 box4-w flex" @click="openWindow(projectInfo.defillama)">
                    <img src="@/assets/img/ProtocolsDetails/DefiLlama.png" class="box4-img" />
                    <!-- <span>DefiLlama</span> -->
                    <span v-if="projectInfo.defillama">{{ handleHttp(projectInfo.defillama) }}</span>
                    <span v-else>-</span>
                  </div>
                  <div class="flex-1 box4-w flex" @click="openWindow(projectInfo.dappradar)">
                    <img src="@/assets/img/ProtocolsDetails/DappRadar.png" class="box4-img" />
                    <!-- <span>DappRadar</span> -->
                    <span v-if="projectInfo.dappradar">{{ handleHttp(projectInfo.dappradar) }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>
              <div class="box4-line"></div>
              <div class="box4-right flex-1 flext flex-column flex-jus-between" style="height: 103px">
                <div class="flex flex-jus-between" style="width: 100%">
                  <div class="flex-1 box4-w flex" @click="openWindow(projectInfo.twitter)">
                    <img src="@/assets/img/ProtocolsDetails/Twitter.png" class="box4-img" />
                    <span>{{ handleHttp(projectInfo.twitter) }}</span>
                  </div>
                  <div class="flex-1 box4-w flex" @click="openWindow(projectInfo.discord)">
                    <img src="@/assets/img/ProtocolsDetails/Discord.png" class="box4-img" />
                    <span>{{ handleHttp(projectInfo.discord) }}</span>
                  </div>
                </div>
                <div class="flex flex-jus-between" style="width: 100%">
                  <div class="flex-1 box4-w flex" @click="openWindow(projectInfo.telegram)">
                    <img src="@/assets/img/ProtocolsDetails/Telegram.png" class="box4-img" />
                    <span>{{ handleHttp(projectInfo.telegram) }}</span>
                  </div>
                  <div class="flex-1 box4-w flex"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="ProtocolsDetailsPC-footer" v-if="role && projectInfo">
            <div class="ProtocolsDetailsPC-layout flex flex-align-center flex-jus-between" v-if="role == 2">
              <div class="flext">
                <div v-if="projectInfo.status == 'active'">
                  <!-- Rewards Available -->
                  <div class="footer-text1">{{ $t("yield.yield96") }}</div>
                  <div class="footer-text2 flex">
                    <div>{{ rewards }}</div>
                  </div>
                </div>

                <div v-if="projectInfo.status == 'denied'" style="align-self: center; color: #333; margin-right: 140px">
                  <!-- denied -->
                  {{ $t("yield.yield139") }}
                </div>

                <div style="margin-left: 80px">
                  <!-- State -->
                  <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                  <div class="footer-text2 flex">
                    <div>{{ $t(statusToLanguage[projectInfo.status]) }}</div>
                  </div>
                </div>
              </div>

              <div class="flex">
                <!-- CLAIM -->
                <v-btn class="footer-button1" :loading="claimLoading" @click="handleClaim" v-if="projectInfo.status == 'active'">{{ $t("yield.yield97") }}</v-btn>
                <!-- EDIT -->
                <v-btn class="footer-button2" @click="gotoEdit">{{ $t("yield.yield98") }}</v-btn>
              </div>
            </div>

            <template v-else-if="role == 1">
              
              <div class="ProtocolsDetailsPC-layout flex flex-align-center flex-jus-end" >
                <div class="flex">
                  <div class="footer-Category">
                    <div class="footer-text1">{{ $t("yield.yield86") }}</div>
                    <div class="footer-text2 flex" style="margin-right: 50px">
                      <div>{{ handleCategory(projectInfo.category) }}</div>
                    </div>
                  </div>
                  <!-- Modify -->
                  <v-btn class="footer-button1" :loading="claimLoading" @click="categoryDialogVisible = true" style="background: #1c1dff">{{ $t("yield.yield168") }}</v-btn>

                  <div class="footer-line"></div>
                </div>

                <div class="flex">
                  <div class="footer-Category">
                    <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                    <div class="footer-text2 flex" style="margin-right: 50px">
                      <div>{{ $t(statusToLanguage[projectInfo.status]) }}</div>
                    </div>
                  </div>
                  <!-- Allow -->
                  <v-btn class="footer-button1" :loading="claimLoading" @click="handleAllow">{{ $t("yield.yield103") }}</v-btn>
                  <!-- Refuse -->
                  <v-btn class="footer-button2" :loading="claimLoading" @click="handleRefuse">{{ $t("yield.yield104") }}</v-btn>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div v-else-if="!loading" class="ProtocolsDetailsNodata">
          <BaseNoData></BaseNoData>
        </div>
      </div>
    </div>

    <!-- Set Project Category -->
    <v-dialog width="90%" max-width="420px" v-model="categoryDialogVisible" :persistent="true">
      <div class="dialogC">
        <div class="dialogC-close" @click="categoryDialogVisible = false">
          <v-icon small>mdi-window-close</v-icon>
        </div>
        <div class="categoryDialog">
          <div class="categoryDialog-title">Set Project Category</div>
          <!-- <div class="categoryDialog-des">Project category</div> -->
          <v-select v-model="categoryItem" :items="categoryList" label="Project category"></v-select>
          <div class="flex flex-jus-center" style="margin-top: 30px">
            <v-btn color="primary" elevation="2" @click="handSetCategory">confirm</v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>
import DApp from "@/utils/wallet/index"
import axios from "axios"
import chart1 from "./echarts/chart1.js"
import { mapState } from "vuex"
import { protocols, lines } from "@/service"
export default {
  name: "ProtocolsDetails",
  data() {
    return {
      // categoryItem: "cdp",
      // categoryList: ["cdp", "dexes", "lending", "staking", "yield"],
      categoryItem: this.$t("yield.yield46"),
      categoryList: [this.$t("yield.yield46"), this.$t("yield.yield47"), this.$t("yield.yield48"), this.$t("yield.yield49"), this.$t("yield.yield149")],
      categoryDialogVisible: false,

      loading: false,
      projectName: "",
      projectInfo: null,
      claimLoading: false,

      adminAccountList: ["d.a.yield", "admin.yield"],

      overViewData: {
        tvl_eos: 0,
        agg_protocol_count: 0,
        tvl_usd: 0,
        tvl_usd_change: "0.00",
      },
      rewards: "-",

      statusToLanguage: {
        active: "yield.yield163",
        pending: "yield.yield162",
        denied: "yield.yield164",
      },
    }
  },
  components: {},
  props: {},
  watch: {},
  computed: {
    ...mapState({
      isMobile: (state) => state.app.isMobile,
    }),
    role() {
      if (!this.$store.state.app.accountInfo?.account) return null
      // admin
      if (this.adminAccountList.includes(this.$store.state.app.accountInfo.account)) return 1
      // projectOwner
      if (this.$store.state.app.accountInfo.account == this.projectName) return 2
      return null
    },
  },
  created() {
    if (!this.$route.query?.name) this.$router.push("/")
    this.projectName = decodeURIComponent(this.$route.query.name)

    this.getAdminAccount()
    this.getInfo()
    this.getRewards()
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    gotoEdit() {
      this.$router.push("/join/edit?name=" + encodeURIComponent(this.projectName))
    },
    async getRewards() {
      if (this.role !== 2) return
      const params = {
        code: "d.e.yield",
        scope: "d.e.yield",
        table: "protocols",
        json: true,
        limit: -1,
        lower_bound: this.projectName,
        upper_bound: this.projectName,
        boundFormat: true,
      }
      let res = await DApp.getTableRows(params)
      if (res.length > 0) {
        this.rewards = res[0].balance.quantity
      }
    },
    async initView1Data() {
      try {
        let res = await lines.protocolsDetails({
          name: this.projectName,
        })
        if (res.data.length > 0) {
          let item = JSON.parse(JSON.stringify(res.data[res.data.length - 1]))
          if (this.accSub(item.tvl_usd, item.tvl_usd_change) != 0 && this.accSub(item.tvl_usd, item.tvl_usd_change)) item.tvl_usd_change = this.accDiv(item.tvl_usd_change, this.accDiv(this.accSub(item.tvl_usd, item.tvl_usd_change), 100))

          item.tvl_usd_change = this.toFixed(item.tvl_usd_change, 2)
          item.tvl_eos = this.toFixed(item.tvl_eos, 2)
          if (item.tvl_usd_change > 0) item.tvl_usd_change = `+${item.tvl_usd_change}%`
          else item.tvl_usd_change = `${item.tvl_usd_change}%`
          this.overViewData = item

          chart1.init({
            self: this,
            data: res.data,
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getInfo() {
      this.loading = true
      try {
        let result = await protocols.name(this.projectName)
        if (result.code === 0 && result.data) {
          let item = result.data
          item.logo = ""
          item.contracts = JSON.parse(item.contracts)[0]
          item.metadataInfo = JSON.parse(item.metadata)

          item.metadataInfo.forEach((i) => {
            if (i.key == "logo") item.logo = `https://ipfs.pink.gg/ipfs/${i.value}`
            else if (i.key == "description") item.description = i.value
            else if (i.key == "website") item.website = i.value
            else if (i.key == "cmc") item.cmc = i.value
            else if (i.key == "recover") item.recover = i.value
            else if (i.key == "coingecko") item.coingecko = i.value
            else if (i.key == "dappradar") item.dappradar = i.value
            else if (i.key == "defillama") item.defillama = i.value
            else if (i.key == "discord") item.discord = i.value
            else if (i.key == "telegram") item.telegram = i.value
            else if (i.key == "twitter") item.twitter = i.value
            else if (i.key == "github") item.github = i.value
            else if (i.key == "token.code") item.tokenCode = i.value
            else if (i.key == "token.symcode") item.tokenSymcode = i.value
            else if (i.key == "name") item.name = i.value
          })
          item.otherInfo = {}
          item.otherInfo.name = ""
          item.otherInfo.multi_sig = null
          item.otherInfo.open_source = null
          item.otherInfo.main_contract = ""
          item.otherInfo.audit_report = []

          this.projectInfo = item
          if (item.recover) this.getRecoverInfo()
          if (item.tokenCode && item.tokenSymcode) this.getSupplyInfo()
          // this.getSupplyInfo()
          this.$nextTick(() => {
            this.initView1Data()
          })
          // console.log("this.projectInfo is ", this.projectInfo)
        } else {
          this.projectInfo = null
        }
        this.loading = false
      } catch (error) {
        this.projectInfo = null
        this.loading = false
      }
    },
    getSupplyInfo() {
      axios({
        url: `https://www.api.bloks.io/tokens/${this.projectInfo.tokenCode}-eos-${this.projectInfo.tokenSymcode}`,
        // url: `https://www.api.bloks.io/tokens/${ 'box' }-eos-${ 'token.defi' }`,
        method: "get",
        headers: {
          "content-type": "text/plain;charset=UTF-8",
        },
      }).then((res) => {
        if (!res?.data?.length) return
        let info = res?.data[0]

        this.projectInfo.marketcap = this.getKMBUnit(this.toFixed(info.price.marketcap_usd, 2))
        this.projectInfo.circulating = this.formatNumber(this.toFixed(info.supply.circulating, 2))
        this.projectInfo.maxSupply = this.formatNumber(this.toFixed(info.supply.max, 0))

        this.$forceUpdate()
      })
    },
    getRecoverInfo() {
      axios({
        url: "https://api.eosrecover.com/v1/project/" + this.projectInfo.recover,
        // url: "https://api.eosrecover.com/v1/project/" + 8,
        method: "get",
        headers: {
          "content-type": "text/plain;charset=UTF-8",
        },
      }).then((res) => {
        if (!res?.data?.data) return
        let info = res?.data?.data
        this.projectInfo.otherInfo.name = info.name
        this.projectInfo.otherInfo.main_contract = info.main_contract
        this.projectInfo.otherInfo.multi_sig = info.multi_sig
        this.projectInfo.otherInfo.open_source = info.open_source
        if (info.audit_report) this.projectInfo.otherInfo.audit_report = info.audit_report
        else this.projectInfo.otherInfo.audit_report = []
        this.$forceUpdate()
      })
    },
    // setCategory
    async handSetCategory() {
      const permission = Array.isArray(this.$store.state.app.accountInfo.permissions) ? this.$store.state.app.accountInfo.permissions[0] : this.$store.state.app.accountInfo.permissions
      const formName = this.$store.state.app.accountInfo.account
      if (!formName) return
      const params = {
        actions: [],
      }
      this.claimLoading = true
      params.actions.push({
        account: "d.e.yield",
        name: "setcategory",
        authorization: [
          {
            actor: "d.a.yield",
            permission: "active",
          },
          {
            actor: formName,
            permission: permission || "active",
          },
        ],
        data: {
          protocol: this.projectName,
          category: this.handleCategoryTransform(this.categoryItem),
        },
      })

      let result = await DApp.transactionApi({
        params,
      })
      this.claimLoading = false

      this.categoryDialogVisible = true
      if (result && result.code !== 0) {
        // error info
        DApp.handleScatterErrorBack(result, (type, text) => {
          type === "lang" ? this.$toast(this.$t(text)) : this.$toast(text)
        })
        return
      }
      // yes
      this.$toast("set success!")

      this.categoryDialogVisible = false
      setTimeout(() => {
        this.getAdminAccount()
        this.getInfo()
        this.getRewards()
      }, 1000)
    },
    // Allow
    async handleAllow() {
      const permission = Array.isArray(this.$store.state.app.accountInfo.permissions) ? this.$store.state.app.accountInfo.permissions[0] : this.$store.state.app.accountInfo.permissions
      const formName = this.$store.state.app.accountInfo.account
      if (!formName) return
      const params = {
        actions: [],
      }
      this.claimLoading = true
      params.actions.push({
        account: "d.e.yield",
        name: "approve",
        authorization: [
          {
            actor: "d.a.yield",
            permission: "active",
          },
          {
            actor: formName,
            permission: permission || "active",
          },
        ],
        data: {
          // "protocol":"swap.defi",
          protocol: this.projectName,
        },
      })

      // console.log('params is ', params);

      let result = await DApp.transactionApi({
        params,
      })
      this.claimLoading = false

      if (result && result.code !== 0) {
        console.log("result error is ", result)
        // error info
        DApp.handleScatterErrorBack(result, (type, text) => {
          type === "lang" ? this.$toast(this.$t(text)) : this.$toast(text)
        })
        return
      }
      // this.categoryDialogVisible = true
      // yes
      this.$toast("allow success!")
    },
    // Refuse
    async handleRefuse() {
      const permission = Array.isArray(this.$store.state.app.accountInfo.permissions) ? this.$store.state.app.accountInfo.permissions[0] : this.$store.state.app.accountInfo.permissions
      const formName = this.$store.state.app.accountInfo.account
      if (!formName) return
      const params = {
        actions: [],
      }
      this.claimLoading = true
      params.actions.push({
        account: "d.e.yield",
        name: "deny",
        authorization: [
          {
            actor: "d.a.yield",
            permission: "active",
          },
          {
            actor: formName,
            permission: permission || "active",
          },
          // {
          //   actor: "d.a.yield",
          //   permission: "active",
          // },
        ],
        data: {
          protocol: this.projectName,
        },
      })

      let result = await DApp.transactionApi({
        params,
      })
      this.claimLoading = false
      if (result && result.code !== 0) {
        console.log("result error is ", result)
        // error info
        DApp.handleScatterErrorBack(result, (type, text) => {
          type === "lang" ? this.$toast(this.$t(text)) : this.$toast(text)
        })
        return
      }
      // yes
      this.$toast("refuse success!")
    },
    // Claim
    async handleClaim() {
      const permission = Array.isArray(this.$store.state.app.accountInfo.permissions) ? this.$store.state.app.accountInfo.permissions[0] : this.$store.state.app.accountInfo.permissions
      const formName = this.$store.state.app.accountInfo.account
      if (!formName) return
      const params = {
        actions: [],
      }
      this.claimLoading = true
      params.actions.push({
        account: "d.e.yield",
        name: "claim",
        authorization: [
          {
            actor: this.projectName,
            permission: "active",
          },
          {
            actor: formName,
            permission: permission || "active",
          },
        ],
        data: {
          protocol: this.projectName,
          receiver: formName,
        },
      })

      let result = await DApp.transactionApi({
        params,
      })
      this.claimLoading = false
      if (result && result.code !== 0) {
        console.log("result error is ", result)
        // error info
        DApp.handleScatterErrorBack(result, (type, text) => {
          type === "lang" ? this.$toast(this.$t(text)) : this.$toast(text)
        })
        return
      }
      this.getRewards()
      // yes
      this.$toast("claim success!")
    },
    // getAdminAccount
    getAdminAccount() {
      axios({
        url: "https://eos.greymass.com/v1/chain/get_account",
        method: "post",
        headers: {
          "content-type": "text/plain;charset=UTF-8",
        },
        data: {
          account_name: "yield",
        },
      }).then((res) => {
        let adminList = res.data?.permissions[0]?.required_auth?.accounts
        if (Array.isArray(adminList)) {
          adminList.forEach((i) => {
            this.adminAccountList.push(i.permission.actor)
          })
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.ProtocolsDetails {
  padding: 30px 15px;
  padding-bottom: 300px;
  background-color: #fff;
  &.noRole {
    padding-bottom: 80px;
  }
  .ProtocolsDetails-layout {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
  .ProtocolsDetails-title {
    font-size: 21px;
    font-family: PingFang SC;
    font-weight: 600;
    color: #000000;
  }

  .ProtocolsDetails-projectList {
    width: 100%;
    background-color: #fff;
    .projectList-box {
      padding: 20px 0;
      .box-left {
        width: 78px;
        .box-index {
          width: 28px;
          font-size: 18px;
          font-weight: 500;
          color: #000000;
        }
        .box-avatar {
          width: 56px;
          height: 56px;
        }
      }

      .box-name {
        font-size: 18px;
        font-weight: 600;
        color: #000000;
        margin-bottom: 2px;
      }

      .box-label {
        min-width: 77px;
        padding: 0 10px;
        height: 22px;
        line-height: 22px;
        border-radius: 15px;
        margin-right: 8px;
        margin-bottom: 3px;
        font-size: 10px;
        font-weight: 400;
        color: #000000;
        border: 1px solid #d9d9d9;
      }

      .box-data {
        padding-left: 78px;
        .data-box {
          margin-top: 12px;
        }
        .data-name {
          font-size: 13px;
          font-weight: 400;
          color: #666666;
          margin-bottom: 5px;
        }
        .data-number {
          font-size: 17px;
          font-weight: 500;
          color: #000000;
        }
      }
    }
  }

  .ProtocolsDetails-des {
    font-size: 15px;
    font-weight: 400;
    color: #000000;
  }

  .ProtocolsDetails-data {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    border: 1px solid #e8e8e8;
    border-radius: 12px;
    padding: 15px;
    #view1Data {
      width: 100%;
      height: 400px;
    }
    .data-view {
      width: 100%;
      height: 143px;
      background-color: #f9fafb;
      padding: 20px 40px;
      border-radius: 10px;
      .view-title {
        font-size: 13px;
        font-weight: 400;
        color: #666666;
        margin-bottom: 5px;
      }
      .view-text {
        font-size: 17px;
        font-weight: 500;
        color: #000000;
      }
    }
  }

  .ProtocolsDetails-overview {
    .overview-title {
      font-size: 21px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 13px;
      margin-top: 30px;
    }
    .overview-box {
      border: 1px solid #e8e8e8;
      border-radius: 12px;
      padding: 30px 25px;
      padding-bottom: 10px;
      .box-line {
        width: 100%;
        height: 1px;
        background-color: #e8e8e8;
        margin-bottom: 20px;
      }
      .box3-title {
        font-size: 13px;
        font-weight: 400;
        color: #666666;
        margin-bottom: 10px;
      }
      .box3-text {
        font-size: 17px;
        font-weight: 500;
        color: #000000;
        img {
          width: 24px;
          height: 24px;
          margin-right: 4px;
        }
        .text-1 {
          font-size: 12px;
          font-weight: 600;
        }
        .text-2 {
          font-size: 15px;
          font-weight: 600;
        }
        span {
          display: block;
          width: 120px;
          word-break: break-all;
          font-size: 10px;
        }
      }
      .box-w {
        width: 50%;
        margin-bottom: 20px;
      }
    }
  }

  .ProtocolsDetails-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    // height: 200px;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    box-shadow: -1px -1px 5px rgba(136, 136, 136, 0.5);
    .footer-text1 {
      font-size: 13px;
      font-weight: 400;
      color: #666666;
      margin-bottom: 10px;
    }
    .footer-text2 {
      font-size: 22px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 20px;
    }
    .footer-button1 {
      display: block;
      min-width: 160px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      padding: 0 10px;
      background-color: #1c1dff;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      border-radius: 24px;
      cursor: pointer;
      margin-right: 24px;
    }
    .footer-button2 {
      display: block;
      min-width: 160px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      padding: 0 10px;
      background-color: #fff;
      font-size: 16px;
      font-weight: 500;
      color: #666;
      border-radius: 24px;
      cursor: pointer;
      border: 1px solid #e8e8e8;
    }
  }
}
.ProtocolsDetailsNodata {
  background: #fff;
  border-radius: 15px;
}

.ProtocolsDetailsPC {
  padding: 40px 0 180px;
  padding-top: 0;
  .ProtocolsDetailsPC-layout {
    width: 1200px;
    margin: 0 auto;
  }
  .ProtocolsDetailsPC-overLay {
    width: 100%;
    background-color: #000;
    height: 240px;
    // padding-top: 30px;
    position: relative;
  }
  .ProtocolsDetailsPC-overLayPatch {
    position: relative;
    top: -240px;
    padding-top: 40px;
  }

  .ProtocolsDetailsPC-title {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
  }

  .ProtocolsDetailsPC-box1 {
    width: 100%;
    // min-height: 243px;
    padding: 34px 45px 34px 45px;
    border-radius: 15px;
    border: 1px solid #e8e8e8;
    margin-bottom: 25px;
    background-color: #fff;
    .box1-left {
      padding-top: 20px;
      width: 280px;
    }
    .box1-line {
      width: 1px;
      height: 100%;
      background-color: #e8e8e8;
      margin-left: 30px;
      margin-right: 30px;
      min-height: 100px;
      align-self: center;
    }
    .box1-logo {
      width: 70px;
      margin-right: 5px;
      // margin-bottom: 40px;
      // margin-top: 30px;
    }
    .box1-text1 {
      font-size: 20px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 10px;
    }
    .box1-label {
      min-width: 70px;
      padding: 0 10px;
      height: 26px;
      line-height: 26px;
      border-radius: 15px;
      margin-right: 8px;
      margin-bottom: 5px;
      font-size: 10px;
      font-weight: 400;
      color: #000000;
      border: 1px solid #d9d9d9;
      text-align: center;
    }

    .box1-info {
      padding: 12px 40px 0 0;
      margin-bottom: 40px;
      font-size: 14px;
      font-weight: 400;
      color: #000000;
      .info-title {
        font-size: 14px;
        font-weight: 500;
        color: #999999;
        height: 28px;
        line-height: 28px;
      }
      .info-text {
        font-size: 26px;
        font-weight: 600;
        color: #000000;
      }
    }

    .box-des {
      margin-top: 10px;
    }
  }

  .ProtocolsDetailsPC-box2 {
    width: 100%;
    height: 452px;
    border-radius: 15px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    .box2-left {
      width: 220px;
      padding-left: 38px;
      // padding-top: 82px;
      font-size: 14px;
      font-weight: 500;
      color: #000000;
      .box2-circle {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background-color: #1c1dff;
        margin-right: 10px;
      }
      .box2-number {
        font-size: 26px;
        font-weight: 600;
        color: #000000;
        padding: 5px 2px 22px 20px;
      }
    }
    #view1Data {
      width: 100%;
      height: 100%;
    }
  }

  .ProtocolsDetailsPC-box3Title {
    margin-top: 38px;
    margin-bottom: 26px;
    font-size: 30px;
    font-weight: 600;
    color: #101010;
  }
  .ProtocolsDetailsPC-box3 {
    width: 590px;
    height: 254px;
    border-radius: 15px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    padding: 50px;
    margin-bottom: 18px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .box3-line {
      width: 1px;
      height: 100%;
      background-color: #e8e8e8;
      min-height: 110px;
      align-self: center;
    }
    .box3-left {
      width: 204px;
      padding-right: 10px;
    }
    .box3-center {
      flex: 1;
      // padding: 0 55px;
      padding-right: 10px;
    }
    .box3-right {
      width: 100px;
      padding-left: 10px;
    }
    .box3-title {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 500;
      color: #999999;
    }
    .box3-text {
      font-size: 14px;
      font-weight: 600;
      color: #000000;
    }
  }

  .ProtocolsDetailsPC-box4 {
    width: 100%;
    height: 183px;
    border-radius: 15px;
    border: 1px solid #e8e8e8;
    padding: 40px 60px;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    .box4-w {
      padding-right: 10px;
      cursor: pointer;
      span {
        display: block;
        width: 200px;
        word-break: break-all;
      }
    }
    .box4-right {
      .box4-w {
        padding-right: 10px;
        cursor: pointer;
      }
    }
    .box4-line {
      width: 1px;
      height: 100%;
      background-color: #e8e8e8;
      min-height: 103px;
      align-self: center;
      margin: 0 65px;
    }
    .box4-img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  .ProtocolsDetailsPC-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background-color: #fff;
    border: 1px solid #e8e8e8;

    .footer-line {
      width: 1px;
      height: 53px;
      background: #e0e0e0;
      margin: 0 45px;
    }

    .ProtocolsDetailsPC-layout {
      padding: 0 26px 0 58px;
      height: 100%;
    }
    .footer-text1 {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
      margin-bottom: 10px;
    }
    .footer-text2 {
      font-size: 26px;
      font-weight: 600;
      color: #000000;
      .text2-symbol {
        font-size: 18px;
        margin-left: 3px;
        font-weight: 500;
      }
    }
    .footer-button1 {
      display: block;
      min-width: 190px;
      height: 53px;
      line-height: 53px;
      text-align: center;
      padding: 0 10px;
      background-color: #1c1dff;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 23px;
    }
    .footer-button2 {
      display: block;
      min-width: 190px;
      height: 53px;
      line-height: 53px;
      text-align: center;
      padding: 0 10px;
      background-color: #fff;
      font-size: 16px;
      font-weight: 500;
      color: #666;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid #e8e8e8;
    }
  }
}

.categoryDialog {
  background-color: #fff;
  padding: 18px 17px;
  // min-height: 50vh;
  .categoryDialog-title {
    font-size: 21px;
    font-weight: 600;
    color: #222222;
    margin-bottom: 40px;
  }
  .categoryDialog-des {
    font-size: 18px;
    color: #222222;
    margin-top: 20px;
  }
}
</style>
