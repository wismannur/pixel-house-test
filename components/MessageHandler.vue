<template>
  <no-ssr>
    <v-dialog v-model="loading" max-width="400">
      <v-card>
        <v-container>
          <v-card-title class="headline justify-center">
            <h3>{{ title }}</h3>
          </v-card-title>

          <v-card-text class="text-center" v-html="text">
          </v-card-text>

          <v-card-actions class="display-flex justify-center">
            <v-btn
              color="green darken-1"
              outlined
              @click="$gf().msgHandler().hide();"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </no-ssr>
</template>

<script>
export default {
  name: 'MessageHandler',
  components: {},
  data() {
    return {
      loading: false,
      title: '',
      text: '',
    }
  },
  mounted() {
    let dataMH = this.$gf().msgHdlrCond();
    this.title = dataMH.title;
    this.text = dataMH.text;
  },
  computed: {
    msgHandler() {
      return this.$gf().msgHdlrCond();
    }
  },
  watch: {
    msgHandler(newMH, oldMH) {
      oldMH;
      this.loading = newMH.show;
      this.title = newMH.title;
      this.text = newMH.text;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
