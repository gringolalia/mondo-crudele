<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="item-title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      :clipped-left="clipped"
      >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>local_airport</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-btn icon><v-icon class="fa fa-gears" /></v-btn>
      <v-toolbar-title v-text="title" class="di"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
        <router-view/>
    </v-content>

    <v-footer :fixed="fixed" app class="dignity hidden-sm-and-down">
      <p text-xs-center><v-icon>beach_access</v-icon> Clonado na Samboja pelo Gran Bretônio 2018 e honi soit qui mal y pense</p>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        { icon: 'accessibility', title: 'Bom Dia, Meia-Note', to: '/' },
        { icon: 'free_breakfast', title: 'Adeus, Mundo Imundo', to: '/adeus' },
        { icon: 'directions_bike', title: 'Tour de Ibirapuera', to: '/biking' },
        { icon: 'power_settings_new', title: 'Turn Me On, Dead Man', to:  '/turn-me' },
        { icon: 'business', title: 'Gotham Gothic', to: '/new-york' },
        { icon: 'camera', title: 'Rubem Fonseca', to: '/grande-arte' },
        { icon: '3d_rotation', title: 'Action Painting', to: '/pollock' },
        { icon: 'restaurant', title: 'Hungry Generation', to: '/hungerers' }

    ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Engenho Novo LLC'
    }
  },
  name: 'App'
}
</script>
