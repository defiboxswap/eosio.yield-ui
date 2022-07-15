<template>
  <div>

    <div class="BaseFooter flex flex-align-center flex-jus-center" v-if="isMobile">
      <div class="flex flex-column flex-align-center">
        <!-- <img class="BaseFooter-logo" src="@/assets/img/BaseFooter/logo.png" /> -->
        <img class="BaseFooter-logo" src="@/assets/img/BaseHeader/logoDark.png" />
        <div class="BaseFooter-tips">Copyright © 2022 Yield+ All rights reserved.</div>
      </div>

    </div>
    <div class="BaseFooterPC" v-else>

      <div class="BaseFooterPC-Layout flex flex-align-center flex-jus-between">
        <div>
          <!-- <img class="BaseFooterPC-logo" src="@/assets/img/BaseFooter/logo.png" /> -->
          <img class="BaseFooterPC-logo" src="@/assets/img/BaseHeader/logoDark.png" />
          <div class="BaseFooterPC-tips">Copyright © 2022 Yield+ All rights reserved.</div>
        </div>
        <!-- <div class="BaseFooterPC-tips">If you have any questions please contact xxxxxx@gmail.com</div> -->
        <div class="BaseFooterPC-tips"> </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseFooter',
  data() {
    return {
    }
  },
  components: {},
  props: {},
  watch: {},
  computed: mapState({
    isMobile: state => state.app.isMobile
  }),
  created() {},
  mounted() {
  },
  beforeDestroy() {},
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.BaseFooter {
  background-color: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  height: 150px;
  .BaseFooter-logo {
    width: 100px;
    display: block;
    margin-bottom: 15px;
  }
  .BaseFooter-tips {
    font-size: 11px;
    font-weight: 300;
    color: #FFFFFF;
  }
}
.BaseFooterPC {
  background-color: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  .BaseFooterPC-Layout {
    width: 1200px;
    margin: 0 auto;
    // padding-top: 56px;
    // padding-bottom: 64px;
    height: 160px;
  }
  .BaseFooterPC-logo {
    width: 110px;
    display: block;
  }
  .BaseFooterPC-tips {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 300;
    color: #FFFFFF;
  }
}
</style>