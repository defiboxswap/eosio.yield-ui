<template>
  <v-select
    v-model="chartsValue"
    :items="list"
    label=""
    multiple
    dense
    :menu-props="{ bottom: true, offsetY: true }"
  >
    <template v-slot:selection="{ index }">
      <span
        v-if="index === 0"
        class="grey--text text-caption flex"
      >
        <span class="back-cls">{{ chartsValue.length }}</span>
        <span style="color:#000;">Items</span>
      </span>
    </template>
    <template v-slot:prepend-item>
      <v-list-item
        ripple
        @mousedown.prevent
        @click="toggle"
      >
        <v-list-item-action>
          <v-icon :color="chartsValue.length > 0 ? 'indigo darken-4' : ''">
            {{ icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Select All
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2"></v-divider>
    </template>
  </v-select>
</template>
<script>
export default {
  name: "BaseTab",
  data() {
    return {
      chartsValue: []
    }
  },
  components: {},
  props: {
    value: {
      default() {
        return []
      },
      type: Array,
    },
    list: {
      default() {
        return []
      },
      type: Array,
    }
  },
  watch: {
    'value': {
      handler: function (val) {
        this.chartsValue = val
      }
    },
    'chartsValue': {
      handler: function (val) {
        this.$emit('input', val)
      }
    }
  },
  computed: {
    likesAllFruit () {
      return this.chartsValue.length === this.list.length
    },
    likesSomeFruit () {
      return this.chartsValue.length > 0 && !this.likesAllFruit
    },
    icon () {
      if (this.likesAllFruit) return 'mdi-close-box'
      if (this.likesSomeFruit) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
  },
  methods: {
    toggle () {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.chartsValue = []
        } else {
          this.chartsValue = this.list.slice()
        }
      })
    },
  }
}
</script>
<style lang="scss">
</style>
