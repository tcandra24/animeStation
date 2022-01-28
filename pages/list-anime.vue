<template>
  <v-row dense>
    <v-col>
      <v-layout wrap>
        <v-flex
          v-for="(item, i) in items.data"
          :key="i"
          md
          class="pt-5 mx-2"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.attributes.titles.en_jp"
                />

                <v-card-subtitle v-text="item.type" />

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    Details
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.attributes.posterImage.small" />
              </v-avatar>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  async fetch () {
    this.items = await fetch(
      'https://kitsu.io/api/edge/anime?filter[text]=one%20piece'
    ).then(res => res.json())
  }
}
</script>
