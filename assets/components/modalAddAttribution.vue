<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
          @click="dialog = true"
        >
          +
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Ajouter une attribution
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="4">

              <v-autocomplete
                :items="clients"
                color="white"
                
                label="client"
                item-text="prenom"
                item-value="prenom"
                v-model="clientName"
                
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <div v-if="clientName.length > 0">
            <v-btn
              color="primary"
              text
              @click="
                addAttribution();
                dialog = false;
              "
            >
              Ajouter
            </v-btn>
          </div>
          <div v-else>
            <v-btn color="primary" text disabled> Ajouter </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

  <script src="../modalAddAttribution.js" type="text/javascript"></script>