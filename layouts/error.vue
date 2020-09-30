<template>
  <v-app dark class="page-not-found">
    <div class="message-nt">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.page-not-found {
  .message-nt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    > h1 {
      font-size: 2rem;
    }
    > a {
      font-size: 1.3rem;
    }
  }
}
</style>
