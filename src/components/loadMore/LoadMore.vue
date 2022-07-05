<template>
  <div class="mint-loadmore">
    <div class="mint-loadmore-content" :class="{ 'is-dropped': topDropped || bottomDropped }" :style="{ transform: 'translate3d(0, ' + translate + 'px, 0)' }">
      <slot name="top">
        <div class="mint-loadmore-top" v-if="topMethod">
          <!-- <spinner v-if="topStatus === 'loading'" class="mint-loadmore-spinner" :size="20" type="fading-circle"></spinner> -->
          <v-progress-circular indeterminate color="primary" :size="20" v-if="topStatus === 'loading'"></v-progress-circular>
          <span class="mint-loadmore-text">{{ topText }}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <div class="mint-loadmore-bottom" v-if="bottomMethod">
          <!-- <spinner v-if="bottomStatus === 'loading'" class="mint-loadmore-spinner" :size="20" type="fading-circle"></spinner> -->
          <v-progress-circular indeterminate color="primary" :size="20" v-if="bottomStatus === 'loading'"></v-progress-circular>
          <span class="mint-loadmore-text" v-show="!bottomAllLoaded" style="margin-left:2px;">{{ bottomText }}</span>
        </div>
      </slot>
      <div v-if="bottomAllLoaded" style="text-align:center;color:#888888;font-size:12px;">{{ $t("defiBox.db437") }}</div>
    </div>
  </div>
</template>

<script>
// import spinner from './fading-circle/index.js';
// import './fading-circle/style.css'
export default {
  name: "mt-loadmore",
  props: {
    maxDistance: {
      type: Number,
      default: 0,
    },
    autoFill: {
      type: Boolean,
      default: true,
    },
    distanceIndex: {
      type: Number,
      default: 2,
    },
    topPullText: {
      type: String,
      // default: '下拉刷新'
      default: "Pull down refresh",
    },
    topDropText: {
      type: String,
      // default: '释放更新'
      default: "Release update",
    },
    topLoadingText: {
      type: String,
      // default: '加载中...'
      // default: "loading...",
      default: "",
    },
    topDistance: {
      type: Number,
      default: 70,
    },
    topMethod: {
      type: Function,
    },
    bottomPullText: {
      type: String,
      // default: '上拉刷新'
      default: "Pull up refresh",
    },
    bottomDropText: {
      type: String,
      // default: '释放更新'
      default: "Release update",
    },
    bottomLoadingText: {
      type: String,
      // default: '加载中...'
      // default: 'loading...'
      default: "",
    },
    bottomDistance: {
      type: Number,
      default: 70,
    },
    bottomMethod: {
      type: Function,
    },
    bottomAllLoaded: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    // spinner
  },
  data() {
    return {
      uuid: null,
      translate: 0,
      scrollEventTarget: null,
      containerFilled: false,
      topText: "",
      topDropped: false,
      bottomText: "",
      bottomDropped: false,
      bottomReached: false,
      direction: "",
      startY: 0,
      startScrollTop: 0,
      currentY: 0,
      topStatus: "",
      bottomStatus: "",
    }
  },

  watch: {
    topStatus(val) {
      this.$emit("top-status-change", val)
      switch (val) {
        case "pull":
          this.topText = this.topPullText
          break
        case "drop":
          this.topText = this.topDropText
          break
        case "loading":
          this.topText = this.topLoadingText == "" ? this.$t("defiBox.db287") : this.topLoadingText
          break
      }
    },

    bottomStatus(val) {
      this.$emit("bottom-status-change", val)
      switch (val) {
        case "pull":
          this.bottomText = this.bottomPullText
          break
        case "drop":
          this.bottomText = this.bottomDropText
          break
        case "loading":
          this.bottomText = this.bottomLoadingText == "" ? this.$t("defiBox.db287") : this.bottomLoadingText
          break
      }
    },
  },

  methods: {
    onTopLoaded(id) {
      if (id === this.uuid) {
        this.translate = 0
        setTimeout(() => {
          this.topStatus = "pull"
        }, 200)
      }
    },

    onBottomLoaded(id) {
      this.bottomStatus = "pull"
      this.bottomDropped = false
      if (id === this.uuid) {
        this.$nextTick(() => {
          if (this.scrollEventTarget === window) {
            document.body.scrollTop += 50
          } else {
            this.scrollEventTarget.scrollTop += 50
          }
          this.translate = 0
        })
      }
      if (!this.bottomAllLoaded && !this.containerFilled) {
        this.fillContainer()
      }
    },

    getScrollEventTarget(element) {
      let currentNode = element
      while (currentNode && currentNode.tagName !== "HTML" && currentNode.tagName !== "BODY" && currentNode.nodeType === 1) {
        let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
        if (overflowY === "scroll" || overflowY === "auto") {
          return currentNode
        }
        currentNode = currentNode.parentNode
      }
      return window
    },

    getScrollTop(element) {
      if (element === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
      } else {
        return element.scrollTop
      }
    },

    bindTouchEvents() {
      this.$el.addEventListener("touchstart", this.handleTouchStart)
      this.$el.addEventListener("touchmove", this.handleTouchMove)
      this.$el.addEventListener("touchend", this.handleTouchEnd)
    },

    init() {
      this.topStatus = "pull"
      this.bottomStatus = "pull"
      this.topText = this.topPullText
      this.scrollEventTarget = this.getScrollEventTarget(this.$el)
      if (typeof this.bottomMethod === "function") {
        this.fillContainer()
        this.bindTouchEvents()
      }
      if (typeof this.topMethod === "function") {
        this.bindTouchEvents()
      }
    },

    fillContainer() {
      if (this.autoFill) {
        this.$nextTick(() => {
          if (this.scrollEventTarget === window) {
            this.containerFilled = this.$el.getBoundingClientRect().bottom >= document.documentElement.getBoundingClientRect().bottom
          } else {
            this.containerFilled = this.$el.getBoundingClientRect().bottom >= this.scrollEventTarget.getBoundingClientRect().bottom
          }
          if (!this.containerFilled) {
            this.bottomStatus = "loading"
            this.bottomMethod(this.uuid)
          }
        })
      }
    },

    checkBottomReached() {
      if (this.scrollEventTarget === window) {
        return document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight
      } else {
        return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom
      }
    },

    handleTouchStart(event) {
      this.startY = event.touches[0].clientY
      this.startScrollTop = this.getScrollTop(this.scrollEventTarget)
      this.bottomReached = false
      if (this.topStatus !== "loading") {
        this.topStatus = "pull"
        this.topDropped = false
      }
      if (this.bottomStatus !== "loading") {
        this.bottomStatus = "pull"
        this.bottomDropped = false
      }
    },

    handleTouchMove(event) {
      if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
        return
      }
      this.currentY = event.touches[0].clientY
      let distance = (this.currentY - this.startY) / this.distanceIndex
      this.direction = distance > 0 ? "down" : "up"
      if (typeof this.topMethod === "function" && this.direction === "down" && this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== "loading") {
        event.preventDefault()
        event.stopPropagation()
        if (this.maxDistance > 0) {
          this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate
        } else {
          this.translate = distance - this.startScrollTop
        }
        if (this.translate < 0) {
          this.translate = 0
        }
        this.topStatus = this.translate >= this.topDistance ? "drop" : "pull"
      }

      if (this.direction === "up") {
        this.bottomReached = this.bottomReached || this.checkBottomReached()
      }
      if (typeof this.bottomMethod === "function" && this.direction === "up" && this.bottomReached && this.bottomStatus !== "loading" && !this.bottomAllLoaded) {
        event.preventDefault()
        event.stopPropagation()
        if (this.maxDistance > 0) {
          this.translate = Math.abs(distance) <= this.maxDistance ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate
        } else {
          this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance
        }
        if (this.translate > 0) {
          this.translate = 0
        }
        this.bottomStatus = -this.translate >= this.bottomDistance ? "drop" : "pull"
      }
    },

    handleTouchEnd() {
      if (this.direction === "down" && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
        this.topDropped = true
        if (this.topStatus === "drop") {
          this.translate = "50"
          this.topStatus = "loading"
          this.topMethod(this.uuid)
        } else {
          this.translate = "0"
          this.topStatus = "pull"
        }
      }
      if (this.direction === "up" && this.bottomReached && this.translate < 0) {
        this.bottomDropped = true
        this.bottomReached = false
        if (this.bottomStatus === "drop") {
          this.translate = "-50"
          this.bottomStatus = "loading"
          this.bottomMethod(this.uuid)
        } else {
          this.translate = "0"
          this.bottomStatus = "pull"
        }
      }
      this.direction = ""
    },
  },

  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8)
    this.init()
  },
}
</script>

