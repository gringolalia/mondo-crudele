<template lang="pug">
v-container(fluid='')
  v-slide-y-transition(mode='out-in')
    v-layout(column='', align-center='')
      img.my-5(src='@/assets/biohazard.svg', alt='Netflix Vueing Habits', width='150px')
      |
      h3.display-1 Turn Me On, Dead Man

      h2 Playbacking It Ass-Backwards

      blockquote.subheading.text-xs-center.mt-4
        div
          | Eles são o homem-ovo
        div
          |  Eu sou o homem-ovo
        div
          | Eu sou a morsa
        footer(style="text-align: center;")
          small
            | &mdash;&nbsp;John Lennon
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
