<template>
  <div class="switch">
    <button @click="toggle();" class>
      <svg
        :style="{'color': fillCMP}"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="w-8 h-8"
      >
        <path
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    </button>
    <v-switch
      v-model="$vuetify.theme.dark"
      hide-details
      inset
      label="Theme Dark"
      id="switchCMP"
      :style="{'display': 'none'}"
    ></v-switch>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'ColorModePicker',
  data() {
    return {
      fillCMP: '#FFFFFF',
      fillGreen: '#00C58E',
      fillDark: '#2F495E',
      fillLight: '#FFFFFF',
    }
  },
  methods: {
    toggle() {
      $('#switchCMP')[0].click();
      let themeNow = this.$vuetify.theme.isDark;
      // console.log('click btn lamp', themeNow);
      themeNow ? this.$gf().setThemeNow().light() : this.$gf().setThemeNow().dark();
      this.fillCMP = themeNow ? this.fillLight : this.fillDark;
    },
  },
}
</script>

<style lang="scss" scoped>
.switch {
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  > button {
    width: 30px;
  }
}
</style>
