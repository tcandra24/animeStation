<template>
  <div>
    <v-sheet
      class="mx-auto"
      elevation="2"
    >
      <div class="text-left text-h2 white--text font-weight-bold pa-5">
        {{ title }}
      </div>
      <v-divider />
      <v-slide-group
        class="pa-4"
        center-active
        show-arrows
      >
        <template v-if="items.data">
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
                <v-img
                  :src="item.attributes.posterImage.small"
                  height="350"
                  width="210"
                >
                  <v-card-title
                    class="text-subtitle-1"
                    style="background-color: #4242429c;"
                    v-text="Object.values(item.attributes.titles)[0]"
                  />
                </v-img>
              </v-card>
            </v-responsive>
          </v-slide-item>
        </template>
        <template v-else>
          <v-slide-item
            v-for="n in 9"
            :key="n"
            v-slot="{ toggle }"
          >
            <v-card
              color="grey lighten-1"
              dark
              class="ma-4"
              height="350"
              width="210"
              @click="toggle"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              />
            </v-card>
          </v-slide-item>
        </template>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    items: {
      type: [Object, Array],
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
