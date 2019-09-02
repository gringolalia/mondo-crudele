<template lang="pug">
v-container(fluid)
  v-slide-y-transition(mode='out-in')
    v-layout(column align-center)
      img.my-5(src='@/assets/biohazard.svg' alt='Netflix Vueing Habits', width='150px')

      //- v-fab-transition
      //-   v-btn(v-show="!hidden" fab dark color='black' fixed bottom right)
      //-     v-icon local_bar

      v-speed-dial(fixed bottom right v-model='fab' :top='top' :bottom='bottom' :right='right' :left='left', :direction='direction' :open-on-hover='hover' :transition='transition')
        v-btn(slot='activator' v-model='fab' color='blue-grey darken-2' dark fab)
          v-icon waves

          v-icon close

        v-btn(fab dark small color='green darken-3')
          v-icon all_inclusive

        v-btn(fab dark small color='grey darken-4')
          i.fas.fa-star-and-crescent

        v-btn(fab dark small color='red darken-5')
          v-icon beach_access

      h3.display-1 Hello World, My Gringo Ass

      h2 Clonado na Cidade de S&atilde;o Pavlov

      blockquote.subheading.mt-3.text-xs-center Don't become a mere recorder of facts, <br /> but try to penetrate the mystery of their origin.
        footer
          small
            | &mdash; Ivan Pavlov

      v-layout
        span.display-4.group.mt-1.white
          v-icon.mr-3(x-large) fa-star-and-crescent
          v-icon.mr-3(x-large) fa-strikethrough
          v-icon.mr-3(x-large) translate
          v-icon.mr-3(x-large) touch_app
          v-icon.mr-3(x-large) fa-bullseye

</template>

<script>
  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: true,
      hover: false,
      tabs: false,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      }
    }
  }
</script>


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


  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }

</style>
