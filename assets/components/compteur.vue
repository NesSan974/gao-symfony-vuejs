<template>
  <div>
    <v-row v-for="(horraire, key) in horraires" :key="key">

        <v-col class="cols-md-1">
        {{key+8}}  
        </v-col>

        
        <v-col class="cols-md-9" v-if="horraire.id">
              {{horraire.nom}} {{horraire.prenom}}
        </v-col>

        <v-col v-else class="cols-md-2">
            <modalAddAttribution :ord="ord" :horraire="horraire" :clients="clients" :date="date" @add="addAttribution" />
        </v-col>

        

        



    </v-row>
  </div>
</template>

<script src="../compteur.js">
</script>