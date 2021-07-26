<template>
<v-container class="card-container">

    
    <v-card
    elevation="7"
    class="card"
    >
    
            <v-icon
        size="100"
        color="blue darken-1"
        
      >
        mdi-account-circle
      </v-icon>
      <router-link to = "/home/profile" style="text-decoration: none; color: inherit;">
      <v-card-title>
        Личные данные
      </v-card-title>
    </router-link>
    </v-card>
    <v-card
    elevation="7"
    class="card"
    >
    
            <v-icon
        size="100"
        color="blue darken-1"
        
      >
        mdi-cog-transfer
      </v-icon>
      <router-link to = "/home/actions" style="text-decoration: none; color: inherit;">
      <v-card-title class="card-title">
        История операций
      </v-card-title>
    </router-link>
    </v-card>
    <v-card
    elevation="7"
    class="card"
    >
    
            <v-icon
        size="100"
        color="blue darken-1"
        
      >
        mdi-account-cash
      </v-icon>
      <router-link to = "/home/transactions" style="text-decoration: none; color: inherit;">
      <v-card-title>
        Личный счет
      </v-card-title>
    </router-link>
    </v-card>

</v-container>
</template>
<script>
  export default {
    name: 'cards',
    data: () => ({
    drawer: false,
    username: '',
    email: ''
    })
  }
</script>
<style scoped>
.card-container {
  display: flex;
  padding-top: 80px;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
}
.card {
    margin-bottom: 50px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>