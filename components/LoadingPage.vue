<template>
  <v-dialog v-model="loading" hide-overlay persistent width="300">
    <v-card color="primary" dark>
      <v-container>
        <div class="loading-d-page">
          <p color="primary" text-aligin-center>Loading...</p>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LoadingPage',
  data() {
    return {
      loading: this.$store.getters['getLoadingPage'],
    }
  },
  computed: {
    loadingPage() {
      return this.$store.getters['getLoadingPage']
    }
  },
  watch: {
    loadingPage(newLP, oldLP) {
      oldLP;
      this.loading = newLP;
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-d-page {
  padding: 15px;
  > p {
    text-align: center;
  }
}
</style>
