<template>
  <v-dialog v-model="active" width="90%" max-width="400">
    <div class="OperationFailed">
      <div class="close" @click="close">
        <v-icon small>mdi-window-close</v-icon>
      </div>
      <div class="flexc failIcon">
        <img src="@/assets/img/svg/finsh.png" style="width:65px;height:65px">
      </div>
      <div class="title" v-if="title">{{ title }}</div>
      <div class="des" v-if="text">{{ text }}</div>

    </div>
  </v-dialog>
</template>
<script>
export default {
  name: 'toastFail',
  data() {
    return {
      active: false
    }
  },
  props: ['text', 'title'],
  mounted() {
    this.$nextTick(() => this.show())
  },
  watch: {
    active: function(isActive, wasActive) {
      this.$emit('toastFailStatusChange', isActive, wasActive)
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
.OperationFailed {
  background: #fff;
  position: relative;
  padding: 24px;
  .close {
    position: absolute;
    height: 30px;
    width: 30px;
    text-align: center;
    right: 0px;
    top: 0px;
    cursor: pointer;
  }
  .failIcon {
    margin-top: 26px;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #222222;
    margin-top: 10px;
    text-align: center;
  }
  .des {
    font-size: 13px;
    color: #adadad;
    line-height: 18px;
    margin-top: 20px;
    padding: 0 10px;
    text-align: center;
    word-break: break-all;
  }
  .btn {
    margin-top: 19px;
    width: 100%;
    height: 40px;
  }
}
</style>
