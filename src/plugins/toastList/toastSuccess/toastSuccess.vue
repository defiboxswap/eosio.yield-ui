<template>
  <v-dialog v-model="active" width="90%" max-width="400">
    <div class="SwapSuccess">
      <div class="close" @click="close">
        <v-icon small>mdi-window-close</v-icon>
      </div>

      <div class="flexc successIcon">
        <img src="@/assets/img/svg/finsh.png" style="width:65px;height:65px">
      </div>
      
      <div class="title" v-if="title">{{ title }}</div>

      <!-- <div class="trxBox flex pointer" @click="$openTxid(txId)" v-if="txId">
        TrxID:
        <div class="trxId">{{ txId }}</div>
      </div> -->
      <div class="SwapSuccess-text1" v-if="text1" style="margin-top: 10px;" v-html="text1"></div>
      <div class="SwapSuccess-text1" v-if="text2" v-html="text2"></div>
      <div class="SwapSuccess-text1" v-if="text3" v-html="text3"></div>
      <div class="SwapSuccess-text1" v-if="text4" v-html="text4"></div>


    </div>
  </v-dialog>
</template>
<script>
export default {
  name: 'toastSuccess',
  data() {
    return {
      active: false
    }
  },
  props: ['text', 'title', 'text1', 'text2', 'text3', 'text4', 'txId'],
  mounted() {
    this.$nextTick(() => this.show())
  },
  watch: {
    active: function(isActive, wasActive) {
      this.$emit('toastSuccessStatusChange', isActive, wasActive)
    }
  },
  methods: {
    show() {
      this.active = true
    },
    close() {
      this.active = false
    }
  }
}
</script>
<style lang="scss" scoped>
.SwapSuccess {
  background: #fff;
  position: relative;
  padding: 24px;
  padding-bottom: 40px;
  .SwapSuccess-text1 {
    width: 100%;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    color: #222222;
  }
  .close {
    position: absolute;
    height: 30px;
    width: 30px;
    text-align: center;
    right: 0px;
    top: 0px;
    cursor: pointer;
  }
  .successIcon {
    margin-top: 26px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #222222;
    margin-top: 20px;
    text-align: center;
  }
  .des {
    font-size: 14px;
    margin-top: 17px;
    line-height: 22px;
  }
  .trxBox {
    line-height: 12px;
    padding: 8px 14px;
    border-radius: 9px;
    border: 1px solid #979797;
    font-size: 12px;
    color: #222222;
    margin-top: 30px;
    .trxId {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .btn {
    margin-top: 30px;
    width: 100%;
    height: 40px;
    margin-bottom: 3px;
  }
}
</style>
