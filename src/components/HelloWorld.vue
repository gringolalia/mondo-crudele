<template lang="pug">
v-container(fluid='')
  v-slide-y-transition(mode='out-in')
    v-layout(column='', align-center='')
      img.my-5(src='@/assets/biohazard.svg', alt='Netflix Vueing Habits', width='150px')

      h3.display-1 Bom Dia, Meia-Noite

      h2 Clonado na Cidade de S&atilde;o Pavlov

      blockquote
        footer

      h3.display-2.text-xs-center.mt-2.mt-3
        | &spades;
        | &#9728;
        | &#9737;
        | &#9765;
        | &#9770;
        | &#9791;
        | &#9810;
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
