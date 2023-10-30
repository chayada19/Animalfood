<template>
  <div style="background-color:#d8dff3;">
    <div class="center">
      <div class="container">
        <center>
          <h1>Get all Animalfoods</h1>
          <h4>จํานวนอาหารสัตว์ {{ animalfoods.length }}</h4>
          <p>
            <button class="button type1" v-on:click="navigateTo('/animalfood/create')">
              สร้างข้อมูลอาหารสัตว์
            </button>
          </p>
        </center>

        <div class="card" v-for="animalfood in animalfoods" v-bind:key="animalfood.id"><br />
          <p>&emsp;<B>เลขทะเบียนอาหารสัตว์</B> : {{ animalfood.registrationnumber }}</p>
          <p>&emsp;<B>ประเภทสัตว์</B> : {{ animalfood.typeanimal }}</p>
          <p>&emsp;<B>ยี่ห้อ</B> : {{ animalfood.brand }}</p>
          <p>&emsp;<B>สูตรอาหาร</B> : {{ animalfood.foodrecipes }}</p>
          <p>&emsp;<B>ปริมาณ</B> : {{ animalfood.weight }}</p>
          <p>&emsp;<B>ราคา</B> : {{ animalfood.price }} บาท</p>
          <center>
            <p>
              <button class="button type1" v-on:click="navigateTo('/animalfood/' + animalfood.id)">
                ดูข้อมูลอาหารสัตว์
              </button>

              <button class="button type1" v-on:click="navigateTo('/animalfood/edit/' + animalfood.id)">
                แก้ไขข้อมูลอาหารสัตว์
              </button>

              <button class="button type1" v-on:click="deleteAnimalfood(animalfood)">ลบข้อมูลอาหารสัตว์</button>


            </p>
          </center>
        </div>
      </div>
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
<style scoped>  .card {
    border-radius: 50px;

    width: 750px;
    box-shadow: 10px 10px 23px #6c718d,
      -10px -10px 23px #d6dfff;
    backdrop-filter: blur(6px) saturate(180%);
    -webkit-backdrop-filter: blur(6px) saturate(180%);
    background-color: rgba(124, 129, 142, 0.65);


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


  .center {
    margin: auto;
    width: 50%;

    padding: 3%;
  }
</style>