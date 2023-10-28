<template>
    <div>
      <h1>Get Animalfood</h1>
        <p>ประเภทสัตว์ : {{ animalfood.typeanimal }}</p>
        <p>ยี่ห้อ : {{ animalfood.brand }}</p>
        <p>สูตรอาหาร : {{ animalfood.foodrecipes }}</p>
        <p>เลขทะเบียน : {{ animalfood.registrationnumber }}</p>
        <p>ชนิดของอาหาร : {{ animalfood.type }}</p>
        <p>ปริมาณ : {{ animalfood.weight }}</p>
        <p>ส่วนประกอบ : {{ animalfood.component }}</p>
        <p>คุณค่าทางโภชนาการ : {{ animalfood.nutritionalvalue }}</p>
        <p>วันหมดอายุ : {{ animalfood.expirationdate }}</p>
        <p>การจัดเก็บ : {{ animalfood.storage }}</p>
        <p>ราคา : {{ animalfood.price }}</p>
        <p>อุณหภูมิ : {{ animalfood.temperature }}</p>
    </div>
  </template>
  <script>
  import AnimalfoodsService from "@/services/AnimalfoodsService";
  export default {
    data() {
      return {
        animalfood: "",
      };
    },
    async created() {
      try {
        let animalfoodId = this.$route.params.animalfoodsId;
        this.animalfood = (await AnimalfoodsService.show(animalfoodId)).data;
      } catch (error) {
        console.log(error);
      }
    },
  };
  </script>
<style scoped></style>