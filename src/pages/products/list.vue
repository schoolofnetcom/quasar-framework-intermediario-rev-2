<template>
  <q-page padding>
    <h4>Produtos em estoque</h4>
    <q-table
      title="Produtos"
      :columns="columns"
      :data="products"
      no-data-label="Sem nenhum dado disponível"
      rows-per-page-label="Linhas por página"
      :pagination-label="paginationLabel"
    >
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="openProduct(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
      </q-tr>
    </q-table>

    <hr>

    <q-btn color="lime-4" text-color="dark" to="/products/create">Novo</q-btn>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
          {
            name: 'id',
            field: 'id',
            align: 'left',
            label: '#',
            sortable: true
          },
          {
            name: 'title',
            field: 'title',
            align: 'left',
            label: 'Título',
            sortable: true
          }
        ]
      }
  },
  methods: {
    openProduct(data) {
      this.$router.push('/products/' + data.id);
    },
    paginationLabel(start, end, total) {
      return start + ' até ' + end + ' de ' + total
    }
  },
  computed: {
    products() {
      return this.$store.state.products.products
    }
  },
  mounted() {
    this.$store.dispatch('products/list');
  }
}
</script>

<style>
  .layout-padding h4 {
    margin-top: 0;
  }
</style>
