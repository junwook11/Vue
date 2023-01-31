import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login/Login'

import MainHome from '../views/Main/Main'

import MapMain from '../views/Map/Main'

import BillMain from '../views/Bill/Main'
import BillDetail from '../views/Bill/Detail'
import BillFinish from '../views/Bill/Finish'

import ListMain from '../views/Shoplist/Main'
import ListDetail from '../views/Shoplist/Detail'
import ListCompare from '../views/Shoplist/Compare'

import RecipeMain from '../views/Recipe/Main'
import RecipeList from '../views/Recipe/List'
import RecipeDetail from '../views/Recipe/Detail'

import ShopCartMain from '../views/Shopcart/Main'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"login",
    component: Login
  },
  {
    path:"/main",
    name:"main",
    component: MainHome
  },
  {
    path:"/map",
    name:"map",
    component: MapMain
  },
  {
    path:"/bill",
    name:"bill",
    component: BillMain
  },
  {
    path:"/bill/detail",
    name:"bill-detail",
    component: BillDetail
  },
  {
    path:"/bill/finish",
    name:"bill-finish",
    component: BillFinish
  },
  {
    path:"/list",
    name:"list",
    component: ListMain
  },
  {
    path:"/list/:id",
    name:"list-detail",
    component: ListDetail
  },
  {
    path:"/list/compare",
    name:"list-compare",
    component: ListCompare
  },
  {
    path:"/recipe",
    name:"recipe",
    component: RecipeMain
  },
  {
    path:"/recipe/:id",
    name:"recipe-detail",
    component: RecipeDetail
  },
  {
    path:"/recipe/list",
    name:"recipe-list",
    component: RecipeList
  },
  {
    path:"/shopcart",
    name:"shop-cart",
    component: ShopCartMain
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
