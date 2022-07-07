<template>
  <div class="BaseNode">
    <div class="close" @click="handleClose">
      <v-icon small>mdi-window-close</v-icon>
    </div>
    <!-- Node list -->
    <div class="title">Node List</div>
    <div class="nodeList overflow-y-auto">
      <div class="nodeItem flexb pointer" v-for="(item, index) in list" :key="index" @click="handleChangeNode(index, item)">
        <div>
          <div class="name">{{ item.area }}</div>
          <div class="url">{{ item.url }}</div>
        </div>
        <div class="flexb">
          <div class="delay color-green" v-if="item.tip == 0">{{ item.time }}ms</div>
          <div class="delay color-yellow" v-else-if="item.tip == 1">{{ item.time }}ms</div>
          <div class="delay color-red" v-else-if="item.tip == 2">{{ item.time }}ms</div>
          <!-- time out -->
          <div class="delay color-red" v-else-if="item.tip == 3">time out</div>
          <div v-if="node.httpEndpoint == item.url">
            <img src="@/assets/img/BaseNode/selectYes.svg" alt="" style="width: 16px" />
          </div>
          <div v-else>
            <img src="@/assets/img/BaseNode/select.svg" alt="" style="width: 16px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import { commons } from "@/service"
import axios from "axios"
export default {
  name: "BaseNode",
  data() {
    return {
      list: [],
    }
  },
  computed: {
    ...mapState({
      node: (state) => state.sys.node,
    }),
  },
  props: ["visible"],
  watch: {
    visible(newVal) {
      if (newVal) {
        this.handleGetNodeTime()
      }
    },
  },
  created() {
    this.handleGetNodeInfo()
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false)
    },

    handleChangeNode(index, item) {
      if (item.url == this.node.httpEndpoint) {
        return
      }

      const deleteItem = this.list.splice(index, 1)
      this.list = deleteItem.concat(this.list)
      const node = { httpEndpoint: item.url, protocol: item.protocol, host: item.host, port: item.port, chainId: item.chainId, area: item.area }
      this.$store.dispatch("setNode", node)
      this.$emit("update:visible", false)
      setTimeout(() => {
        location.reload()
      }, 400)
    },
    // handleGetNodeInfo
    async handleGetNodeInfo() {
      this.loading = true
      const { status, result } = await commons.getNodeList()
      if (!status) {
        this.loading = false
      }
      if (status) {
        this.loading = false
        let list = result.nodeList.map((item) => {
          return { ...item, time: "", tip: 0 }
        })
        const index = list.findIndex((item) => {
          return item.url == this.node.httpEndpoint
        })

        if (index != -1) {
          const deleteItem = list.splice(index, 1)
          list = deleteItem.concat(list)
        }
        this.list = list
        this.handleGetNodeTime()
      }
    }, // handleGetNodeTime
    async handleGetNodeTime() {
      for (let i = 0; i < this.list.length; i++) {
        const time = new Date().getTime()
        axios
          .get(`${this.list[i].url}/v1/chain/get_info`)
          .then(() => {
            const deletTime = new Date().getTime() - time
            let tip = 0
            if (deletTime < 1000) {
              tip = 0
            }
            if (deletTime >= 1000 && deletTime <= 2000) {
              tip = 1
            }
            if (deletTime > 2000) {
              tip = 2
            }
            this.list[i].time = deletTime
            this.list[i].tip = tip
          })
          .catch(() => {
            this.list[i].tip = 3
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.BaseNode {
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
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #222222;
    line-height: 25px;
    // text-align: center;
  }
  .nodeList {
    margin: 27px auto 0;
    height: 45vh;
    .nodeItem {
      border-radius: 10px;
      border: 1px solid #eff0f1;
      height: 67px;
      padding: 17px 15px;
      margin-bottom: 20px;
      .name {
        font-size: 15px;
        font-weight: 600;
        color: #222222;
        line-height: 21px;
      }
      .url {
        font-size: 9px;
        color: #adadad;
      }
      .delay {
        margin-right: 10px;
        font-size: 13px;
      }
    }
  }
  .btn {
    width: 100%;
  }
}
</style>
