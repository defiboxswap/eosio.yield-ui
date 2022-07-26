<template>
  <div class="change-tab">
    <div class="change-tab_cont">
      <a :class="{'active': item.val === value}"
        v-for="item in list" :key="item.id"
        @click="handleClickTab(item.val)">
          {{item.val}}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseTab",
  data() {
    return {}
  },
  components: {},
  props: {
    value: {
      default: 'USD',
      type: String,
    },
    list: {
      default() {
        return [
          {
            id: 1,
            val: 'USD'
          },
          {
            id: 2,
            val: 'EOS'
          }
        ]
      },
      type: Array,
    }
  },
  methods: {
    handleClickTab(val) {
      this.$emit('input', val)
    },
  }
}
</script>
<style lang="scss">
.change-tab {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      margin: 8px 8px 0px;
      &_cont {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        gap: 16px;
        padding: 6px;
        // background-color: rgba(72, 84, 85, 0.2);
        border: 1px solid rgba(72, 84, 85, 0.2);
        border-radius: 12px;
        width: min-content;
        a {
          display: inline-block;
          font-weight: 500;
          font-size: 0.875rem;
          border-radius: 10px;
          background: none;
          padding: 6px 8px;
          color: rgba(0, 0, 0, 1);
        }
        .active {
          background: #1c1dff;
          color: rgb(255, 255, 255);
        }
      }
    }

@media (min-width: 1200px) {
  .BaseNoData {
    padding-top: 165px;
    padding-bottom: 160px;
  }
}
</style>
