<template>
 <v-app>
  <v-app-bar dark app>
    <h3>Bike Service Application</h3>
    <v-spacer></v-spacer>
    <v-btn class="primary" @click="adminLogin">Admin</v-btn>
    <v-btn class="primary ml-2" @click="userLogin">User</v-btn>
  </v-app-bar>
  <v-container>
    Hello
  </v-container>
 </v-app>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      adminLogin(){
        this.$router.push('/adminLogin')
      },
      userLogin(){
        this.$router.push('/userLogin')
      }
    }
  }
</script>
