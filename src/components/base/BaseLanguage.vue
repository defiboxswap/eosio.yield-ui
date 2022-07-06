<template>
  <div class="BaseLanguage">
    <div class="close" @click="handleClose">
      <v-icon small>mdi-window-close</v-icon>
    </div>
    <!-- language switch -->
    <div class="title">{{ $t('yield.yield9') }}</div>
    <div class="languageList">
      <div class="languageItem flexb" v-for="(item, index) in list" :key="index" @click="handleChangeLanguage(item.key)">
        <div class="name">{{ item.name }}</div>
        <div v-if="language == item.key">
          <img src="@/assets/img/BaseNode/selectYes.svg" alt="" style="width: 16px;">
        </div>
        <div v-else>
          <img src="@/assets/img/BaseNode/select.svg" alt="" style="width: 16px;">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'BaseLanguage',
  data() {
    return {
      list: [
        {
          key: 'en',
          name: 'English'
        },
        {
          key: 'zh-TW',
          name: '繁體'
        },
        {
          key: 'ko',
          name: '한국어'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      language: (state) => state.app.language
    })
  },
  created() {},
  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    },

    handleChangeLanguage(language) {
      if (this.language == language) {
        return;
      }
      this.$i18n.locale = language;
      this.$store.dispatch('setLanguage', language);
      this.$emit('update:visible', false);
    }
  }
};
</script>
<style lang="scss" scoped>
.BaseLanguage {
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
  .languageList {
    // width: 260px;
    margin: 27px auto 0;
    .languageItem {
      border-radius: 10px;
      border: 1px solid #eff0f1;
      height: 55px;
      padding: 17px 15px;
      margin-bottom: 20px;
      cursor: pointer;
      .name {
        font-size: 15px;
        font-weight: 600;
        color: #222222;
        line-height: 21px;
      }
    }
  }
  .btn {
    width: 100%;
  }
}
</style>
