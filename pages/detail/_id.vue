<template>
  <div>
    <div v-if="detail.data">
      <v-row
        v-if="detail.data.attributes.coverImage"
        dense
        class="mb-2"
      >
        <v-img
          height="300px"
          :aspect-ratio="16/9"
          :src="detail.data.attributes.coverImage.large"
        >
          <v-row>
            <v-col cols="auto">
              <div class="text-left pa-5">
                <p
                  class="text-h2 white--text font-weight-bold"
                  style="background-color: #4242429c;"
                >
                  {{ detail.data.attributes.canonicalTitle }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-img>
      </v-row>
      <v-row>
        <v-col
          cols="9"
          class="pa-5 text-justify"
        >
          <v-chip
            v-if="detail.data.attributes.averageRating"
            class="mx-2"
            pill
          >
            <v-icon v-if="detail.data.attributes.averageRating" color="yellow darken-3" left>
              mdi-star
            </v-icon>
            {{ detail.data.attributes.averageRating }}
          </v-chip>
          <v-chip
            v-if="detail.data.attributes.subtype"
            class="mx-2"
            pill
          >
            {{ detail.data.attributes.subtype.toUpperCase() }}
          </v-chip>
          <h1>
            Description
          </h1>
          <p v-text="detail.data.attributes.description" />
        </v-col>
        <v-col cols="3">
          <v-img
            :height="detail.data.attributes.posterImage.meta.dimensions.large.height"
            :width="detail.data.attributes.posterImage.meta.dimensions.large.width"
            :aspect-ratio="16/9"
            :src="detail.data.attributes.posterImage.large"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      detail: {}
    }
  },
  async fetch () {
    this.detail = await fetch(
      `https://kitsu.io/api/edge/anime/${this.id}`
    ).then(res => res.json())
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    ...mapGetters([
      'getSearchBarStatus'
    ])
  },
  created () {
    if (this.getSearchBarStatus) {
      this.changeSearchBarStatus(false)
    }
  },
  methods: {
    ...mapMutations([
      'changeSearchBarStatus'
    ])
  }
}
</script>
