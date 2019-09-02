<template lang="pug">
v-app.dignity
  v-navigation-drawer(persistent='', :mini-variant.sync='miniVariant', :clipped='clipped', v-model='drawer', enable-resize-watcher='', fixed='', app='', style='overflow: hidden;')
    v-list(style="padding: 0;")
      v-list-tile(avatar='', style="background-color: lightyellow;")
        v-list-tile-avatar
          i.fas.fa-sun.fa-4x.mr-0
        v-list-tile-title.title.with.dignity.ml-0
           | &nbsp;&nbsp;Engenho Novo LLC

    v-divider
    v-list
      v-list-tile.dignity(router v-for='item in items', :key='item.title', @click="drawer = false", style='height: 40px', :to='item.to', active-class="blue-grey lighten-3 white--text" exact)
        v-list-tile-action
          v-icon(v-html='item.icon')

        v-list-tile-content
          v-list-tile-title(v-text='item.title', style="color: inherit")

  v-toolbar(app='', :clipped-left='clipped')
    v-toolbar-side-icon(@click.stop='drawer = !drawer')

    v-btn(icon='', @click.stop='miniVariant = !miniVariant')
      v-icon(v-html="miniVariant ? 'chevron_right' : 'chevron_left'")

    v-btn(icon='', @click.stop='clipped = !clipped')
      v-icon local_airport

    v-btn(icon='', @click.stop='fixed = !fixed')
      v-icon restaurant

    v-btn(icon)
      v-icon(large color="blue-grey") beach_access

    v-toolbar-title.dignity.ml-0(v-text='title')

    v-spacer

    v-btn(icon='' to='/new-york')
      v-icon highlight_off

  v-content
    router-view.dignity.mb-5

  v-footer.hidden-sm-and-down(:fixed='fixed', app='')
    span.ml-3
      v-icon beach_access
      | &nbsp; Clonado na Samboja pelo Gran Bret&ocirc;nio 2018 e honi soit qui mal y pense
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
        { icon: 'directions_bike', title: 'Tour de Ibirapuera', to: '/bicicleta' },
        { icon: 'power_settings_new', title: 'Turn Me On, Dead Man', to:  '/turn-me' },
        { icon: 'business', title: 'Gotham Gothic', to: '/new-york' },
        { icon: 'edit', title: 'Rubem Fonseca', to: '/grande-arte' },
        { icon: 'commute', title: 'Action Painting', to: '/pollock' },
        { icon: 'restaurant', title: 'Hungry Generation', to: '/hungerers' },
        { icon: 'invert_colors', title: 'Farewell, Angelina', to: '/angelina' },
        { icon: 'ring_volume', title: 'Hello World My Ass', to: '/my-ass' }
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
