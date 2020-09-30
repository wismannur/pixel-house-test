<template>
  <div class="content-index-list-posts">
    <h2 class="title-index">List Posts.</h2>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Cari Data"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <nuxt-link
          :to="'/list-post/add'"
          class="url-link-ef-tst"
        >
          <v-btn
            color="green"
            class="mb-2"
            outlined
          >
            <v-icon left>mdi-plus</v-icon>
            Tambah Data
          </v-btn>
        </nuxt-link>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :loading="loadingListData"
        loading-text="Sedang Memuat Data..."
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            class="mr-2"
            title="Ubah Data"
            @click="editItem(item)"
            color="warning"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            title="Hapus Data"
            @click="deleteItem(item)"
            color="error"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog
      v-model="dialogDeleteData"
      max-width="400"
    >
      <v-card>
        <v-container>
          <v-card-title class="headline justify-center">
            <h3>Hapus Data</h3>
          </v-card-title>

          <v-card-text class="text-center">
            Anda Yakin ingin menghapus Data <br> "{{ deleteData.komoditas }}" ?
          </v-card-text>

          <v-card-actions class="display-flex justify-center">
            <v-btn
              color="error"
              outlined
              @click="dialogDeleteData = false;"
            >
              Batal
            </v-btn>
            <v-btn
              color="green darken-1"
              outlined
              @click="dialogDeleteData = false; fixDeleteItem();"
            >
              Hapus
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import * as moment from 'moment';

export default {
  components: {
  },
  data () {
    return {
      search: '',
      loadingListData: true,
      headers: [
        {
          text: 'Actions',
          value: 'actions',
          align: 'start',
          sortable: false,
        },
        { text: 'Judul Post', value: 'title' },
        { text: 'Konten Post', value: 'body' },
      ],
      desserts: [],
      deleteData: {
        komoditas: ''
      },
      dialogDeleteData: false,
    }
  },
  methods: {
    init() {
      this.getListData();
    },
    getListData() {
      this.$gf().loadingPage().show();
      axios.get( this.$api().listPost() )
      .then((res) => {
        console.log('respons ', res);
        let data = res.data;
        this.desserts = data.map((e) => {
          let obj = {
            id: e.id,
            userId: e.userId,
            title: e.title.slice(0, 50) + '...',
            body: e.body.slice(0, 75) + '...',
            title_r: e.title,
            body_r: e.body,
          }
          return obj;
        });
        this.loadingListData = false;
        this.$gf().loadingPage().hide();
      })
    },
    editItem(item) {
      window.$nuxt.$cookies.set("dataEditIkan", item);
      this.$gf().loadingPage().show();
      setTimeout(() => {
        this.$router.push('/list-ikan/edit');
      }, 1000);
    },
    deleteItem(item) {
      this.deleteData = item;
      this.dialogDeleteData = true;
    },
    fixDeleteItem() {
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
.title-index {
  margin: 5px 0 10px 15px;
}
.url-link-ef-tst {
  text-decoration: none;
  margin-top: 15px;
}
@media (max-width: 481px) {
  .title-index {
    margin: 5px 0 10px 5px;
  }
}
</style>
