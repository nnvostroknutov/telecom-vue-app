<template>
  <v-container class="form-container">
  <v-form class="info-form"
    >
      <v-text-field
        :counter="20"
        label="Логин"
        outlined
        required
        v-model="login"
      ></v-text-field>
      <v-text-field
        :counter="20"
        label="Фамилия"
        outlined
        required
        v-model="family_name"
      ></v-text-field>
      <v-text-field
        :counter="20"
        label="Имя"
        outlined
        required
        v-model="name"
      ></v-text-field>
      <v-text-field
        :counter="20"
        label="Отчество"
        outlined
        required
        v-model="patronymic"
      ></v-text-field>
      <v-text-field
        :counter="20"
        label="Пароль"
        outlined
        required
        v-model="password"
      ></v-text-field>
      <v-text-field
        :counter="20"
        label="E-mail"
        outlined
        required
        v-model="email"
      ></v-text-field>
      <v-btn
        color="success"
        class="mr-4"
        @click="changeUser"
      >
        Обновить
      </v-btn>
  
    </v-form>
    </v-container>
</template>

<script>
  export default {
    name: 'user-profile',
    data: () => ({
      id: '',
      login: '',
      name: '',
      family_name: '',
      patronymic: '',
      password: '',
      email: ''
    }),
    async created() {
        const { data } = await this.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1");
        console.log(data)
        this.id = data.id;
        this.login = data.login;
        this.name = data.name;
        this.family_name = data.family_name;
        this.patronymic = data.patronymic;
        this.password = data.password;
        this.email = data.email;
    },
    methods: {
      async changeUser() {
        const { data } = await this.axios.patch("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1", {
          id: this.id,
          login: this.login,
          name: this.name,
          family_name: this.family_name,
          patronymic: this.patronymic,
          password: this.password,
          email: this.email
        });

      }
    }
  }
</script>

<style scoped>
.form-container {
  display: flex;
  padding-top: 80px;
  justify-content: center;
}
.info-form {
  min-width: 50%;
}
</style>