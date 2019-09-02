<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/biohazard.svg" alt="Netflix Vueing Habits" width="150px" class="my-5">
        <h3 class="display-1">Farewell, Angelina</h3>
        <h2 class="mb-4">Robert Zimmerman and Joan Baez</h2>
        <blockquote>The machine guns are roaring, the puppets heave rocks <br />
        The fiends nail time bombs to the hands of the clocks<br />
        Call me any name you like, I will never deny it<br />
        But farewell, Angelina, the sky is erupting, I must go where it is quiet
          <footer class="text-xs-center mt-3">&mdash; The Brow of the Superbrain
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
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
