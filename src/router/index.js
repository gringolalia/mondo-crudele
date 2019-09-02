import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Adeus from '@/components/Adeus'
import BikeTour from '@/components/IbirapueraTour'
import ActionPainting from '@/components/ActionPainting'
import FarewellAngelina from '@/components/FarewellAngelina'
import DeadMan from '@/components/DeadMan'
import GothamGothic from '@/components/GothamGothic'
import RubemFonseca from '@/components/RubemFonseca'
import HelloWorldMyAss from '@/components/HelloWorldMyAss'
import HungryPoets from '@/components/HungryPoets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello World',
      component: HelloWorld
    },
    {
      path: '/angelina',
      name: 'Farewell Angelina',
      component: FarewellAngelina
    },
    {
      path: '/bicicleta',
      name: 'Tour de Samboja',
      component: BikeTour
    },
    {
      path: '/pollock',
      name: 'Action Painting',
      component: ActionPainting
    },
    {
      path: '/my-ass',
      name: 'HelloWorldMyAss',
      component: HelloWorldMyAss
    },
    {
      path: '/hungerers',
      name: 'HungryPoets',
      component: HungryPoets
    },
    {
      path: '/farewell',
      name: 'FarewellAngelina',
      component: FarewellAngelina
    },
    {
      path: '/turn-me',
      name: 'DeadMan',
      component: DeadMan
    },
    {
      path: '/new-york',
      name: 'GothamGothic',
      component: GothamGothic
    },
    {
      path: '/grande-arte',
      name: 'MandrakeMan',
      component: RubemFonseca
    }
  ]
})
