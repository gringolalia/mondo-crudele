<template lang="pug">
v-container(fluid='', align-content-space-around='')
  v-slide-y-transition(mode='out-in')
    v-layout(column='', align-center='')
      img.my-5(src='@/assets/biohazard.svg', alt='Netflix Vueing Habits', width='150px')

      v-fab-transition
        v-btn(v-show="!hidden", fab='', dark='', color='blue-grey', fixed='', bottom='', right='')
          v-icon local_bar


      h3.display-1
        v-icon directions_bike
        | &nbsp;Tour de San Pavlov
      h2 Sobre Pedalagens Fiscais
      blockquote.subheading.mt-4 Militat omnis amans
        footer
          small
            | &mdash; Ovidius the Nose

      v-layout
        span.display-4.group.mt-1.white
          v-icon.mr-3(x-large='') directions_transit
          v-icon.mr-3(x-large='') widgets
          v-icon.mr-3(x-large='') free_breakfast
          v-icon.mr-3(x-large='') local_bar
          v-icon.mr-3(x-large='') fa-motorcycle

</template>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
