<template>
  <div>
    <v-sheet
      class="mx-auto"
      elevation="1"
    >
      <div class="text-left text-h2 white--text font-weight-bold pa-5">
        Average Popular
      </div>
      <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(item, i) in items.data"
          :key="i"
          v-slot="{ active, toggle }"
        >
          <v-responsive :aspect-ratio="16/9">
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              dark
              class="ma-4"
              @click="toggle"
            >
              <v-img :src="item.attributes.posterImage.small">
                <v-card-title
                  class="text-h5"
                  style="background-color: #4242429c;"
                  v-text="item.attributes.titles.en_jp"
                />
              </v-img>
            </v-card>
          </v-responsive>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
