<template>
  <div>
    <div>
      <h1>Edit Animalfood</h1>
      <form v-on:submit.prevent="editAnimalfood">
        <p>ประเภทสัตว์ : <input type="text" v-model="animalfood.typeanimal" /></p>
        <p>ยี่ห้อ : <input type="text" v-model="animalfood.brand" /></p>
        <p>สูตรอาหาร : <input type="text" v-model="animalfood.foodrecipes" /></p>
        <p>เลขทะเบียน : <input type="text" v-model="animalfood.registrationnumber" /></p>
        <p>ชนิดของอาหาร : <input type="text" v-model="animalfood.type" /></p>
        <p>ปริมาณ : <input type="text" v-model="animalfood.weight" /></p>
        <p>ส่วนประกอบ : <input type="text" v-model="animalfood.component" /></p>
        <p>คุณค่าทางโภชนาการ : <input type="text" v-model="animalfood.nutritionalvalue" /></p>
        <p>วันหมดอายุ : <input type="text" v-model="animalfood.expirationdate" /></p>
        <p>การจัดเก็บ : <input type="text" v-model="animalfood.storage" /></p>
        <p>ราคา : <input type="text" v-model="animalfood.price" /> บาท</p>
        <p>อุณหภูมิจัดเก็บ : <input type="text" v-model="animalfood.temperature" /></p>
        <p><button type="submit">edit animalfood</button></p>
      </form>
      </div>
      <hr />
      <div>
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
  </div>
  </template>
  <script>
  import AnimalfoodsService from "@/services/AnimalfoodsService";
  
  export default {
    data() {
      return {
        animalfood: {
          typeanimal:"",
          brand:"",
          foodrecipes:"",
          registrationnumber:"",
          type:"",
          weight:"",
          component:"",
          nutritionalvalue:"",
          expirationdate:"",
          storage:"",
          price:"",
          temperature:""
        },
      };
    },
    methods: {
    async editAnimalfood() {
      try {
        await AnimalfoodsService.put(this.animalfood);
        this.$router.push({ name: "animalfoods" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    try {
      let animalfoodId = this.$route.params.animalfoodId;
      this.animalfood = (await AnimalfoodsService.show(animalfoodId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped></style>