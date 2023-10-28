<template>
    <div>
      <h2>Get all Animalfoods</h2>
      <h4>จํานวนอาหารสัตว์ {{ animalfoods.length }}</h4>
      <p>
        <button v-on:click="navigateTo('/animalfood/create')">
          สร้างข้อมูลอาหารสัตว์
        </button>
      </p>
  
      <div v-for="animalfood in animalfoods" v-bind:key="animalfood.id">
        <p>เลขทะเบียนอาหารสัตว์ : {{ animalfood.registrationnumber }}</p>
        <p>ประเภทสัตว์ : {{ animalfood.typeanimal }}</p>
        <p>ยี่ห้อ : {{ animalfood.brand }}</p>
        <p>สูตรอาหาร : {{ animalfood.foodrecipes }}</p>
        <p>ปริมาณ : {{ animalfood.weight }}</p>
        <p>ราคา : {{ animalfood.price }} บาท</p>
        <p>
          <button v-on:click="navigateTo('/animalfood/' + animalfood.id)">
            ดูข้อมูลอาหารสัตว์
          </button>
  
          <button v-on:click="navigateTo('/animalfood/edit/' + animalfood.id)">
            แก้ไขข้อมูลอาหารสัตว์
          </button>
  
          <button v-on:click="deleteAnimalfood(animalfood)">ลบข้อมูลอาหารสัตว์</button>
        </p>
        <hr />
      </div>
    </div>
  </template>
  <script>
  import AnimalfoodsService from "@/services/AnimalfoodsService";
  export default {
    data() {
      return {
        animalfoods: [],
      };
    },
    async created() {
      try {
        this.animalfoods = (await AnimalfoodsService.index()).data;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      async deleteAnimalfood(animalfood) {
        let result = confirm("Want of delete?")
        if (result) {
        try {
          await AnimalfoodsService.delete(animalfood);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
      },
      async refreshData() {
        this.animalfoods = (await AnimalfoodsService.index()).data;
      },
    },
  };
  </script>
  <style scoped></style>