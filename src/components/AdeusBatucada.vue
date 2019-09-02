<template lang="pug">
v-container(fluid='')
  v-slide-y-transition(mode='out-in')
    v-layout(column='', align-center='')
      img.my-5(src='@/assets/biohazard.svg', alt='Netflix Vueing Habits', width='150px')

      h3.display-1 Adeus Batucada
      h2 The Genius of Carmen Miranda
      blockquote
        footer
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
