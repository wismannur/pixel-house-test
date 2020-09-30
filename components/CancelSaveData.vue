<template>
  <no-ssr>
    <v-dialog v-model="loading" max-width="400">
      <v-card>
        <v-container>
          <v-card-title class="headline justify-center">
            <h3>Peringatan!</h3>
          </v-card-title>

          <v-card-text class="text-center">
            Apakah Anda yakin tidak ingin menyimpan semua perubahan?.
          </v-card-text>

          <v-card-actions class="display-flex justify-center">
            <v-btn
              color="error"
              outlined
              @click="$gf().cancelSvData().hide();"
            >
              Batal
            </v-btn>
            <v-btn
              color="green darken-1"
              outlined
              @click="yesCancel();"
            >
              YA!
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </no-ssr>
</template>

<script>
export default {
  name: 'CancelSaveData',
  components: {},
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    yesCancel() {
      this.$gf().cancelSvData().hide();
      this.$gf().backPage();
    }
  },
  computed: {
    msgHandler() {
      return window.$nuxt.$store.getters['getCancelSvData'];
    }
  },
  watch: {
    msgHandler(newCSD, oldCSD) {
      oldCSD;
      this.loading = newCSD;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
