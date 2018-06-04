<template>
  <q-page padding>
    <h4>Detalhes do produto</h4>

    <table class="q-table q-table-horizontal-separator">
      <tbody>
        <tr>
          <th class="text-left">id</th>
          <td class="fit">{{ product.id }}</td>
        </tr>
        <tr>
          <th class="text-left">título</th>
          <td class="fit">{{ product.title }}</td>
        </tr>
        <tr>
          <th class="text-left">preço</th>
          <td class="fit">{{ product.price }}</td>
        </tr>
      </tbody>
    </table>

    <q-btn color="red" @click="deleteConfirm = !deleteConfirm">Remover</q-btn>

    <q-modal content-css="padding: 0 30px 30px 30px;" v-model="deleteConfirm">
      <h4>Tem certeza que quer remover?</h4>
      <q-btn color="grey" @click="deleteConfirm = false">Não</q-btn>
      <q-btn color="red" @click="remove()">Sim</q-btn>
    </q-modal>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {},
      deleteConfirm: false
    }
  },
  methods: {
    remove() {
      axios.delete('http://localhost:8765/api/products/' + this.$route.params.id + '.json')
        .then((response) => this.$router.push('/products'))
    }
  },
  mounted() {
    axios.get('http://localhost:8765/api/products/' + this.$route.params.id + '.json')
      .then((response) => this.product = response.data.product)
  }
}
</script>

<style>
  .layout-padding h4 {
    margin-top: 0;
  }
</style>
