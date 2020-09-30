export default (context, inject) => {
  const api = () => {
    return {
      host() {
        let h = 'https://jsonplaceholder.typicode.com/';
        return h;
      },
      api() {
        return this.host();
      },
      listPost() {
        let url = this.api() + 'posts';
        return url;
      },
    }
  }
  inject('api', api);
  context.$api = api;
}
