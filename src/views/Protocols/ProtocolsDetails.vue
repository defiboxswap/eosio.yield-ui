<template>
  <div>
    <div
      class="ProtocolsDetails"
      v-if="isMobile"
      :class="{ noRole: !role }"
    >
      <div class="ProtocolsDetails-layout">
        <div class="ProtocolsDetails-title">
          <span
            style="margin-right: 6px;"
            @click="$router.push({name: 'Protocols'})"
          >{{ $t("yield.yield3") }}</span>
          <span>
            <span v-if="projectInfo">> {{ projectInfo.name }}</span>
          </span>
        </div>
        <div v-if="projectInfo">
          <div class="ProtocolsDetails-projectList">
            <div class="projectList-box">
              <div class="flex">
                <div class="box-left flex">
                  <img
                    :src="projectInfo.logo"
                    class="box-avatar"
                    :onerror="errImg"
                  />
                </div>
                <div class="flex-1">
                  <div class="box-name flex">
                    <span>
                      {{ projectInfo.name }}
                    </span>
                    <div
                      class="box3-title"
                      @click="tipsShow4 = !tipsShow4"
                      v-click-outside="hideShow4"
                      v-if="showWarnTip"
                    >
                      <v-tooltip
                        bottom
                        v-model="tipsShow4"
                        :openOnHover="true"
                        :openOnFocus="false"
                        :attach="true"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <div
                            class="flex curPoint"
                            v-bind="attrs"
                            v-on="on"
                          >
                            <img
                              src="@/assets/img/tip.png"
                              style="width: 20px; margin-left: 5px"
                            />
                          </div>
                        </template>
                        <div style="width: 300px">
                          <div>{{ $t("yield.yield214") }}</div>
                          <div>
                            <div class="flex flex-wrap">
                              <div class="flex">
                                <div class="box3-title">{{ $t("yield.yield72") }}: </div>
                                <div class="box3-text ml5">
                                  <span v-if="projectInfo.otherInfo.open_source === null">-</span>
                                  <template v-else>
                                    <span v-if="projectInfo.otherInfo.open_source">yes</span>
                                    <span v-else>no</span>
                                  </template>
                                </div>
                              </div>
                              <div class="ml mr flex">
                                <div class="box3-title">{{ $t("yield.yield69") }}: </div>
                                <div class="box3-text ml5">
                                  <span v-if="projectInfo.otherInfo.multi_sig === null">-</span>
                                  <template v-else>
                                    <span v-if="projectInfo.otherInfo.multi_sig">yes</span>
                                    <span v-else>no</span>
                                  </template>
                                </div>
                              </div>
                              <div class="flex">
                                <div class="box3-title">{{ $t("yield.yield95") }}: </div>
                                <div class="box3-text ml5">
                                  <span v-if="projectInfo.otherInfo.audit_report.length > 0">yes</span>
                                  <span v-else>no</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-tooltip>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div
                      class="box-label"
                      style="text-align: center"
                    >{{ handleCategory(projectInfo.category) }}</div>
                    <div
                      class="box-label maxTagCls"
                      v-if="overViewData.maxTag"
                    >{{ $t("yield.yield202") }}</div>
                    <div
                      class="box-label midTagCls"
                      v-if="overViewData.midTag"
                    >{{ $t("yield.yield201") }}</div>
                    <div
                      class="box-label minTagCls"
                      v-if="overViewData.minTag"
                    >{{ $t("yield.yield200") }}</div>
                    <!-- <div class="box-label"  v-if="handleGrade(projectInfo.tvl_eos)">{{ handleGrade(projectInfo.tvl_eos) }}</div> -->
                  </div>
                </div>
              </div>

              <div class="box-data">
                <div class="flex">
                  <div class="data-box flex-1">
                    <!-- Ranking -->
                    <div class="data-name">{{ $t("yield.yield91") }}</div>
                    <div class="data-number">#{{ projectInfo.rank }}</div>
                  </div>
                  <div class="data-box flex-1">
                    <div class="data-name">{{ $t("yield.yield117") }}</div>
                    <div class="data-number">
                      <a
                        class="info-text"
                        :href="projectInfo.website"
                        target="_blank"
                      >
                        <span

                          v-if="projectInfo.website"
                          style="color: #000;"
                        >{{ handleHttp(projectInfo.website) }}</span>
                        <span v-else>-</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <div class="data-box flex-1">
                    <div class="data-name">{{ $t("yield.yield92") }}</div>
                    <a class="data-number">
                      <div
                        class="box3-text flex"
                        style="gap: 10px; font-size: 22px;"
                      >
                        <v-menu
                          offset-y
                          nudge-bottom="10"
                          :ripple="false"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                            >
                              <span style="font-size: 16px; margin-right: 5px; font-weight: 600;">{{projectInfo.contracts[0]}}</span>
                              <img
                                src="@/assets/img/ProtocolsDetails/out1.png"
                                width="12"
                              />
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item
                              v-for="(item, index) in projectInfo.contracts"
                              :key="index"
                              @click="openWindow('https://bloks.io/account/' + item)"
                            >
                              <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                    </a>
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

          <div
            class="ProtocolsDetails-des"
            v-if="projectInfo.description"
          >
            <div v-if="descriptionHidden">
              {{ `${projectInfo.description.slice(0, 180)}...`}}
              <span
                @click="descriptionHidden = !descriptionHidden"
                class="pointer fontb"
              >{{ $t("yield.yield172") }}</span>
            </div>
            <div v-else>
              {{projectInfo.description}}
              <span
                @click="descriptionHidden = !descriptionHidden"
                class="pointer fontb"
              >{{ $t("yield.yield173") }}</span>
            </div>
          </div>
          <div class="ProtocolsDetails-data">
            <!-- <div id="view1Data"></div> -->
            <div class="tabCls">
              <BaseTab v-model="checkedVal1" />
            </div>
            <div
              id="view1Data"
              v-if="hasData"
            ></div>
            <div
              v-else
              class="flex flexc review"
            >
              <img
                src="@/assets/img/BaseNoData/review.png"
                alt=""
              />
              <span>{{ $t("yield.yield167") }}</span>
            </div>
            <div class="data-view">
              <div
                class="flex"
                style="margin-bottom: 10px"
              >
                <div class="flex-1">
                  <div class="view-title">{{ $t("yield.yield41") }}</div>
                  <div class="view-text">${{ getKMBUnit(overViewData.tvl_usd, 2) }}</div>
                  <div class="view-title">≈ {{ getKMBUnit(overViewData.tvl_eos, 2) }} EOS</div>
                </div>
                <div class="flex-1">
                  <div class="view-title">{{ $t("yield.yield42") }}</div>
                  <div
                    class="view-text"
                    :class="getColor(overViewData.tvl_usd_change)"
                  >{{ overViewData.tvl_usd_change }}</div>
                </div>
              </div>

              <div class="flex">
                <!-- 24h Reward -->
                <div class="flex-1">
                  <div class="view-title">{{ $t("yield.yield54") }}</div>
                  <div class="view-text">
                    {{ checkedVal1 === 'USD' ? `$${toFixed(overViewData.agg_rewards_change, 2)}` : `${toFixed(overViewData.agg_rewards_change, 2)} EOS` }}
                  </div>
                </div>
                <div class="flex-1"></div>
              </div>
            </div>
          </div>

          <div class="ProtocolsDetails-overview">
            <div class="overview-title flexb">
              <div>{{ $t("yield.yield118") }}</div>
              <div style="font-size: 14px;" v-if="projectInfo.metadata.article" @click="openWindow(projectInfo.metadata.article)" class="pointer">
                {{ $t("yield.yield204") }}
                <img
                    src="@/assets/img/ProtocolsDetails/out1.png"
                    width="10"
                  />
              </div>
            </div>
            <div class="overview-box">
              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield143") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.tokenSymcode === null">-</span>
                    <template v-else>
                      <span v-if="projectInfo.tokenSymcode">{{ projectInfo.tokenSymcode }}</span>
                      <span v-else>-</span>
                    </template>
                  </div>
                </div>
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield142") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.tokenCode === null">-</span>
                    <template v-else>
                      <span v-if="projectInfo.tokenCode">{{ projectInfo.tokenCode }}</span>
                      <span v-else>-</span>
                    </template>
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield189") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.eosPrice">{{ projectInfo.eosPrice }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield135") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.circulating">{{ projectInfo.circulating }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield136") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.maxSupply">{{ projectInfo.maxSupply }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>
              <div class="box-line"></div>
              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield55") }}</div>
                  <div class="box3-text">
                    <span v-if="projectInfo.marketcap">{{ projectInfo.marketcap }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
                <div class="box-w">
                  <div
                    class="box3-title"
                    @click="tipsShow1 = !tipsShow1"
                    v-click-outside="hideShow1"
                  >
                    <v-tooltip
                      bottom
                      v-model="tipsShow1"
                      :openOnHover="true"
                      :openOnFocus="false"
                      :attach="true"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <div
                          class="flex curPoint"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{ $t("yield.yield179") }}
                          <v-icon
                            class=""
                            size="16"
                            style="margin: 0 0 -2px 4px"
                          >mdi-information-outline</v-icon>
                        </div>
                      </template>
                      <div style="width: 300px">
                        {{ $t("yield.yield184") }}
                      </div>
                    </v-tooltip>
                  </div>
                  <div class="box3-text">
                    <span v-if="projectInfo.mcTvlRatio">{{ projectInfo.mcTvlRatio }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="box-w">
                  <div
                    class="box3-title"
                    @click="tipsShow2 = !tipsShow2"
                    v-click-outside="hideShow2"
                  >
                    <v-tooltip
                      bottom
                      v-model="tipsShow2"
                      :openOnHover="true"
                      :openOnFocus="false"
                      :attach="true"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <div
                          class="flex curPoint"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{ $t("yield.yield180") }}
                          <v-icon
                            class=""
                            size="16"
                            style="margin: 0 0 -2px 4px"
                          >mdi-information-outline</v-icon>
                        </div>
                      </template>
                      <div style="width: 300px">
                        {{ $t("yield.yield182") }}
                      </div>
                    </v-tooltip>
                  </div>
                  <div class="box3-text">
                    <span v-if="projectInfo.fullyDVal">{{ projectInfo.fullyDVal }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
                <div class="box-w">
                  <div
                    class="box3-title"
                    @click="tipsShow3 = !tipsShow3"
                    v-click-outside="hideShow3"
                  >
                    <v-tooltip
                      bottom
                      v-model="tipsShow3"
                      :openOnHover="true"
                      :openOnFocus="false"
                      :attach="true"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <div
                          class="flex curPoint"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{ $t("yield.yield178") }}
                          <v-icon
                            class=""
                            size="16"
                            style="margin: 0 0 -2px 4px"
                          >mdi-information-outline</v-icon>
                        </div>
                      </template>
                      <div style="width: 300px">
                        {{ $t("yield.yield183") }}
                      </div>
                    </v-tooltip>
                  </div>
                  <div class="box3-text">
                    <span v-if="projectInfo.fullyDValTvlRatio">{{ projectInfo.fullyDValTvlRatio }}</span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>
              <div class="box-line"></div>

              <div class="flex">
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield73") }}</div>
                  <div class="box3-text">
                    <span v-if="!projectInfo.recover">-</span>
                    <span
                      v-else
                      @click="openWindow('https://eosrecover.com/project/' + projectInfo.recover)"
                    >{{ projectInfo.recover }} {{$t("yield.yield132")}}</span>
                  </div>
                </div>
                <div class="box-w">
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
              <div class="flex">
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
                <div class="box-w">
                  <div class="box3-title">{{ $t("yield.yield95") }}</div>
                  <div class="box3-text">
                    <!-- <template v-if="projectInfo.otherInfo.audit_report.length > 0">
                      <div class="curPoint" @click="openWindow(url)" v-for="(url, index) in projectInfo.otherInfo.audit_report" :key="index">report{{ index + 1 }}</div>
                    </template> -->
                    <!-- <div v-else>-</div> -->
                    <v-menu
                      offset-y
                      nudge-bottom="10"
                      v-if="projectInfo.otherInfo.audit_report.length > 0"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                        >
                          Report&nbsp;<img
                            src="@/assets/img/ProtocolsDetails/out1.png"
                            style="width: 8px;height: 9px;"
                          />
                        </v-btn>
                        <!-- <v-icon class="" size="16" style="margin: 0 0 -2px 4px">mdi-arrow-top-right</v-icon> -->
                      </template>

                      <v-list>
                        <v-list-item
                          v-for="(item, index) in projectInfo.otherInfo.audit_report"
                          :key="index"
                          @click="openWindow(item)"
                        >
                          <v-list-item-title>report{{ index + 1 }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <div v-else>-</div>
                  </div>
                </div>
                <!-- <div class="box-w">
                  <div class="box3-title">MULTI-SIG</div>
                  <div class="box3-text">YES</div>
                </div> -->
              </div>
            </div>

            <div
              class="overview-box"
              style="margin-top: 15px"
            >
              <div class="flext">
                <div class="box-w">
                  <!-- <div class="box3-title">token</div> -->
                  <div
                    class="box3-text flex"
                    @click="openWindow(projectInfo.cmc)"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/CoinMarketCap.png"
                      alt=""
                    />
                    <span v-if="projectInfo.cmc">CoinMarketCap <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        class="imgStyle"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
                <div class="box-w">
                  <div
                    class="box3-text flex"
                    @click="openWindow(projectInfo.coingecko)"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/CoinGecko.png"
                      alt=""
                    />
                    <span v-if="projectInfo.coingecko">CoinGecko <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        class="imgStyle"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
              </div>

              <div class="flext">
                <div class="box-w">
                  <div
                    class="box3-text flex"
                    @click="openWindow(projectInfo.defiLlama)"
                  >
                    <img src="@/assets/img/ProtocolsDetails/DefiLlama.png" />
                    <!-- <span>DefiLlama</span> -->
                    <span v-if="projectInfo.defillama">DefiLlama <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        class="imgStyle"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
                <div class="box-w">
                  <!-- <div class="box3-title">MULTI-SIG</div>
                  <div class="box3-text">YES</div> -->
                  <div
                    class="box3-text flex"
                    @click="openWindow(projectInfo.dappradar)"
                  >
                    <img src="@/assets/img/ProtocolsDetails/DappRadar.png" />
                    <!-- <span>DappRadar</span> -->
                    <span v-if="projectInfo.dappradar">DappRadar <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        class="imgStyle"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
              </div>

              <div class="box-line"></div>

              <div class="flext">
                <div class="box-w">
                  <div
                    class="box3-text flex"
                    @click="openWindow(projectInfo.twitter)"
                  >
                    <img src="@/assets/img/ProtocolsDetails/Twitter.png" />
                    <!-- Twitter -->
                    <span v-if="projectInfo.twitter">Twitter <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        class="imgStyle"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
                <div class="box-w">
                  <div
                    class="box3-text flex"
                    @click="openWindow(projectInfo.discord)"
                  >
                    <img src="@/assets/img/ProtocolsDetails/Discord.png" />
                    <!-- Discord -->
                    <span v-if="projectInfo.discord">Discord <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        class="imgStyle"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
              </div>

              <div class="flext">
                <div class="box-w">
                  <div
                    class="box3-text flex"
                    @click="openWindow(projectInfo.telegram)"
                  >
                    <img src="@/assets/img/ProtocolsDetails/Telegram.png" />
                    <!-- Telegram -->
                    <span v-if="projectInfo.telegram">Telegram <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        class="imgStyle"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
                <div class="box-w">
                  <div
                    class="box3-text flex"
                    @click="openWindow(projectInfo.github)"
                  >
                    <img src="@/assets/img/ProtocolsDetails/git1.png?v=1.0" />
                    <!-- github -->
                    <span
                      v-if="projectInfo.telegram"
                      class="flex"
                    >github <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        class="imgStyle"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
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

      <div
        class="ProtocolsDetails-footer"
        v-if="role && projectInfo"
      >
        <template v-if="role == 2">
          <div
            class="flext flex-jus-center"
            v-if="projectInfo.status == 'pending'"
          >
            <div class="flex-1 flex-column flex-jus-center footer-height">
              <div>
                <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                <div class="footer-text2">{{ $t(statusToLanguage[projectInfo.status]) }}</div>
              </div>
            </div>
            <div class="footer-line"></div>
            <div class="flex-1 flex-column flex-jus-center footer-height">
              <v-btn
                color="footer-button2"
                :loading="claimLoading"
                @click="gotoEdit"
              >{{ $t("yield.yield101") }}</v-btn>
            </div>
          </div>

          <div
            class="flext flex-jus-center"
            v-else-if="projectInfo.status == 'active'"
          >
            <div class="flex-1 flex-column flex-jus-between footer-height">
              <div>
                <div class="footer-text1">{{ $t("yield.yield96") }}</div>
                <div class="footer-text2">{{ rewards }}</div>
              </div>
              <v-btn
                color="footer-button1"
                :loading="claimLoading"
                @click="handleClaim"
                :disabled="parseInt(rewards) === 0"
                v-if="rewards && rewards != '-'"
              >{{ $t("yield.yield97") }}</v-btn>
              <v-btn
                class="footer-button1"
                style="background: #f5f5f5; color: #000"
                :loading="claimLoading"
                v-else-if="rewards == '-' || !rewards"
              >{{ $t("yield.yield170") }}</v-btn>
            </div>
            <div class="footer-line"></div>
            <div class="flex-1 flex-column flex-jus-between footer-height">
              <div>
                <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                <div class="footer-text2">{{ $t(statusToLanguage[projectInfo.status]) }}</div>
              </div>
              <v-btn
                color="footer-button2"
                :loading="claimLoading"
                @click="gotoEdit"
              >{{ $t("yield.yield101") }}</v-btn>
            </div>
          </div>

          <div
            class="flext flex-jus-center"
            v-else-if="projectInfo.status == 'denied'"
          >
            <div class="flex-1 flex-column flex-jus-center footer-height">
              <div class="footer-text3">{{ $t("yield.yield139") }}</div>
            </div>
            <div class="footer-line"></div>
            <div class="flex-1 flex-column flex-jus-between footer-height">
              <div>
                <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                <div class="footer-text2">{{ $t(statusToLanguage[projectInfo.status]) }}</div>
              </div>
              <v-btn
                color="footer-button1"
                :loading="claimLoading"
                @click="gotoEdit"
              >{{ $t("yield.yield101") }}</v-btn>
            </div>
          </div>
        </template>
        <template v-else-if="role == 1">
          <div
            class="flext flex-jus-center"
            v-if="projectInfo.status == 'pending'"
          >
            <div class="flex-1 flex-column flex-jus-between footer-height">
              <div>
                <div class="footer-text1">{{ $t("yield.yield86") }}</div>
                <div class="footer-text2">{{ handleCategory(projectInfo.category) }}</div>
              </div>
              <v-btn
                color="footer-button2"
                :loading="claimLoading"
                @click="categoryDialogShow"
              >{{ $t("yield.yield168") }}</v-btn>
            </div>
            <div class="footer-line"></div>
            <div class="flex-1 flex-column flex-jus-between footer-height">
              <v-btn
                color="footer-button1"
                :loading="claimLoading"
                @click="handleAllow"
              >{{ $t("yield.yield103") }}</v-btn>
              <v-btn
                color="footer-button2"
                :loading="claimLoading"
                @click="handleRefuse"
              >{{ $t("yield.yield104") }}</v-btn>
            </div>
          </div>

          <div
            class="flext flex-jus-center"
            v-else-if="projectInfo.status == 'active'"
          >
            <div class="flex-1 flex-column flex-jus-between footer-height">
              <div>
                <div class="footer-text1">{{ $t("yield.yield86") }}</div>
                <div class="footer-text2">{{ handleCategory(projectInfo.category) }}</div>
              </div>
              <v-btn
                color="footer-button2"
                :loading="claimLoading"
                @click="categoryDialogShow"
              >{{ $t("yield.yield168") }}</v-btn>
            </div>
            <div class="footer-line"></div>
            <div class="flex-1 flex-column flex-jus-between footer-height">
              <div>
                <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                <div class="footer-text2">{{ $t(statusToLanguage[projectInfo.status]) }}</div>
              </div>
              <v-btn
                color="footer-button1"
                :loading="claimLoading"
                @click="handleRefuse"
              >{{ $t("yield.yield104") }}</v-btn>
            </div>
          </div>

          <div
            class="flext flex-jus-center"
            v-else-if="projectInfo.status == 'denied'"
          >
            <div class="flex-1 flex-column flex-jus-between footer-height">
              <div>
                <div class="footer-text1">{{ $t("yield.yield86") }}</div>
                <div class="footer-text2">{{ handleCategory(projectInfo.category) }}</div>
              </div>
              <v-btn
                color="footer-button2"
                :loading="claimLoading"
                @click="categoryDialogShow"
              >{{ $t("yield.yield168") }}</v-btn>
            </div>
            <div class="footer-line"></div>
            <div class="flex-1 flex-column flex-jus-center footer-height">
              <!-- <v-btn color="footer-button1" :loading="claimLoading" @click="handleAllow">{{ $t("yield.yield103") }}</v-btn>
              <v-btn color="footer-button2" :loading="claimLoading" @click="handleRefuse">{{ $t("yield.yield104") }}</v-btn> -->
              <div>
                <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                <div class="footer-text2">{{ $t(statusToLanguage[projectInfo.status]) }}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div
      class="ProtocolsDetailsPC"
      v-else
    >
      <div class="ProtocolsDetailsPC-overLay"></div>
      <div class="ProtocolsDetailsPC-overLayPatch ProtocolsDetailsPC-layout">
        <!-- Projects -->
        <div class="ProtocolsDetailsPC-title">
          <span
            class="pointer"
            style="margin-right: 6px;"
            @click="$router.push({name: 'Protocols'})"
          >{{ $t("yield.yield3") }}</span>
          <span>
            <span v-if="projectInfo">> {{ projectInfo.name }}</span>
          </span>
        </div>

        <div
          v-if="projectInfo"
          v-loading="loading"
        >
          <div class="ProtocolsDetailsPC-box1">
            <div class="flext">
              <div class="box1-left">
                <div class="flex">
                  <img
                    :src="projectInfo.logo"
                    class="box1-logo"
                    :onerror="errImg"
                  />
                  <div>
                    <div class="box1-text1 flex">
                      <div>
                        {{ projectInfo.name }}
                      </div>
                      <div
                        class="box3-title"
                        @click="tipsShow4 = !tipsShow4"
                        v-click-outside="hideShow4"
                        v-if="showWarnTip"
                      >
                        <v-tooltip
                          bottom
                          v-model="tipsShow4"
                          :openOnHover="true"
                          :openOnFocus="false"
                          :attach="true"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <div
                              class="flex curPoint"
                              v-bind="attrs"
                              v-on="on"
                            >
                              <img
                                src="@/assets/img/tip.png"
                                style="width: 20px; margin-left: 5px"
                              />
                            </div>
                          </template>
                          <div style="width: 300px">
                            <div>{{ $t("yield.yield214") }}</div>
                            <div>
                              <div class="flex flex-wrap">
                                <div class="flex">
                                  <div class="box3-title">{{ $t("yield.yield72") }}: </div>
                                  <div class="box3-text ml5">
                                    <span v-if="projectInfo.otherInfo.open_source === null">-</span>
                                    <template v-else>
                                      <span v-if="projectInfo.otherInfo.open_source">yes</span>
                                      <span v-else>no</span>
                                    </template>
                                  </div>
                                </div>
                                <div class="ml mr flex">
                                  <div class="box3-title">{{ $t("yield.yield69") }}: </div>
                                  <div class="box3-text ml5">
                                    <span v-if="projectInfo.otherInfo.multi_sig === null">-</span>
                                    <template v-else>
                                      <span v-if="projectInfo.otherInfo.multi_sig">yes</span>
                                      <span v-else>no</span>
                                    </template>
                                  </div>
                                </div>
                                <div class="flex">
                                  <div class="box3-title">{{ $t("yield.yield95") }}: </div>
                                  <div class="box3-text ml5">
                                    <span v-if="projectInfo.otherInfo.audit_report.length > 0">yes</span>
                                    <span v-else>no</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </v-tooltip>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div class="box1-label">{{ handleCategory(projectInfo.category) }}</div>
                      <div
                        class="box1-label maxTagCls"
                        v-if="overViewData.maxTag"
                      >{{ $t("yield.yield202") }}</div>
                      <div
                        class="box1-label midTagCls"
                        v-if="overViewData.midTag"
                      >{{ $t("yield.yield201") }}</div>
                      <div
                        class="box1-label minTagCls"
                        v-if="overViewData.minTag"
                      >{{ $t("yield.yield200") }}</div>
                      <!-- <div class="box1-label">Corss-chain</div> -->
                      <!-- <div class="box1-label" v-if="handleGrade(projectInfo.tvl_eos)">{{ handleGrade(projectInfo.tvl_eos) }}</div> -->
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
                    <div class="info-text">#{{ projectInfo.rank }}</div>
                  </div>
                  <div>
                    <!-- <div v-if="projectInfo.website"> -->
                    <!-- website -->
                    <div class="info-title">{{ $t("yield.yield117") }}</div>
                    <a
                      class="info-text"
                      :href="projectInfo.website"
                      target="_blank"
                    >
                      <span
                        v-if="projectInfo.website"
                        class="hover-blue"
                      >{{ handleHttp(projectInfo.website) }}</span>
                      <span v-else>-</span>
                    </a>
                  </div>
                  <div>
                    <!-- Protocols address -->
                    <div class="info-title">{{ $t("yield.yield92") }}</div>
                    <div class="info-text curPoint">
                      <div
                        class="box3-text flex"
                        style="gap: 10px; font-size: 22px;"
                      >
                        <v-menu
                          offset-y
                          nudge-bottom="10"
                          :ripple="false"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                            >
                              <span style="font-size: 22px; margin-right: 5px; font-weight: 600;">{{projectInfo.contracts[0]}}</span>
                              <img
                                src="@/assets/img/ProtocolsDetails/out1.png"
                                width="12"
                              />
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item
                              v-for="(item, index) in projectInfo.contracts"
                              :key="index"
                              @click="openWindow('https://bloks.io/account/' + item)"
                            >
                              <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
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

            <div
              class="box-des"
              v-if="projectInfo.description"
            >
              <div v-if="descriptionHidden">
                {{ `${projectInfo.description.slice(0, 400)}...`}}
                <span
                  @click="descriptionHidden = !descriptionHidden"
                  class="pointer fontb"
                >{{ $t("yield.yield172") }}</span>
              </div>
              <div v-else>
                {{projectInfo.description}}
                <span
                  @click="descriptionHidden = !descriptionHidden"
                  class="pointer fontb"
                >{{ $t("yield.yield173") }}</span>
              </div>
            </div>
          </div>

          <div class="ProtocolsDetailsPC-box2 flex">
            <div class="box2-left">
              <div class="">
                <div class="flex">
                  <div class="box2-circle"></div>
                  <div class="">{{ $t("yield.yield41") }}</div>
                </div>
                <div class="box2-number">
                  ${{ getKMBUnit(overViewData.tvl_usd, 2) }}
                  <div>≈ {{ getKMBUnit(overViewData.tvl_eos, 2) }} EOS</div>
                </div>
              </div>

              <div class="">
                <div class="flex">
                  <div class="box2-circle"></div>
                  <div class="">{{ $t("yield.yield42") }}</div>
                </div>
                <div
                  class="box2-number"
                  :class="getColor(overViewData.tvl_usd_change)"
                >{{ overViewData.tvl_usd_change }}</div>
              </div>

              <div class="">
                <div class="flex">
                  <div class="box2-circle"></div>
                  <div class="">{{ $t("yield.yield54") }}</div>
                </div>
                <div class="box2-number">
                  {{ checkedVal1 === 'USD' ? `$${toFixed(overViewData.agg_rewards_change, 2)}` : `${toFixed(overViewData.agg_rewards_change, 2)} EOS` }}
                </div>
              </div>
            </div>
            <div
              v-if="hasData"
              class="box2-right"
            >
              <div class="tabCls">
                <BaseTab v-model="checkedVal1" />
              </div>
              <div id="view1Data"></div>
            </div>
            <div
              v-else
              class="review"
            >
              <div class="tabCls">
                <BaseTab v-model="checkedVal1" />
              </div>
              <div class="flex flexc review">
                <img
                  src="@/assets/img/BaseNoData/review.png"
                  alt=""
                />
                <span>{{ $t("yield.yield167") }}</span>
              </div>
            </div>
          </div>

          <div>
            <!-- Information -->
            <div class="ProtocolsDetailsPC-box3Title flexb">
              <div>{{ $t("yield.yield118") }}</div>
              <div style="font-size: 14px;" v-if="projectInfo.metadata.article" @click="openWindow(projectInfo.metadata.article)" class="pointer">
                {{ $t("yield.yield204") }}
                <img
                    src="@/assets/img/ProtocolsDetails/out1.png"
                    width="10"
                  />
              </div>
            </div>

            <div class="flex flex-jus-between">
              <div class="ProtocolsDetailsPC-box3 ProtocolsDetailsPC-box3-l flex">
                <div class="ProtocolsDetailsPC-box3-l_contL">
                  <div class="flext">
                    <div class="box3-top">
                      <div>
                        <div class="box3-title">{{ $t("yield.yield143") }}</div>
                        <div class="box3-text">
                          <span v-if="projectInfo.tokenSymcode === null">-</span>
                          <template v-else>
                            <span v-if="projectInfo.tokenSymcode">{{ projectInfo.tokenSymcode }}</span>
                            <span v-else>-</span>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="box3-top">
                      <div>
                        <div class="box3-title">{{ $t("yield.yield142") }}</div>
                        <div class="box3-text">
                          <!-- <span v-if="projectInfo.otherInfo.main_contract === null">-</span>
                          <span v-else>{{ projectInfo.otherInfo.main_contract }}</span> -->
                          <span v-if="projectInfo.tokenCode === null">-</span>
                          <template v-else>
                            <span v-if="projectInfo.tokenCode">{{ projectInfo.tokenCode }}</span>
                            <span v-else>-</span>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="box3-top">
                      <div>
                        <div class="box3-title priceLeft">{{ $t("yield.yield189") }}</div>
                        <div class="box3-text priceLeft">
                          <span v-if="projectInfo.eosPrice">${{ projectInfo.eosPrice }}</span>
                          <span v-else>-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flext">
                    <div class="box3-bottom">
                      <div>
                        <div class="box3-title">{{ $t("yield.yield135") }}</div>
                        <div class="box3-text">
                          <span v-if="projectInfo.circulating">{{ projectInfo.circulating }}</span>
                          <span v-else>-</span>
                        </div>
                      </div>
                    </div>
                    <div class="box3-bottom">
                      <div>
                        <div class="box3-title">{{ $t("yield.yield136") }}</div>
                        <div class="box3-text">
                          <span v-if="projectInfo.maxSupply">{{ projectInfo.maxSupply }}</span>
                          <span v-else>-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ProtocolsDetailsPC-box3-l_contR">
                  <div class="flext">
                    <div class="box3-top">
                      <div>
                        <div class="box3-title">{{ $t("yield.yield55") }}</div>
                        <div class="box3-text">
                          <span v-if="projectInfo.marketcap">${{ projectInfo.marketcap }}</span>
                          <span v-else>-</span>
                        </div>
                      </div>
                    </div>
                    <div class="box3-top">
                      <div
                        @click="tipsShow1 = !tipsShow1"
                        v-click-outside="hideShow1"
                      >
                        <div class="box3-title">
                          <v-tooltip
                            bottom
                            v-model="tipsShow1"
                            :openOnHover="true"
                            :openOnFocus="false"
                            :attach="true"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <div
                                class="flex curPoint"
                                v-bind="attrs"
                                v-on="on"
                              >
                                {{ $t("yield.yield179") }}
                                <v-icon
                                  class=""
                                  size="16"
                                  style="margin: 0 0 -2px 4px"
                                >mdi-information-outline</v-icon>
                              </div>
                            </template>
                            <div style="width: 300px">
                              {{ $t("yield.yield184") }}
                            </div>
                          </v-tooltip>
                        </div>
                        <div class="box3-text">
                          <span v-if="projectInfo.mcTvlRatio">{{ projectInfo.mcTvlRatio }}</span>
                          <span v-else>-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flext">
                    <div class="box3-bottom">
                      <div
                        @click="tipsShow2 = !tipsShow2"
                        v-click-outside="hideShow2"
                      >
                        <div class="box3-title">
                          <v-tooltip
                            bottom
                            v-model="tipsShow2"
                            :openOnHover="true"
                            :openOnFocus="false"
                            :attach="true"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <div
                                class="flex curPoint"
                                v-bind="attrs"
                                v-on="on"
                              >
                                {{ $t("yield.yield180") }}
                                <v-icon
                                  class=""
                                  size="16"
                                  style="margin: 0 0 -2px 4px"
                                >mdi-information-outline</v-icon>
                              </div>
                            </template>
                            <div style="width: 300px">
                              {{ $t("yield.yield182") }}
                            </div>
                          </v-tooltip>
                        </div>
                        <div class="box3-text">
                          <span v-if="projectInfo.fullyDVal">{{ projectInfo.fullyDVal }}</span>
                          <span v-else>-</span>
                        </div>
                      </div>
                    </div>
                    <div class="box3-bottom">
                      <div
                        @click="tipsShow3 = !tipsShow3"
                        v-click-outside="hideShow3"
                      >
                        <div class="box3-title">
                          <v-tooltip
                            bottom
                            v-model="tipsShow3"
                            :openOnHover="true"
                            :openOnFocus="false"
                            :attach="true"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <div
                                class="flex curPoint"
                                v-bind="attrs"
                                v-on="on"
                              >
                                {{ $t("yield.yield178") }}
                                <v-icon
                                  class=""
                                  size="16"
                                  style="margin: 0 0 -2px 4px"
                                >mdi-information-outline</v-icon>
                              </div>
                            </template>
                            <div style="width: 300px">
                              {{ $t("yield.yield183") }}
                            </div>
                          </v-tooltip>
                        </div>
                        <div class="box3-text">
                          <span v-if="projectInfo.fullyDValTvlRatio">{{ projectInfo.fullyDValTvlRatio }}</span>
                          <span v-else>-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ProtocolsDetailsPC-box3 ProtocolsDetailsPC-box3-r">
                <div class="flext flex-wrap">
                  <div class="box3-left mb">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield73") }}</div>
                      <div class="box3-text">
                        <span v-if="!projectInfo.recover">-</span>
                        <span
                          v-else
                          @click="openWindow('https://eosrecover.com/project/' + projectInfo.recover)"
                        >{{ projectInfo.recover }} <span class="hover-blue font14">{{$t("yield.yield132")}}</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="box3-center flext flex-jus-between mb">
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
                  <div class="box3-center">
                    <div>
                      <div class="box3-title">{{ $t("yield.yield95") }}</div>
                      <div
                        class="box3-text flex"
                        style="gap: 10px"
                      >
                        <!-- <template v-if="projectInfo.otherInfo.audit_report.length > 0">
                          <span class="curPoint" @click="openWindow(url)" v-for="(url, index) in projectInfo.otherInfo.audit_report" :key="index">report{{ index + 1 }}</span>
                        </template>
                        <span v-else>-</span> -->
                        <v-menu
                          offset-y
                          nudge-bottom="10"
                          :ripple="false"
                          v-if="projectInfo.otherInfo.audit_report.length > 0"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                            >
                              Report&nbsp;<img
                                src="@/assets/img/ProtocolsDetails/out1.png"
                                width="10"
                              />
                            </v-btn>
                            <!-- <v-icon class="" size="16" style="margin: 0 0 -2px 4px">mdi-arrow-top-right</v-icon> -->
                          </template>

                          <v-list>
                            <v-list-item
                              v-for="(item, index) in projectInfo.otherInfo.audit_report"
                              :key="index"
                              @click="openWindow(item)"
                            >
                              <v-list-item-title>report{{ index + 1 }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                        <div v-else>-</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="ProtocolsDetailsPC-box4 flex">
              <div
                class="flex-1 flext flex-column flex-jus-between"
                style="height: 103px"
              >
                <div
                  class="flex flex-jus-between"
                  style="width: 100%"
                >
                  <div
                    class="flex-1 box4-w flex"
                    @click="openWindow(projectInfo.cmc)"
                    :class="{'noCursorPoint': !projectInfo.cmc}"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/CoinMarketCap.png"
                      class="box4-img"
                    />
                    <!-- CoinMarketCap -->
                    <span v-if="projectInfo.cmc">CoinMarketCap <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        width="10"
                      /></span>
                    <span
                      v-else
                      class="color-999 noCursorPoint"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                  <div
                    class="flex-1 box4-w flex"
                    @click="openWindow(projectInfo.coingecko)"
                    :class="{'noCursorPoint': !projectInfo.coingecko}"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/CoinGecko.png"
                      class="box4-img"
                    />
                    <!-- <span>CoinGecko</span> -->
                    <span v-if="projectInfo.coingecko">CoinGecko <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        width="10"
                      /></span>
                    <span
                      v-else
                      class="color-999 noCursorPoint"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
                <div
                  class="flex flex-jus-between"
                  style="width: 100%"
                >
                  <div
                    class="flex-1 box4-w flex"
                    @click="openWindow(projectInfo.defillama)"
                    :class="{'noCursorPoint': !projectInfo.defillama}"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/DefiLlama.png"
                      class="box4-img"
                    />
                    <!-- <span>DefiLlama</span> -->
                    <span v-if="projectInfo.defillama">DefiLlama <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        width="10"
                      /></span>
                    <span
                      v-else
                      class="color-999 noCursorPoint"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                  <div
                    class="flex-1 box4-w flex"
                    @click="openWindow(projectInfo.dappradar)"
                    :class="{'noCursorPoint': !projectInfo.dappradar}"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/DappRadar.png"
                      class="box4-img"
                    />
                    <!-- <span>DappRadar</span> -->
                    <span v-if="projectInfo.dappradar">DappRadar <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        width="10"
                      /></span>
                    <span
                      v-else
                      class="color-999 noCursorPoint"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
              </div>
              <div class="box4-line"></div>
              <div
                class="box4-right flex-1 flext flex-column flex-jus-between"
                style="height: 103px"
              >
                <div
                  class="flex flex-jus-between"
                  style="width: 100%"
                >
                  <div
                    class="flex-1 box4-w flex"
                    @click="openWindow(projectInfo.twitter)"
                    :class="{'noCursorPoint': !projectInfo.twitter}"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/Twitter.png"
                      class="box4-img"
                    />
                    <!-- Twitter -->
                    <span v-if="projectInfo.twitter">Twitter <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        width="10"
                      /></span>
                    <span
                      v-else
                      class="color-999 noCursorPoint"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                  <div
                    class="flex-1 box4-w flex"
                    @click="openWindow(projectInfo.discord)"
                    :class="{'noCursorPoint': !projectInfo.discord}"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/Discord.png"
                      class="box4-img"
                    />
                    <!-- Discord -->
                    <span v-if="projectInfo.discord">Discord <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        width="10"
                      /></span>
                    <span
                      v-else
                      class="color-999 noCursorPoint"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
                <div
                  class="flex flex-jus-between"
                  style="width: 100%"
                >
                  <div
                    class="flex-1 box4-w flex"
                    @click="openWindow(projectInfo.telegram)"
                    :class="{'noCursorPoint': !projectInfo.telegram}"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/Telegram.png"
                      class="box4-img"
                    />
                    <!-- Telegram -->
                    <span v-if="projectInfo.telegram">Telegram <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        width="10"
                      /></span>
                    <span
                      v-else
                      class="color-999 noCursorPoint"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                  <div
                    class="flex-1 box4-w flex"
                    @click="openWindow(projectInfo.github)"
                    :class="{'noCursorPoint': !projectInfo.github}"
                  >
                    <img
                      src="@/assets/img/ProtocolsDetails/git1.png?v=1.0"
                      class="box4-img"
                    />
                    <!-- github -->
                    <span
                      v-if="projectInfo.github"
                      class="flex"
                    >github <img
                        src="@/assets/img/ProtocolsDetails/out1.png"
                        width="10"
                      /></span>
                    <span
                      v-else
                      class="color-999"
                    >{{ $t("yield.yield161") }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ProtocolsDetailsPC-footer"
            v-if="role && projectInfo"
          >
            <div
              class="ProtocolsDetailsPC-layout flex flex-align-center flex-jus-between"
              v-if="role == 2"
            >
              <div class="flext">
                <div v-if="projectInfo.status == 'active'">
                  <!-- Rewards Available -->
                  <div class="footer-text1">{{ $t("yield.yield96") }}</div>
                  <div class="footer-text2 flex">
                    <div>{{ rewards }}</div>
                  </div>
                </div>

                <div
                  v-if="projectInfo.status == 'denied'"
                  style="align-self: center; color: #333; margin-right: 140px"
                >
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
                <v-btn
                  class="footer-button1"
                  :loading="claimLoading"
                  @click="handleClaim"
                  :disabled="parseInt(rewards) === 0"
                  v-if="projectInfo.status == 'active' && rewards && rewards != '-'"
                >{{ $t("yield.yield97") }}</v-btn>
                <v-btn
                  class="footer-button1"
                  style="background: #f5f5f5; color: #000"
                  :loading="claimLoading"
                  v-else-if="projectInfo.status == 'active' && (rewards == '-' || !rewards)"
                >{{ $t("yield.yield170") }}</v-btn>
                <!-- EDIT -->
                <v-btn
                  class="footer-button2"
                  @click="gotoEdit"
                >{{ $t("yield.yield101") }}</v-btn>
              </div>
            </div>

            <template v-else-if="role == 1">
              <template v-if="projectInfo.status == 'pending'">
                <div class="ProtocolsDetailsPC-layout flex flex-align-center flex-jus-end">
                  <div class="flex">
                    <div class="footer-Category">
                      <div class="footer-text1">{{ $t("yield.yield86") }}</div>
                      <div
                        class="footer-text2 flex"
                        style="margin-right: 50px"
                      >
                        <div>{{ handleCategory(projectInfo.category) }}</div>
                      </div>
                    </div>
                    <!-- Modify -->
                    <v-btn
                      class="footer-button2"
                      :loading="claimLoading"
                      @click="categoryDialogShow"
                    >{{ $t("yield.yield168") }}</v-btn>

                    <div class="footer-line"></div>
                  </div>

                  <div class="flex">
                    <!-- <div class="footer-Category">
                      <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                      <div class="footer-text2 flex" style="margin-right: 50px">
                        <div>{{ $t(statusToLanguage[projectInfo.status]) }}</div>
                      </div>
                    </div> -->
                    <!-- Allow -->
                    <v-btn
                      class="footer-button1"
                      :loading="claimLoading"
                      @click="handleAllow"
                    >{{ $t("yield.yield103") }}</v-btn>
                    <!-- Refuse -->
                    <v-btn
                      class="footer-button2"
                      :loading="claimLoading"
                      @click="handleRefuse"
                    >{{ $t("yield.yield104") }}</v-btn>
                  </div>
                </div>
              </template>

              <template v-else-if="projectInfo.status == 'active'">
                <div class="ProtocolsDetailsPC-layout flex flex-align-center flex-jus-end">
                  <div class="flex">
                    <div class="footer-Category">
                      <div class="footer-text1">{{ $t("yield.yield86") }}</div>
                      <div
                        class="footer-text2 flex"
                        style="margin-right: 50px"
                      >
                        <div>{{ handleCategory(projectInfo.category) }}</div>
                      </div>
                    </div>
                    <!-- Modify -->
                    <v-btn
                      class="footer-button2"
                      :loading="claimLoading"
                      @click="categoryDialogShow"
                    >{{ $t("yield.yield168") }}</v-btn>

                    <div class="footer-line"></div>
                  </div>

                  <div class="flex">
                    <div class="footer-Category">
                      <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                      <div
                        class="footer-text2 flex"
                        style="margin-right: 50px"
                      >
                        <div>{{ $t(statusToLanguage[projectInfo.status]) }}</div>
                      </div>
                    </div>
                    <!-- Allow -->
                    <!-- <v-btn class="footer-button1" :loading="claimLoading" @click="handleAllow">{{ $t("yield.yield103") }}</v-btn> -->
                    <!-- Refuse -->
                    <v-btn
                      class="footer-button2"
                      :loading="claimLoading"
                      @click="handleRefuse"
                    >{{ $t("yield.yield104") }}</v-btn>
                  </div>
                </div>
              </template>

              <template v-else-if="projectInfo.status == 'denied'">
                <div class="ProtocolsDetailsPC-layout flex flex-align-center flex-jus-end">
                  <div class="flex">
                    <div class="footer-Category">
                      <div class="footer-text1">{{ $t("yield.yield86") }}</div>
                      <div
                        class="footer-text2 flex"
                        style="margin-right: 50px"
                      >
                        <div>{{ handleCategory(projectInfo.category) }}</div>
                      </div>
                    </div>
                    <!-- Modify -->
                    <v-btn
                      class="footer-button2"
                      :loading="claimLoading"
                      @click="categoryDialogShow"
                    >{{ $t("yield.yield168") }}</v-btn>

                    <div class="footer-line"></div>
                  </div>

                  <div class="flex">
                    <div class="footer-Category">
                      <div class="footer-text1">{{ $t("yield.yield88") }}</div>
                      <div
                        class="footer-text2 flex"
                        style="margin-right: 50px"
                      >
                        <div>{{ $t(statusToLanguage[projectInfo.status]) }}</div>
                      </div>
                    </div>
                    <!-- Allow -->
                    <!-- <v-btn class="footer-button1" :loading="claimLoading" @click="handleAllow">{{ $t("yield.yield103") }}</v-btn> -->
                    <!-- Refuse -->
                    <!-- <v-btn class="footer-button2" :loading="claimLoading" @click="handleRefuse">{{ $t("yield.yield104") }}</v-btn> -->
                  </div>
                </div>
              </template>
            </template>
          </div>
          <!-- <a
            href="https://twitter.com/intent/tweet?url=https://dev.tokenyield.io/"
            target="_blank"
          >Twitter</a> -->
        </div>

        <div
          v-else-if="!loading"
          class="ProtocolsDetailsNodata"
        >
          <BaseNoData></BaseNoData>
        </div>
      </div>
    </div>

    <!-- Set Project Category -->
    <v-dialog
      width="90%"
      max-width="420px"
      v-model="categoryDialogVisible"
      :persistent="true"
    >
      <div class="dialogC">
        <div
          class="dialogC-close"
          @click="categoryDialogVisible = false"
        >
          <v-icon small>mdi-window-close</v-icon>
        </div>
        <div class="categoryDialog">
          <div class="categoryDialog-title">{{ $t("yield.yield62") }}</div>
          <!-- <div class="categoryDialog-des">Project category</div> -->
          <v-select
            v-model="categoryItem"
            :items="categoryList"
            :label="$t('yield.yield61')"
            outlined
            :menu-props="{ bottom: true, offsetY: true }"
          ></v-select>
          <div
            class="flex flex-jus-center"
            style="margin-top: 30px"
          >
            <v-btn
              class="setCategoryBtn"
              @click="handSetCategory"
            >{{ $t("yield.yield169") }}</v-btn>
          </div>
        </div>
      </div>
    </v-dialog>

    <!-- claim name dialog -->
    <v-dialog
      width="90%"
      max-width="360px"
      v-model="claimDialogVisible"
      :persistent="true"
    >
      <div class="dialogC">
        <div
          class="dialogC-close"
          @click="claimDialogVisible = false"
        >
          <v-icon small>mdi-window-close</v-icon>
        </div>
        <div class="categoryDialog">
          <div class="categoryDialog-title">{{ $t("yield.yield210") }}</div>
          <input
            class="input-cls"
            type="text"
            v-model="claimFormName"
            :placeholder="$t('yield.yield211')"
          />
          <!-- <div class="error-cls" v-if="claimFormName === ''">请输入接收账户</div> -->
          <div class="error-cls" v-if="claimFormName && !claimFormNameVeri">{{ $t("yield.yield209") }}</div>
          <div
            class="flex flex-jus-center"
            style="margin-top: 30px; width: 100%;"
          >
            <v-btn
              class="setCategoryBtn btn-cls"
              @click="handleClaimLast"
              :disabled="claimFormName === ''"
              :loading="claimLoading"
            >{{ $t("yield.yield169") }}</v-btn>
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
  metaInfo () {
    return {
      meta: this.meta
    }
  },
  name: "ProtocolsDetails",
  data() {
    return {
      meta: [],
      hasData: 0,
      // categoryItem: "cdp",
      // categoryList: ["cdp", "dexes", "lending", "staking", "yield"],
      categoryItem: this.$t("yield.yield46"),
      categoryList: [this.$t("yield.yield46"), this.$t("yield.yield47"), this.$t("yield.yield48"), this.$t("yield.yield49"), this.$t("yield.yield149")],
      categoryDialogVisible: false,
      claimDialogVisible: false,
      claimFormName: '',
      claimFormNameVeri: true,

      loading: false,
      projectName: "",
      projectInfo: null,
      claimLoading: false,

      adminAccountList: [this.contractA, "admin.yield"],

      overViewData: {
        tvl_usd: 0,
        agg_protocol_count: 0,
        tvl_eos: 0,
        tvl_usd_change: "0.00",
      },
      rewards: "-",

      statusToLanguage: {
        active: "yield.yield163",
        pending: "yield.yield162",
        denied: "yield.yield164",
      },
      descriptionHidden: true,
      checkedVal1: 'USD',
      overViewData1: [],
      tipsShow1: false,
      tipsShow2: false,
      tipsShow3: false,
      tipsShow4: false,
      audit_report: ['reports11', 'reports22', 'reports33'],
      annualRate: 0,
      eosRateUsdVal: 1
    }
  },
  components: {},
  props: {},
  watch: {
    'claimFormName': {
      handler: function (val) {
        if (!val) this.claimFormNameVeri = true
      }
    },
    'checkedVal1': {
      handler: async function () {
        try {
          // let item = JSON.parse(JSON.stringify(this.overViewData1[this.overViewData1.length - 1]))
          this.formatData(this.overViewData, this.overViewData1)
          // chart1.init({
          //   self: this,
          //   data: this.overViewData1,
          //   type: val
          // })
        } catch (error) {
          console.log(error)
        }
      }
    },
    'isMobile': {
      handler: async function () {
        this.$nextTick(() => {
          this.getInfo()
        })
      }
    },
  },
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
      // return 2
    },
    showWarnTip() {
      let showTip = Number(this.projectInfo.otherInfo.open_source) + Number(this.projectInfo.otherInfo.multi_sig) + Number(this.projectInfo.otherInfo.audit_report.length > 0)
      if (showTip < 2) {
        showTip = true
      } else {
        showTip = false
      }
      return showTip
    }
  },
  async created() {
    if (!this.$route.params?.contract) this.$router.push("/")
    this.projectName = decodeURIComponent(this.$route.params.contract)
    await this.getRate()
    await this.eosRateUsd()
    this.getAdminAccount()
    this.getInfo()
    this.getRewards()
  },
  mounted() { },
  beforeDestroy() { },
  methods: {
    async eosRateUsd() {
      try {
        const params = {
          code: 'oracle.defi',
          scope: 'oracle.defi',
          json: true,
          limit: -1,
          table: 'prices',
          lower_bound: 1,
          upper_bound: 1,
        }
        let res = await DApp.getTableRows(params)
        if (res.length > 0) {
          this.eosRateUsdVal = this.accDiv(res[0].avg_price, 10000)
        }
      } catch (error) {
        console.log(error, 'error');
      }
    },
    async getRate() {
      try {
        const params = {
          code: this.contractE,
          scope: this.contractE,
          json: true,
          limit: -1,
          table: 'config',
        }
        let res = await DApp.getTableRows(params)
        if (res.length > 0) {
          this.annualRate = res[0].annual_rate
        }
      } catch (error) {
        console.log(error, 'error');
      }
    },
    gotoEdit() {
      this.$router.push("/join/edit?name=" + encodeURIComponent(this.projectName))
    },
    async getRewards() {
      if (this.role !== 2) return
      const params = {
        code: this.contractE,
        scope: this.contractE,
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
          this.formatData(item, res.data)
        }
      } catch (error) {
        console.log(error)
      }
    },
    formatData(item, res) {
      this.hasData = 1
      if (item.tvl_eos > 6000000) {
        item.maxTag = true
        item.agg_rewards_change = this.checkedVal1 === 'USD' ?
          this.accMul(this.accDiv(this.accDiv(this.accMul(6000000, this.annualRate), 365), 10000), this.eosRateUsdVal)
          : this.accDiv(this.accDiv(this.accMul(6000000, this.annualRate), 365), 10000)
      } else if (item.tvl_eos < 200000) {
        item.agg_rewards_change = 0
        item.minTag = true
      } else {
        item.agg_rewards_change = this.checkedVal1 === 'USD' ?
          this.accMul(this.accDiv(this.accDiv(this.accMul(item.tvl_eos, this.annualRate), 365), 10000), this.eosRateUsdVal)
          : this.accDiv(this.accDiv(this.accMul(item.tvl_eos, this.annualRate), 365), 10000)
        item.midTag = true
      }
      if (this.checkedVal1 === 'USD') {
        item.tvl_usd_changeOld = item.tvl_usd_change
        // item.tvl_usd_change = item.tvl_usd_change/(tvl_eos-tvl_usd_change)*100
        // before
        // if (this.accSub(item.tvl_eos, item.tvl_usd_change) != 0 && this.accSub(item.tvl_eos, item.tvl_usd_change)) item.tvl_usd_change = this.accDiv(item.tvl_usd_change, this.accDiv(this.accSub(item.tvl_eos, item.tvl_usd_change), 100))
        // now
        if (this.accSub(this.projectInfo.tvl_usd, this.projectInfo.tvl_usd_change_day) != 0) {
          item.tvl_usd_change = this.accDiv(this.projectInfo.tvl_usd_change_day, this.accDiv(this.accSub(this.projectInfo.tvl_usd, this.projectInfo.tvl_usd_change_day), 100))
        } else {
          item.tvl_usd_change = 0
        }
        item.tvl_usd_change = this.toFixed(item.tvl_usd_change, 2)
        item.tvl_usd = this.toFixed(item.tvl_usd, 2)
        if (item.tvl_usd_change > 0) item.tvl_usd_change = `+${item.tvl_usd_change}%`
        else item.tvl_usd_change = `${item.tvl_usd_change}%`

        if (item.tvl_usd_changeDayOld == item.tvl_usd) item.tvl_usd_change = '0.00%'

        if (res.length > 1) {
          let lastItem = JSON.parse(JSON.stringify(res[res.length - 2]))
          if (lastItem.tvl_usd == 0) item.tvl_usd_change = '0.00%'
        }
      } else {
        item.tvl_usd_changeOld = item.tvl_eos_change
        // item.tvl_usd_change = item.tvl_usd_change/(tvl_eos-tvl_usd_change)*100
        // before
        // if (this.accSub(item.tvl_eos, item.tvl_usd_change) != 0 && this.accSub(item.tvl_eos, item.tvl_usd_change)) item.tvl_usd_change = this.accDiv(item.tvl_usd_change, this.accDiv(this.accSub(item.tvl_eos, item.tvl_usd_change), 100))
        // now
        if (this.accSub(this.projectInfo.tvl_eos, this.projectInfo.tvl_eos_change_day) != 0) {
          item.tvl_usd_change = this.accDiv(this.projectInfo.tvl_eos_change_day, this.accDiv(this.accSub(this.projectInfo.tvl_eos, this.projectInfo.tvl_eos_change_day), 100))
        } else {
          item.tvl_usd_change = 0
        }
        item.tvl_usd_change = this.toFixed(item.tvl_usd_change, 2)
        item.tvl_usd = this.toFixed(item.tvl_usd, 2)
        if (item.tvl_usd_change > 0) item.tvl_usd_change = `+${item.tvl_usd_change}%`
        else item.tvl_usd_change = `${item.tvl_usd_change}%`

        if (item.tvl_usd_changeDayOld == item.tvl_eos) item.tvl_usd_change = '0.00%'

        if (res.length > 1) {
          let lastItem = JSON.parse(JSON.stringify(res[res.length - 2]))
          if (lastItem.tvl_eos == 0) item.tvl_usd_change = '0.00%'
        }
      }

      this.overViewData = item

      chart1.init({
        self: this,
        data: res,
        type: this.checkedVal1
      })
      this.overViewData1 = res
    },
    async getInfo() {
      this.loading = true
      try {
        let result = await protocols.name(this.projectName)
        if (result.code === 200 && result.data) {
          let item = result.data
          // item.logo = ""
          item.metadataInfo = item.metadata

          item.logo = `https://ipfs.pink.gg/ipfs/${item.metadata.logo}`
          item.name = item.metadata.name
          item.audits = item.metadata.audits
          item.description = item.metadata.description
          item.website = item.metadata.website
          item.cmc = item.metadata.cmc
          item.recover = item.metadata.recover
          item.coingecko = item.metadata.coingecko
          item.dappradar = item.metadata.dappradar
          item.defillama = item.metadata.defillama
          item.discord = item.metadata.discord
          item.telegram = item.metadata.telegram
          item.twitter = item.metadata.twitter
          item.github = item.metadata.github
          item.tokenCode = item.metadata['token.code']
          item.tokenSymcode = item.metadata['token.symcode']
          item.otherInfo = {}
          item.otherInfo.name = ""
          item.otherInfo.multi_sig = null
          item.otherInfo.open_source = null
          item.otherInfo.main_contract = ""
          item.otherInfo.audit_report = []
          this.projectInfo = item
          // this.getSupplyInfo()
          await this.initView1Data()
          if (item.recover) this.getRecoverInfo()
          if (item.tokenCode && item.tokenSymcode) this.getSupplyInfo()
          // this.$nextTick(() => {
          // })
          // console.log("this.projectInfo is ", this.projectInfo)=
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
        url: `https://www.api.bloks.io/tokens/${this.projectInfo.tokenSymcode}-eos-${this.projectInfo.tokenCode}`,
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
        this.projectInfo.eosPrice = this.getKMBUnit(this.toFixed(info.price.quotes.USD, 2))
        this.projectInfo.mcTvlRatio = this.toFixed(this.accDiv(info.price.marketcap_usd, this.overViewData.tvl_usd), 2)
        this.projectInfo.fullyDVal = this.getKMBUnit(this.accMul(info.price.quotes.USD, info?.supply.max))
        this.projectInfo.fullyDValTvlRatio = this.toFixed(this.accDiv(this.accMul(info.price?.quotes.USD, info.supply.max), this.overViewData.tvl_usd), 2)
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
        account: this.contractE,
        name: "setcategory",
        authorization: [
          {
            actor: this.contractA,
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
      }, 2000)
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
        account: this.contractE,
        name: "approve",
        authorization: [
          {
            actor: this.contractA,
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
      setTimeout(() => {
        this.getAdminAccount()
        this.getInfo()
        this.getRewards()
      }, 2000)
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
        account: this.contractE,
        name: "deny",
        authorization: [
          {
            actor: this.contractA,
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
      setTimeout(() => {
        this.getAdminAccount()
        this.getInfo()
        this.getRewards()
      }, 2000)
    },
    async handleClaimLast() {
      const veriResult = await this.handleGetAccount()
      if (!veriResult) {
        this.claimFormNameVeri = false
        return
      } else {
        this.claimFormNameVeri = true
      }
      const permission = Array.isArray(this.$store.state.app.accountInfo.permissions) ? this.$store.state.app.accountInfo.permissions[0] : this.$store.state.app.accountInfo.permissions
      const formName = this.$store.state.app.accountInfo.account
      if (!formName) return
      const params = {
        actions: [],
      }
      this.claimLoading = true
      params.actions.push({
        account: this.contractE,
        name: "claim",
        authorization: [
          {
            actor: this.projectName,
            permission: permission || "active",
          },
          {
            actor: formName,
            permission: permission || "active",
          },
        ],
        data: {
          protocol: this.projectName,
          receiver: this.claimFormName,
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
      setTimeout(() => {
        this.getAdminAccount()
        this.getInfo()
        this.getRewards()
      }, 2000)
      this.claimDialogVisible = false
      // yes
      this.$toast("claim success!")
    },
    // account veri
    handleGetAccount() {
      const params = {
        account_name: this.claimFormName,
      };
      return new Promise(async (resolve) => {
        axios
        .post(`${this.$store.state.sys.node.httpEndpoint}/v1/chain/get_account`, JSON.stringify(params))
        .then((result) => {
          const res = result.data;
          if (res.account_name === this.claimFormName) {
            resolve(true);
            return;
          }
          resolve(false);
        })
        .catch(() => {
          resolve(false);
        });
      })
    },
    // Claim
    async handleClaim() {
      if (this.rewards == "-" || !this.rewards) return
      this.claimFormNameVeri = true
      this.claimDialogVisible = true
      this.claimFormName = this.$store.state.app.accountInfo.account
    },
    // getAdminAccount
    getAdminAccount() {
      axios({
        url: `${this.$store.state.sys.node.httpEndpoint}/v1/chain/get_account`,
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
    categoryDialogShow() {
      this.categoryItem = this.handleCategory(this.projectInfo.category)
      this.categoryDialogVisible = true
    },
    getColor(item) {
      const val = item.slice(0, item.length - 1)
      if (val > 0) {
        return 'color-green'
      } else if (val < 0) {
        return 'color-red'
      } else {
        return ''
      }
    },
    handleGrade(item) {
      if (item < 200000) {
        return ''
      } else if (item >= 200000 && item < 750000) {
        return 'Bronze'
      } else if (item >= 750000 && item < 1500000) {
        return 'Siver'
      } else if (item >= 1500000 && item < 3000000) {
        return 'Gold'
      } else {
        return 'Dimond'
      }
    },
    hideShow1() {
      this.tipsShow1 = false
    },
    hideShow2() {
      this.tipsShow2 = false
    },
    hideShow3() {
      this.tipsShow3 = false
    },
    hideShow4() {
      this.tipsShow4 = false
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
    font-size: 14px;
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
        text-align: center;
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
    word-break: break-all;
  }

  .ProtocolsDetails-data {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    border: 1px solid #e8e8e8;
    border-radius: 12px;
    padding: 15px;
    .tabCls {
      display: flex;
      flex-direction: row-reverse;
      ::v-deep .change-tab_cont {
        padding: 3px;
        a {
          padding: 2px 4px;
          font-size: 10px;
        }
      }
    }
    #view1Data {
      width: 100%;
      height: 400px;
    }
    .data-view {
      width: 100%;
      height: 180px;
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
      .flex-1 {
        align-self: baseline;
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
      .priceLeft {
        padding-left: 30px;
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
          font-size: 14px;
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
    // border-top: 1px solid #e8e8e8;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    background: #ffffff;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    .footer-height {
      height: 100px;
    }
    .footer-text1 {
      font-size: 12px;
      color: #525252;
    }
    .footer-text2 {
      font-weight: 600;
      font-size: 16px;
      color: #000000;
      margin-top: 5px;
    }
    .footer-text3 {
      width: 120px;
      font-weight: 400;
      font-size: 14px;
      color: #000000;
    }
    .footer-button1 {
      min-width: 120px;
      padding: 0 5px;
      height: 41px;
      line-height: 41px;
      text-align: center;
      background: #1c1dff;
      border: 1px solid #d1d1d1;
      border-radius: 5px;
      font-size: 14px;
      color: #fff;
    }
    .footer-button2 {
      min-width: 120px;
      padding: 0 5px;
      height: 41px;
      line-height: 41px;
      text-align: center;
      background: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 5px;
      font-size: 14px;
      color: #000000;
    }
    .footer-line {
      width: 1px;
      height: 100px;
      background: #e0e0e0;
      // margin-left: 35px;
      // margin-right: 35px;
    }
  }
}
.ProtocolsDetailsNodata {
  background: #fff;
  border-radius: 15px;
}

.ProtocolsDetailsPC {
  padding: 40px 0 70px;
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
        font-size: 22px;
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
    height: 500px;
    border-radius: 15px;
    border: 1px solid #e8e8e8;
    background-color: #fff;
    .box2-left {
      width: 260px;
      padding-left: 30px;
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
        div {
          font-size: 14px;
          font-weight: 500;
          color: #999999;
        }
      }
    }
    .box2-right {
      width: 100%;
      height: 100%;
      .tabCls {
        padding-right: 95px;
        display: flex;
        flex-direction: row-reverse;
        margin: 15px 0 -15px 0;
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
    padding: 30px;
    margin-bottom: 18px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-l {
      width: 810px;
      flex-flow: wrap;

      &_contL,
      &_contR {
        width: 50%;
        .box3-top {
          width: 33%;
          margin-bottom: 45px;
        }
        .box3-bottom {
          width: 50%;
        }
      }
      &_contL {
        padding-right: 15px;
        border-right: 1px solid #e8e8e8;
      }
      &_contR {
        padding-left: 15px;

        .box3-top {
          width: 50%;
          margin-bottom: 45px;
        }
      }
    }

    &-r {
      width: 370px;
      .box3-left,
      .box3-center,
      .box3-right {
        width: 50% !important;
      }

      .mb {
        margin-bottom: 45px !important;
      }
    }

    .box3-line {
      width: 1px;
      height: 100%;
      background-color: #e8e8e8;
      min-height: 110px;
      align-self: center;
    }
    .box3-left {
      // width: 204px;
      // padding-right: 10px;
    }
    .box3-center {
      flex: 1;
      // padding: 0 55px;
      padding-left: 40px;
    }
    .box3-right {
      // width: 100px;
      // padding-left: 10px;
    }
    .box3-title {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 500;
      color: #999999;
    }
    .priceLeft {
      padding-left: 30px;
    }
    .box3-text {
      font-size: 16px;
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
      // margin-bottom: 5px;
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

.maxTagCls {
  color: #13a57a !important;
  border: 1px solid #13a57a !important;
  font-weight: bold !important;
}
.midTagCls {
  color: #13a57a !important;
  border: 1px solid #13a57a !important;
}
.minTagCls {
  color: rgba(234, 87, 60, 1) !important;
  border: 1px solid rgba(234, 87, 60, 1) !important;
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

.setCategoryBtn {
  display: block !important;
  min-width: 80% !important;
  height: 50px !important;
  line-height: 50px !important;
  text-align: center;
  padding: 0 10px !important;
  background-color: #1c1dff !important;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  // border-radius: 24px;
  cursor: pointer;
  // margin-: 24px;
}
.review {
  position: relative;
  // border: 1px solid red;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // min-height: 300px;
  img {
    width: 80px;
  }
  span {
    font-size: 14px;
    margin: 20px 0;
  }
  .tabCls {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }
}
.imgStyle {
  width: 8px !important;
  height: 8px !important;
}
.box3-text {
  ::v-deep .v-btn:before,
  ::v-deep .theme--light.v-btn.v-btn--has-bg,
  ::v-deep .v-btn--is-elevated:active {
    background: none;
    box-shadow: none;
    padding-left: 0 !important;
  }
}
.noCursorPoint {
  cursor: text !important;
}
::v-deep .v-list {
  padding: 0 0 !important;
}

.input-cls {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  border: 1px solid #efefef;
  border-radius: 12px;
  position: relative;
  margin: 10px 0 5px;
}
.error-cls {
  color: red;
}

.btn-cls {
  width: 100% !important;
}

.categoryDialog-title {
  margin: 10px 0 0 !important;
  font-weight: bold;
}
</style>
