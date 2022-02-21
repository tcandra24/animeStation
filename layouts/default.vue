<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="false"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="true"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/" class="text-h5 white--text font-weight-bold text-decoration-none ml-5">
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <v-btn icon @click="dialog = true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
      <keep-alive>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar>
              <v-btn icon dark @click.stop="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-col
                cols="12"
                lg="6"
                md="6"
                class="mx-auto"
              >
                <v-text-field
                  v-model="search"
                  hide-details
                  append-icon="mdi-arrow-right"
                  outlined
                  autofocus
                  dense
                  clearable
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                  class="mr-5"
                  color="grey lighten-2"
                  @click:append="doSearch()"
                  @keyup.enter.native="doSearch()"
                />
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-subheader>
                Result search berhasil
              </v-subheader>
              <v-container
                class="ma-0 pa-0"
                fluid
                grid-list-sm
              >
                <v-row
                  dense
                  class="my-3"
                >
                  <v-col
                    v-for="(result, i) in results.data"
                    :key="i"
                  >
                    <v-responsive :aspect-ratio="16/9">
                      <v-card
                        color="primary"
                        width="210"
                        height="350"
                        dark
                        class="ma-4"
                        nuxt
                        :to="`detail/${result.id}`"
                      >
                        <v-img
                          :src="result.attributes.posterImage.small"
                          height="350"
                          width="210"
                        >
                          <v-card-title
                            class="text-subtitle-1"
                            style="background-color: #4242429c;"
                            v-text="Object.values(result.attributes.titles)[0]"
                          />
                        </v-img>
                      </v-card>
                    </v-responsive>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </keep-alive>
    </v-main>
    <v-footer
      app
      padless
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ title }} &copy; {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      dialog: false,
      search: '',
      results: [],
      items: [
        {
          icon: 'mdi-bookmark-box-multiple',
          title: 'Home',
          to: '/'
        }
      ],
      right: true,
      rightDrawer: false,
      title: 'Anime Station'
    }
  },
  head: {
    titleTemplate: '%s | Anime Station'
  },
  methods: {
    async doSearch () {
      this.results = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${this.search}`
      ).then(res => res.json())
    }
  }
}
</script>
