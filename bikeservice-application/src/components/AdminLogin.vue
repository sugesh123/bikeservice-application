<template>
    <v-card width="500" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="mx-auto mt-4">Admin Login</h1>
    </v-card-title>

    <v-card-text class="d-flex flex-column align-center">
      <v-form>
        <v-text-field
          type="text"
          v-model="username"
          label="Username"
          prepend-icon="mdi-account-circle"
          style="width: 400px"
        />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          label="Password"
          :prepend-icon="showPassword ? 'mdi-lock-open' : 'mdi-lock'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-btn color="green" elevation="15" prepend-icon="mdi-home">Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="primary" elevation="15" @click="adminLogin">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            showPassword:false,
            username:'',
            password:'',
        }
    },
    created(){
        // this.adminCredentials()
    },
    methods:{
        // adminCredentials(){
        //     const adminCredentials = {
        //         name:"admin",
        //         password:"admin123"
        //     }
        //     axios.post('adminCredentials.json',adminCredentials)
        //     .then((res)=>console.log(res))
        //     .catch((err)=>console.log(err))
        // },
        adminLogin(){
            axios.get('adminCredentials.json')
            .then((res)=>{
                const data = res.data
                const firstItemKey = Object.keys(data)[0];
                const name = data[firstItemKey].name;
                const password = data[firstItemKey].password
                if (this.username === name && this.password === password) {
                    this.$router.push('/adminPage')
                }else{
                    alert('Invalid Username or password')
                }

            })
            .catch((err)=>console.log(err))
        }
    }

}
</script>

<style>

</style>