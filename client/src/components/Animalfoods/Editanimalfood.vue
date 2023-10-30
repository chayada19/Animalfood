<template>
  <div style="background-color:#d8dff3;">
    <div class="center">
      <div class="container">
        <center>
          <h1>Edit Animalfood</h1>
        </center>
        <form class="card" v-on:submit.prevent="editAnimalfood"><br />
          <p>&emsp;<B>เลขทะเบียนอาหารสัตว์</B> : <input class="input" type="text" v-model="animalfood.registrationnumber" /></p>
          <p>&emsp;<B>ประเภทสัตว์</B> : <input class="input" type="text" v-model="animalfood.typeanimal" /></p>
          <p>&emsp;<B>ยี่ห้อ</B> : <input class="input" type="text" v-model="animalfood.brand" /></p>
          <p>&emsp;<B>สูตรอาหาร</B> : <input class="input" type="text" v-model="animalfood.foodrecipes" /></p>
          <p>&emsp;<B>เลขทะเบียน</B> : <input class="input" type="text" v-model="animalfood.registrationnumber" /></p>
          <p>&emsp;<B>ชนิดของอาหาร</B> : <input class="input" type="text" v-model="animalfood.type" /></p>
          <p>&emsp;<B>ปริมาณ</B> : <input class="input" type="text" v-model="animalfood.weight" /> kg</p>
          <p>&emsp;<B>ส่วนประกอบ</B> : <input class="input" type="text" v-model="animalfood.component" /></p>
          <p>&emsp;<B>คุณค่าทางโภชนาการ</B> : <input class="input" type="text" v-model="animalfood.nutritionalvalue" /></p>
          <p>&emsp;<B>วันหมดอายุ</B> : <input class="input" type="text" v-model="animalfood.expirationdate" /></p>
          <p>&emsp;<B>การจัดเก็บ</B> : <input class="input" type="text" v-model="animalfood.storage" /></p>
          <p>&emsp;<B>ราคา</B> : <input class="input" type="text" v-model="animalfood.price" /> บาท</p>
          <p>&emsp;<B>อุณหภูมิจัดเก็บ</B> : <input class="input" type="text" v-model="animalfood.temperature" /></p>
          <center>
            <button class="button type1" type="submit">edit animalfood</button>
            <button class="button type1" onclick="history.back()" value="ย้อนกลับ">ยกเลิก</button>
          </center>
        </form>
      </div>
    </div>

    <div class="card1"><br />
      <p>&emsp;<B>เลขทะเบียนอาหารสัตว์</B> : {{ animalfood.registrationnumber }}</p>
      <p>&emsp;<B>ประเภทสัตว์</B> : {{ animalfood.typeanimal }}</p>
      <p>&emsp;<B>ยี่ห้อ</B> : {{ animalfood.brand }}</p>
      <p>&emsp;<B>สูตรอาหาร</B> : {{ animalfood.foodrecipes }}</p>
      <p>&emsp;<B>เลขทะเบียน</B> : {{ animalfood.registrationnumber }}</p>
      <p>&emsp;<B>ชนิดของอาหาร</B> : {{ animalfood.type }}</p>
      <p>&emsp;<B>ปริมาณ</B> : {{ animalfood.weight }}</p>
      <p>&emsp;<B>ส่วนประกอบ</B> : {{ animalfood.component }}</p>
      <p>&emsp;<B>คุณค่าทางโภชนาการ</B> : {{ animalfood.nutritionalvalue }}</p>
      <p>&emsp;<B>วันหมดอายุ</B> : {{ animalfood.expirationdate }}</p>
      <p>&emsp;<B>การจัดเก็บ</B> : {{ animalfood.storage }}</p>
      <p>&emsp;<B>ราคา</B> : {{ animalfood.price }}</p>
      <p>&emsp;<B>อุณหภูมิ</B> : {{ animalfood.temperature }}</p>
    </div>
  </div>
</template>
<script>
import AnimalfoodsService from "@/services/AnimalfoodsService";

export default {
  data() {
    return {
      animalfood: {
        typeanimal: "",
        brand: "",
        foodrecipes: "",
        registrationnumber: "",
        type: "",
        weight: "",
        component: "",
        nutritionalvalue: "",
        expirationdate: "",
        storage: "",
        price: "",
        temperature: ""
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
<style scoped>  .card {
    border-radius: 50px;
    height: 800px;
    width: 750px;
    box-shadow: 10px 10px 23px #6c718d,
      -10px -10px 23px #d6dfff;
    backdrop-filter: blur(6px) saturate(180%);
    -webkit-backdrop-filter: blur(6px) saturate(180%);
    background-color: rgba(124, 129, 142, 0.65);
  }

  .card1 {
    border-radius: 50px;
    height: 800px;
    width: 750px;
    box-shadow: 10px 10px 23px #6c718d,
      -10px -10px 23px #d6dfff;
    backdrop-filter: blur(6px) saturate(180%);
    -webkit-backdrop-filter: blur(6px) saturate(180%);
    background-color: rgba(124, 129, 142, 0.65);
    margin: auto;

  }


  .button {
    height: 50px;
    width: 200px;
    position: relative;
    background-color: #526B94;
    cursor: pointer;
    border: 2px solid #252525;
    overflow: hidden;
    border-radius: 30px;
    color: #333;
    transition: all 0.5s ease-in-out;


  }

  .btn-txt {
    z-index: 1;
    font-weight: 800;
    letter-spacing: 4px;
  }

  .type1::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s ease-in-out;
    background-color: #333;
    border-radius: 30px;
    visibility: hidden;
    height: 10px;
    width: 10px;
    z-index: -1;
  }

  .button:hover {
    box-shadow: 1px 1px 200px #252525;
    color: #fff;
    border: none;
  }

  .type1:hover::after {
    visibility: visible;
    transform: scale(100) translateX(2px);
  }

  .input {
    border: 0.25px solid #252525;
    width: 15em;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #dbddf4;
    border-radius: 50px;
    transition: all 0.5s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid #4A9DEC;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }

  .center {
    margin: auto;
    width: 50%;

    padding: 3%;
  }</style>