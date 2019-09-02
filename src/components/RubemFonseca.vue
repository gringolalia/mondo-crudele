<template lang="pug">
v-container(fluid='')
  v-slide-y-transition(mode='out-in')
    v-layout(column='', align-center='')
      img.mt-5(src='@/assets/biohazard.svg', alt='Netflix Vueing Habits', width='150px')

      h3.display-1 O Cobrador

      h2 Um Conto Sobre Rio de Dinheiro

      blockquote.subheading.text-xs-center.mt-2 O sucesso sempre incomoda <br /> os medíocres ambiciosos, <br /> os sonhadores incapazes, <br /> os fracassados em geral.
        footer
          small
            | &mdash; Rubem Fonseca

      v-layout
        span.display-4.group
          v-icon.mr-3(x-large='') settings_backup_restore
          v-icon.mr-3(x-large='') settings_input_antenna
          v-icon.mr-3(x-large='') settings_input_composite
          v-icon.mr-3(x-large='') place
          v-icon.mr-3(x-large='') local_library

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
