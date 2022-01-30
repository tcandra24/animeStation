<template>
  <div>
    <v-row
      dense
      class="my-5"
    >
      <v-col>
        <SlideGroup :items="avg_rating" />
      </v-col>
    </v-row>
    <v-row
      dense
      class="my-5"
    >
      <v-col>
        <SlideGroup :items="popular" />
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
      model: null
    }
  },
  async fetch () {
    // https://kitsu.io/api/edge/anime?sort=-averageRating
    // https://kitsu.io/api/edge/anime?sort=-popularityRank
    // https://kitsu.io/api/edge/anime?filter[text]=one%20piece
    this.avg_rating = await fetch(
      'https://kitsu.io/api/edge/anime?sort=-averageRating'
    ).then(res => res.json())

    this.popular = await fetch(
      'https://kitsu.io/api/edge/anime?sort=-popularityRank'
    ).then(res => res.json())
  },
  head: {
    title: 'List anime'
  }
}
</script>
