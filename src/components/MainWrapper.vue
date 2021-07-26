<template>
    <v-app>
        <app-bar></app-bar>
        <v-main>
        <router-view>

        </router-view>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from './AppBar.vue';

export default {
  name: 'MainWrapper',

  components: {
    AppBar
  },

  data: () => ({
    
  }),

};
</script>