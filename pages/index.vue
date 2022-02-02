<template>
  <div>
    <v-row
      dense
      class="mb-2"
    >
      <v-col>
        <v-sheet
          class="mx-auto"
        >
          <v-slide-group
            show-arrows
          >
            <v-slide-item
              v-for="(category, index) in categories.data"
              :key="index"
              v-slot="{ active, toggle }"
            >
              <v-btn
                class="mx-2"
                :input-value="active"
                depressed
                rounded
                @click="toggle"
              >
                {{ category.attributes.title }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row dense>
      <v-img
        class="mb-5"
        height="70vh"
        :aspect-ratio="16/9"
        src="https://images8.alphacoders.com/108/1081458.jpg"
      >
        <v-row>
          <v-col cols="6">
            <div class="text-left pa-5">
              <p class="text-h2 white--text font-weight-bold">
                Attack On Titans
              </p>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    <v-row
      dense
      class="my-5"
    >
      <v-col>
        <SlideGroup :items="avg_rating" title="Average Popular" />
      </v-col>
    </v-row>
    <v-row
      dense
      class="my-5"
    >
      <v-col>
        <SlideGroup :items="popular" title="Popular Now" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avg_rating: [],
      popular: [],
      categories: []
    }
  },
  async fetch () {
    // https://kitsu.io/api/edge/anime?sort=-averageRating
    // https://kitsu.io/api/edge/anime?sort=-popularityRank
    // https://kitsu.io/api/edge/anime?filter[text]=one%20piece
    // https://kitsu.io/api/edge/anime/40591/categories
    // https://kitsu.io/api/edge/categories limit 10
    this.avg_rating = await fetch(
      'https://kitsu.io/api/edge/anime?sort=-averageRating'
    ).then(res => res.json())

    this.popular = await fetch(
      'https://kitsu.io/api/edge/anime?sort=-popularityRank'
    ).then(res => res.json())

    this.categories = await fetch(
      'https://kitsu.io/api/edge/categories?page[limit]=20'
    ).then(res => res.json())
  },
  head: {
    title: 'List anime'
  }
}
</script>
