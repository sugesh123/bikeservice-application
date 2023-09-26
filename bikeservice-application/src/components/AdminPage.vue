<template>
  <v-app>
    <v-app-bar dark style="max-height: 50px;">
      <h3>Admin Page</h3>
    </v-app-bar>
    <v-container>
      <v-text-field
        label="Service Type"
        v-model="serviceType"
        prepend-icon="mdi-toolbox-outline"
        style="max-width: 400px;"
      ></v-text-field>
      <v-text-field
        label="Price"
        v-model="price"
        prepend-icon="mdi-cash-multiple"
        style="max-width: 400px;"
      ></v-text-field>
      <v-btn class="primary" @click="addService">Add service</v-btn>
      <v-container v-for="serv in service" :key="serv.name" class="d-flex">
        <v-chip>
          {{ serv.name }}
          <v-icon @click="editService(serv)">mdi-pencil</v-icon>
        </v-chip>
      </v-container>
    </v-container>

    <!-- Edit Service Dialog -->
    <v-dialog v-model="editDialog" max-width="400px">
      <v-card>
        <v-card-title>Edit Service</v-card-title>
        <v-card-text>
          <v-text-field label="Service Type" v-model="editedService.name"></v-text-field>
          <v-text-field label="Price" v-model="editedService.price"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="saveEditedService">Save</v-btn>
          <v-btn @click="closeEditDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      serviceType: '',
      price: '',
      service: [],
      editDialog: false, // Dialog for editing service
      editedService: { name: '', price: '' }, // Edited service details
    };
  },
  created() {
    this.displayService();
  },
  methods: {
    addService() {
      const serviceDetails = {
        serviceType: this.serviceType,
        price: this.price,
      };
      axios.post('service.json', serviceDetails)
        .then(() => {
          this.displayService();
        })
        .catch((err) => console.log(err));
    },
    displayService() {
      axios.get('service.json')
        .then((res) => {
          const data = res.data;
          const services = Object.values(data);
          const serviceDetails = services.map(service => ({
            name: service.serviceType,
            price: service.price,
          }));
          this.service = [...serviceDetails]; // Use spread operator to update the service array
        })
        .catch((err) => console.log(err));
    },
    editService(service) {
      // Open the edit dialog and set the editedService with the current values
      this.editedService = { ...service };
      this.editDialog = true;
    },
    saveEditedService() {
      // Use Axios PUT to update the service
      axios.put(`service.json?name=${this.editedService.name}`, this.editedService)
        .then(() => {
          this.displayService();
        })
        .catch((err) => console.log(err));
      this.closeEditDialog();
    },
    closeEditDialog() {
      // Close the edit dialog
      this.editDialog = false;
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
