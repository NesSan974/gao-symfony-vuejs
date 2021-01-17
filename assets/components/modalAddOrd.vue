<template>
        	 <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          @click ="dialog = true"
        >
          +
        </v-btn>
        Ajouter un ordinateur
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Ajouter Ordinateur
        </v-card-title>

        <v-card-text>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="nom ordinateur"
                  v-model="ordiNom"

                  required
                ></v-text-field>
              </v-col>
            </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <div v-if="ordiNom.length > 0">
	          <v-btn
	            color="primary"
	            text
	            @click="addOrdinateur();dialog = false"
	            >
	            Ajouter
	          </v-btn>
          </div>
          <div v-else>
	          <v-btn
	            color="primary"
	            text
	            disabled>
	            Ajouter
	          </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  </template>

  <script src="../modalAddOrd.js" type="text/javascript"></script>