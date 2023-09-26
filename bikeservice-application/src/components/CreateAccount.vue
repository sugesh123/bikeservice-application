<template>
    <v-main>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="mx-auto mt-4">Create Account</h1>
        <h3 class="mx-auto mt-4 underline">Fill the details</h3>
      </v-card-title>
      <v-card-text style="width: 400px" class="d-flex flex-column align-center">
        <v-form>
          <v-text-field
            type="text"
            v-model.trim="username"
            id="username"
            label="Create Username"
            prepend-icon="mdi-account-circle"
            required
          />

          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            label="Create Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            required
          />

          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="cpassword"
            label="Confirm Password"
            prepend-icon="mdi-lock"
            required
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="home" color="green" elevation="15">
          <v-icon>mdi-home</v-icon>Home</v-btn
        >
        <v-spacer></v-spacer>

        <v-btn @click="createAcc" class="info" elevation="15"
          ><v-icon>mdi-pencil</v-icon>Create Account</v-btn
        ><br />
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackBar" :timeout="timeout">
      Account Created Successfully
    </v-snackbar>
  </v-main>
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