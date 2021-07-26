<template>
<div>
    <v-app-bar
        app
        color="#0091EA"
        dark
    >
        
        <v-app-bar-nav-icon @click.stop="updateDrawer()"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <router-link to = '/'>
          <v-btn
          text
          >

          <span class="mr-2">Выйти</span>
          <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </router-link>
    </v-app-bar>

    <v-navigation-drawer absolute v-model="drawer" temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{username}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{email}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
                          <router-link :to = item.path style="text-decoration: none; color: inherit;">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</div>

    
</template>

<script>
  export default {
    name: 'app-bar',
    data: () => ({
    drawer: false,
    items: [
        {title: 'Мой кабинет', icon: 'mdi-view-grid', path:'/home/cards'},
        { title: 'Личные данные', icon: 'mdi-account-circle', path: '/home/profile' },
        { title: 'История операций', icon: 'mdi-cog-transfer', path: '/home/actions' },
        { title: 'Личный счет', icon: 'mdi-account-cash', path: '/home/transactions' },
      ],
    username: '',
    email: ''
    }),
    methods: {
      updateDrawer: function() {
        this.drawer = !this.drawer
      }
    },
    async created() {
        const { data } = await this.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1");
        this.username = data.name;
        this.email = data.email
    }
  }
</script>

<style scoped>
</style>