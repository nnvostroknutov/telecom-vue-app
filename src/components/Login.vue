<template>
  <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-title>

                <h3 class="headline">
                  Телеком компания
                </h3>
                <v-flex>
                  <v-img  class="ml-3" contain height="80px" position="center right" src="https://5.imimg.com/data5/OM/OR/CK/SELLER-72915260/wirless-internet-service-providers-500x500.png"></v-img>
                </v-flex>

            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Авторизация</p>
              <v-form>
                <v-text-field
                              outline
                              label="Email"
                              type="text"
                              v-model="email"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              label="Пароль"
                              type="password"
                              v-model="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">

              <v-spacer></v-spacer>
              <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" @click.stop="login()">
                Войти
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import router from '../router/router'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {

      // GET запрос тк бэк фэйковый, json-server не принимает POST
      const res = await this.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1", {
          email: this.id,
          password: this.password
      })
      .then(function(response) {
        console.log("response");
        router.push("/home/cards");
      });
    }
  }
};
</script>