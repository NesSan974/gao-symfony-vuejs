<template>
    <div class="col-md-10">

    	<v-card>

            <v-card-title>
                {{ ord.nom }}
            </v-card-title>

            <v-card-text>

            	<compteur @updateAtt="updateAtt" :horraires="horraires" :date="date" :ord="ord" :clients="clients"/>
				
                
            </v-card-text>

        </v-card>

                   
    </div>
</template>

<script src="../ordinateur.js">

</script>