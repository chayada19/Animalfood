import Vue from "vue";
import Router from "vue-router";
// Users
import UserIndex from "@/components/Users/Index";
import UserCreate from "@/components/Users/CreateUser";
import UserEdit from "@/components/Users/EditUser";
import UserShow from "@/components/Users/ShowUser";

import AnimalfoodIndex from "@/components/Animalfoods/Index";
import AnimalfoodShow from "@/components/Animalfoods/Showanimalfood";
import AnimalfoodEdit from "@/components/Animalfoods/Editanimalfood";
import AnimalfoodCreate from "@/components/Animalfoods/Createanimalfood";

import Login from "@/components/Login";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "users-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "user-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "user",
      component: UserShow
    },
    {
      path: "/animalfoods",
      name: "animalfoods",
      component: AnimalfoodIndex
    },
    {
      path: "/animalfood/create",
      name: "animalfood-create",
      component: AnimalfoodCreate
    },
    {
      path: "/animalfood/edit/:animalfoodId",
      name: "animalfood-edit",
      component: AnimalfoodEdit
    },
    {
      path: "/animalfood/:animalfoodsId",
      name: "animalfood",
      component: AnimalfoodShow
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});