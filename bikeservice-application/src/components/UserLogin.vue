<template>
    <v-card width="500" class="mx-auto mt-8">
    <v-card-title>
      <h1 class="mx-auto mt-4">User Login</h1>
    </v-card-title>

    <v-card-text  class="d-flex flex-column align-center">
      <v-form>
        <v-text-field
          type="text"
          v-model="username"
          label="Username"
          prepend-icon="mdi-account-circle"
          style="width: 450px"
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
    <v-card-text class="text-center">
            Don't have account? 
            <router-link to="/createAccount">Create Account</router-link>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="home" color="green" elevation="15" prepend-icon="mdi-home">Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="login" class="primary" elevation="15">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    data(){
        return{
            showPassword:false
        }
    }
}
</script>

<style>

</style>