export const state = () => ({
  loadingPage: false,
  messageHandler: {
    show: false,
    title: '',
    text: '',
  },
  cancelSvData: false,
  themeNow: true
});

export const mutations = {
  setCookies(state) {
    // window.$nuxt.$cookies.set('state', state, this.$gf().timeUpCookies());
    // window.$nuxt.$cookies;
    state;
  },
  setLoadingPage(state, data) {
    state.loadingPage = data;
  },
  setMsgHandler(state, data) {
    state.messageHandler = data;
  },
  setCancelSvData(state, data) {
    state.cancelSvData = data;
  },
  setThemeNow(state, data) {
    state.themeNow = data;
  }
}

export const getters = {
  getLoadingPage(state) {
    return state.loadingPage;
  },
  getMsgHandler(state) {
    return state.messageHandler;
  },
  getCancelSvData(state) {
    return state.cancelSvData;
  },
  getThemeNow(state) {
    return state.themeNow;
  }
}

export const actions = {

}