<style>
.mint-spinner-fading-circle {
  position: relative;
}
.mint-spinner-fading-circle-circle {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
.mint-spinner-fading-circle-circle::before {
  content: " ";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  border-radius: 100%;
  -webkit-animation: mint-fading-circle 1.2s infinite ease-in-out both;
  animation: mint-fading-circle 1.2s infinite ease-in-out both;
}
.mint-spinner-fading-circle-circle.is-circle2 {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}
.mint-spinner-fading-circle-circle.is-circle2::before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.mint-spinner-fading-circle-circle.is-circle3 {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}
.mint-spinner-fading-circle-circle.is-circle3::before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.mint-spinner-fading-circle-circle.is-circle4 {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.mint-spinner-fading-circle-circle.is-circle4::before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.mint-spinner-fading-circle-circle.is-circle5 {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
}
.mint-spinner-fading-circle-circle.is-circle5::before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.mint-spinner-fading-circle-circle.is-circle6 {
  -webkit-transform: rotate(150deg);
  transform: rotate(150deg);
}
.mint-spinner-fading-circle-circle.is-circle6::before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.mint-spinner-fading-circle-circle.is-circle7 {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.mint-spinner-fading-circle-circle.is-circle7::before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.mint-spinner-fading-circle-circle.is-circle8 {
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg);
}
.mint-spinner-fading-circle-circle.is-circle8::before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.mint-spinner-fading-circle-circle.is-circle9 {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
}
.mint-spinner-fading-circle-circle.is-circle9::before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.mint-spinner-fading-circle-circle.is-circle10 {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}
.mint-spinner-fading-circle-circle.is-circle10::before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.mint-spinner-fading-circle-circle.is-circle11 {
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
}
.mint-spinner-fading-circle-circle.is-circle11::before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.mint-spinner-fading-circle-circle.is-circle12 {
  -webkit-transform: rotate(330deg);
  transform: rotate(330deg);
}
.mint-spinner-fading-circle-circle.is-circle12::before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}
@-webkit-keyframes mint-fading-circle {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes mint-fading-circle {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

.mint-loadmore {
  overflow: hidden;
}
/* .mint-loadmore-content {
} */
.mint-loadmore-content.is-dropped {
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
.mint-loadmore-top,
.mint-loadmore-bottom {
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.mint-loadmore-top {
  margin-top: -50px;
}
.mint-loadmore-bottom {
  margin-bottom: -50px;
}
.mint-loadmore-spinner {
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}
.mint-loadmore-text {
  vertical-align: middle;
}
</style>
