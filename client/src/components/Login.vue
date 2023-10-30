<template>
   <div style="background-color:#d8dff3;">
    <div class="center">
      <div class="container">
        <center>
        <h1>User Login</h1></center>
        <form class="card"  v-on:submit.prevent="onLogin"><center><br /><br /><br />
            <p><B>Username:</B> <input  class="input" type="text" v-model="email" /></p>
            <p><B>Password:</B> <input class="input" type="password" v-model="password" /></p>
            <p><button class="button type1" type="submit">Login</button></p>
            <div class="error" v-if="error">{{ error }}</div>
        </center></form><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div> </div> </div>
</template>
<style scoped>
.error {
    color: red;
}
</style>
<script>
import AuthenService from "@/services/AuthenService";
export default {
    data() {
        return {
            email: "",
            password: "",
            error: null
        }
    },
    methods: {
        async onLogin() {
            try {
                const response = await AuthenService.login({
                    email: this.email,
                    password: this.password
                });
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)


                console.log(response)


                this.$router.push({
                    name: 'animalfoods'
                })

            } catch (error) {
                console.log(error)
                this.error = error.response.data.error
                this.email = ''
                this.password = ''

            }
        }
    }
}
</script>
<style scoped> 
.card {
    border-radius: 50px;
    height:300px;
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
  }
</style>