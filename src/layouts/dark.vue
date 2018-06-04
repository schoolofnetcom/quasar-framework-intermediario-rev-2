<template>
  <q-layout view="hHh lpr lff"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar
      color="dark"
      >
        <q-btn
          flat
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          e-Stock
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <q-toolbar color="lime-1" text-color="dark">
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          <span slot="subtitle">by School of Net</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
      content-class="bg-lime-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm" >
        <q-list
        link>
          <q-list-header>MENU</q-list-header>
          <q-item to="/">
            <q-item-main label="home" sublabel="exibe a página inicial" />
          </q-item>
          <q-item to="/products">
            <q-item-main label="produtos" sublabel="exibe produtos em estoque" />
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
.q-layout-footer {
  box-shadow: none;
}
</style>
