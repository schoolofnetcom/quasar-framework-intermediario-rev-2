<template>
  <q-page padding>
    <h4>Novo estoque</h4>

    <form>
      <q-field
        label="Título"
      >
        <q-input v-model="data.title"></q-input>
      </q-field>
      <q-field
        label="Preço"
      >
        <q-input v-model="data.price"></q-input>
      </q-field>
      <q-field
        label="Custo"
      >
        <q-input v-model="data.cost"></q-input>
      </q-field>
      <q-field
        label="Descrição"
      >
        <q-input type="textarea" v-model="data.description"></q-input>
      </q-field>
      <q-field
        label="Alerta de quantidade"
      >
        <q-input v-model="data.alert_quantity"></q-input>
      </q-field>

      <q-btn color="lime-4" text-color="dark" @click="save()">Salvar</q-btn>
    </form>

  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: {
        status: 1
      }
    }
  },
  methods: {
    save() {
      const qs = require('qs');
      let data = qs.stringify(this.data);

      axios.post('http://localhost:8765/api/products.json', data).then(() => {
        this.$router.push('/products');
      })
    }
  }
}
</script>

<style>
  .layout-padding h4 {
    margin-top: 0;
  }
</style>
