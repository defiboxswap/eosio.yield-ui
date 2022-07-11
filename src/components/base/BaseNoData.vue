<template>
  <div class="BaseNoData">
    <div class="flext flex-align-center flex-jus-center">
      <img src="@/assets/img/BaseNoData/noData.png" class="BaseNoData-img" v-if="noDataType == 0" />
      <img src="@/assets/img/BaseNoData/noRecords.png" class="BaseNoData-img" v-else-if="noDataType == 1" />
      <img src="@/assets/img/BaseNoData/noCoin.png" class="BaseNoData-img" v-else-if="noDataType == 2" />
    </div>
    <!-- NoData -->
    <div class="BaseNoData-text">{{ noDataText == "" ? $t('yield.yield167') : noDataText }}</div>
  </div>
</template>
<script>
export default {
  name: "BaseNoData",
  data() {
    return {}
  },
  components: {},
  props: {
    noDataType: {
      default: 0,
      type: Number,
    },
    noDataText: {
      default: "",
      type: String,
    },
  },
}
</script>
<style lang="scss">
.BaseNoData {
  width: 100%;
  padding-top: 120px;
  .BaseNoData-img {
    width: 76px;
    height: auto;
  }
  .BaseNoData-text {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #c1c2c4;
    margin-top: 13px;
  }
}

@media (min-width: 1200px) {
  .BaseNoData {
    padding-top: 165px;
    padding-bottom: 160px;
  }
}
</style>
