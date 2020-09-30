export default (context, inject) => {
  const gf = () => {
    return {
      checkTrimText(val) {
        if ( val === '' || val === undefined || val === null ) {
          return '-';
        } else {
          return val;
        }
      },
      createUuid(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
      },
      getTimestamp() {
        var date = new Date();
        var timestamp = date.getTime();
        return timestamp;
      },
      backPage() {
        window.$nuxt.$router.go(-1);
      },
      convertToCurrency(n, currency) {
        return currency + n.toFixed(2).replace(/./g, function(c, i, a) {
          return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
        });
      },
      msgHdlrCond() {
        let data = window.$nuxt.$store.getters['getMsgHandler'];
        return data;
      },
      msgHandler() {
        let obj = {
          show: false,
          title: '',
          text: '',
        }
        return {
          show(title, text) {
            obj.show = true;
            obj.title = title;
            obj.text = text;
            window.$nuxt.$store.commit('setMsgHandler', obj);
          },
          hide() {
            obj.show = false;
            window.$nuxt.$store.commit('setMsgHandler', obj);
          }
        }
      },
      loadingPage() {
        return {
          show() {
            window.$nuxt.$store.commit('setLoadingPage', true);
          },
          hide() {
            window.$nuxt.$store.commit('setLoadingPage', false);
          }
        }
      },
      cancelSvData() {
        return {
          show() {
            window.$nuxt.$store.commit('setCancelSvData', true);
          },
          hide() {
            window.$nuxt.$store.commit('setCancelSvData', false);
          }
        }
      },
      getThemeNow() {
        return window.$nuxt.$store.getters['getThemeNow'];
      },
      setThemeNow() {
        return {
          dark() {
            window.$nuxt.$store.commit('setThemeNow', true);
          },
          light() {
            window.$nuxt.$store.commit('setThemeNow', false);
          }
        }
      }
    }
  }
  inject('gf', gf);
  context.$gf = gf;
}
