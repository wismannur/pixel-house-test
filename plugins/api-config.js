export default (context, inject) => {
  const api = () => {
    return {
      host() {
        let h = 'https://stein.efishery.com/';
        return h;
      },
      version() {
        let v = 'v1/storages/5e1edf521073e315924ceab4/';
        return v;
      },
      api() {
        return this.host() + this.version();
      },
      list() {
        let url = this.api() + 'list';
        return url;
      },
      optionArea() {
        let url = this.api() + 'option_area';
        return url;
      },
      optionSize() {
        let url = this.api() + 'option_size';
        return url;
      }
    }
  }
  inject('api', api);
  context.$api = api;
}
