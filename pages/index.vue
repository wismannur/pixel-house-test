<template>
  <div class="content-index">
    <div class="top-content">
      <h1>Pixel House Test Application</h1>
      <br>
      <v-row
        class="content-idx-page"
      >
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="text-center"
        >
          <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="wismannur"><a class="LI-simple-link" href='https://id.linkedin.com/in/wismannur?trk=profile-badge'>Wisman Nur Abdul Kholik</a></div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="8"
        >
          <p>Aplikasi Pixel House Test, adalah Tugas dari Pixel House untuk Wisman Nur Abdul Kholik.</p>
          <p>Aplikasi ini bisa CRUD (Create, Read, Update, Delete). Dan Aplikasi ini sudah di dukung dengan mode gelap dan terang, untuk kenyamanan Anda, bisa dengan klik icon lampu di sebelah kanan atas. Dan dengan tampilan responsive untuk resolusi dekstop dan mobile.</p>
          <p>Frontend Development :</p>
          <v-card>
            <v-container>
              <ul>
                <li
                  v-for="(fe, idx) in listFEDev"
                  v-bind:key="idx"
                >
                  <a class="n-link-e" :href="fe.url" target="_blank">
                    {{ fe.title }}
                  </a>
                </li>
              </ul>
            </v-container>
          </v-card>
          <br>
          <p>Dan API Development dengan <a class="n-link-e" :href="'https://steinhq.com/'" target="_blank">Steinhq</a>.</p>
          <p>Untuk mulai ke halaman data list harga ikan bisa dengan <a class="n-link-e" :href="'/list-ikan'">klik disini.</a>.</p>
          <p>Dan untuk mulai ke halaman data list provinsi/kota bisa dengan <a class="n-link-e" :href="'/list-provinsi-kota'">klik disini.</a>.</p>
          <p>Atau dengan melihat list menu yang sudah tersedia bisa dengan klik icon tiga baris di sebelah kiri atas.</p>
          <p>Code Repository Github : <a class="n-link-e" :href="'https://github.com/wismannur/pixel-house-test'" target="_blank">https://github.com/wismannur/pixel-house-test</a> </p>
          <p>Dan deployment Frontend dengan <a class="n-link-e" :href="'https://vercel.com/'">Vercel</a>.</p>
          <p>Sekian dan Terimakasih, Salam.</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

@Component({
  head() {
    return {
      title: 'Pixel House Test - By wismannur',
      meta: [
        { name: 'siteconfig:akamaibaseurl', content: 'https://pixel-house-test.wismannur.vercel.app' },
        { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: 'Pixel House Test - By wismannur' },
        { property: 'og:url', content: 'https://pixel-house-test.wismannur.vercel.app' },
        { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Pixel House Test - By wismannur' },
        { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Web made with VueJs and NuxtJs and Vuetify by wismannur.' },
        { property: 'og:image', content: 'https://pixel-house-test.wismannur.vercel.app' + '/icon.png' },
        { property: 'og:image', content: 'https://pixel-house-test.wismannur.vercel.app' + '/icon.png' },
        { property: 'og:image:width', content: '480' },
        { property: 'og:image:height', content: '360' },

        { hid: 'twitter:site', name: 'twitter:site', property: 'twitter:site', content: 'Pixel House Test - By wismannur' },
        { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: 'Pixel House Test - By wismannur' },
        { hid: 'twitter:description', name: 'twitter:description', property: 'twitter:description', content: 'Web made with VueJs and NuxtJs and Vuetify by wismannur.' },
        { name: 'twitter:image', content: 'https://pixel-house-test.wismannur.vercel.app' + '/icon.png' },
        { name: 'twitter:image', content: 'https://pixel-house-test.wismannur.vercel.app' + '/icon.png' },

        { hid: 'description', name: 'description', property: 'description', content: 'Web made with VueJs and NuxtJs and Vuetify by wismannur.' },
        { hid: 'keywords', name: 'keywords', content: 'Pixel House' },
      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
        { rel: 'image_src', href: '/icon.png' },
        { rel: 'image_src', href: '/icon.png' },
        { href: 'https://pixel-house-test.wismannur.vercel.app', rel: 'canonical' },

        { rel: 'icon', type:"image/png", href: 'https://pixel-house-test.wismannur.vercel.app' + '/favicon.ico', sizes:"16x16" },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "http://schema.org",
            "@type": "Web Application",
            "name": "Test",
            "image": 'https://pixel-house-test.wismannur.vercel.app',
            "description": "Web made with VueJs and NuxtJs and Vuetify by wismannur.",
            "url": "https://nuxt-mentorboxid.wismannur.vercel.app",
            "brand": {
              "@type": "Brand",
              "name": "Pixel House Test",
              "logo": 'https://pixel-house-test.wismannur.vercel.app' + "/icon.png"
            }
          }
        },
        {
          type: 'text/javascript',
          src: 'https://platform.linkedin.com/badges/js/profile.js'
        }
      ]
    }
  }
})
export default class Index extends Vue {
  listFEDev: Array<object> = [
    {
      title: 'VueJS',
      url: 'https://vuejs.org/'
    },
    {
      title: 'NuxtJS',
      url: 'https://nuxtjs.org/'
    },
    {
      title: 'VuetifyJS',
      url: 'https://vuetifyjs.com/'
    },
    {
      title: 'Vuex',
      url: 'https://vuex.vuejs.org/'
    },
    {
      title: 'Jquery',
      url: 'https://www.npmjs.com/package/jquery'
    },
    {
      title: 'Vue Cookie Universal Nuxt',
      url: 'https://www.npmjs.com/package/cookie-universal-nuxt'
    },
    {
      title: 'Dan beberapa custom styling oleh Saya dengan SCSS.',
      url: '#'
    },
  ]
  apiDev: Array<object> = [
    {
      title: 'Steinhq',
      url: 'https://steinhq.com/'
    }
  ]
}
</script>

<style lang="scss" scoped>
.content-index {
  > .top-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1 {
      color: #00C58E;
      text-align: center;
    }
    > .content-idx-page {
      width: 100%;
      .n-link-e {
        text-decoration: none;
      }
    }
  }
}
@media (max-width: 481px) {
  .content-index {
    > .top-content {
      > h1 {
        font-size: 1.7rem;
        text-align: center;
      }
      > .content-idx-page {
        flex-direction: column-reverse;
      }
    }
  }
}
</style>
