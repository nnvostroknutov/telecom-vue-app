<template>

<v-container>
<h2>Ваш баланс: {{currentBalance}}Р</h2>
<v-divider></v-divider>
<h2>История изменения баланса:</h2>
<v-data-table
      :items-per-page="10"
      :headers="headers"
      :items="items"
      :loading="loadTable"
      class="elevation-1"
      locale="ru"
    ></v-data-table>
</v-container>

</template>
<script>
    export default {
        name: 'user-transactions',
        data: () => ({
            headers: [
                {
                text: '№',
                align: 'start',
                sortable: false,
                value: 'id',
                },
                { text: 'Дата', value: 'date' },
                { text: 'Приход/Расход', value: 'receipt' },
                { text: 'Остаток', value: 'remainder' },
                { text: 'Комментарий', value: 'source' }
            ],
            items: [],
            loadTable: true,
            currentBalance: ''
        }),
        async created() {
            const {data}  = await this.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1");
            console.log(data);
            this.items = data.transactions;
            console.log(this.items);
            this.loadTable = false;
            this.currentBalance = data.transactions[data.transactions.length -1].remainder;
        },
    }
</script>
<style scoped>
v-divider {
    color: black !important;
}
h2 {
    padding-top: 15px;
}
</style>