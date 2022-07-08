<template>
  <v-dialog v-model="active" width="90%" max-width="400" :persistent="true">
    <div class="OperationStatus">
      <div class="close" @click="close">
        <v-icon small>mdi-window-close</v-icon>
      </div>
      <div class="flexc loadingIcon"><v-progress-circular :size="65" :width="2" indeterminate /></div>
      <div class="des">{{ title }}</div>
    </div>
  </v-dialog>
</template>
<script>
export default {
  name: 'toastLoading',
  data() {
    return {
      active: false,
    }
  },
  props: ['title'],
  mounted() {
    this.$nextTick(() => this.show())
  },
  watch: {
    active: function (isActive, wasActive) {
      this.$emit("toastLoadingStatusChange", isActive, wasActive)
    },
  },
  methods: {
    show() {
      this.active = true
    },
    close() {
      this.active = false
    },
  },
}
</script>
<style lang="scss" scoped>
.OperationStatus {
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
  .loadingIcon {
    margin-top: 50px;
  }
  .des {
    margin-top: 20px;
    line-height: 22px;
    font-size: 18px;
    font-weight: 600;
    color: #222222;
    line-height: 25px;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
