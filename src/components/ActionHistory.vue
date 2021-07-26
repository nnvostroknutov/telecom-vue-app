<template>

<v-container>
<h2>Архив действий</h2>
<v-divider></v-divider>
<v-data-table
      :headers="headers"
      :items="items"
      :loading="loadTable"
      :items-per-page="5"
      class="elevation-1"
      locale="ru"
    ></v-data-table>
</v-container>

</template>
<script>
export default {
    name: 'user-actions',
    data: () => ({
        headers: [
            {
            text: 'Дата и время',
            align: 'start',
            sortable: false,
            value: 'date',
            },
            { text: 'Действие', value: 'action_type' },
            { text: 'Статус', value: 'status' },
            { text: 'Примечание', value: 'comment' }
        ],
        items: [],
        loadTable: true
    }),
    async created() {
        const {data}  = await this.axios.get("https://my-json-server.typicode.com/nnvostroknutov/telecom-fake-backend/users/1");
        console.log(data);
        this.items = data.actions;
        console.log(this.items);
        this.loadTable = false;
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