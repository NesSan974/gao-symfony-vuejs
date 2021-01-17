
import Axios from 'axios'
import compteur from './components/compteur.vue';




export default {

    components: {
        compteur
    },

    props: {
        ord: {
            default: function () {
                return {}
            },

        },
        date: {
            default: function () {
                return []
            },

        },
        clients: {
            default: function () {
                return []
            },
        }
    },

    data() {
        return {
            attributions: [],
            horraires: [],
        }
    },

    created() {

        this.initialize()

    },

    methods: {

        initialize() {
            this.ord.attributions.forEach(attribution => {
                this.attributions[attribution.horraire] = {
                    id: attribution.id,
                    nom: attribution.client.nom,
                    prenom: attribution.client.prenom
                };
            })

            this.displayHorraire()
        },

        displayHorraire() {
            this.horraires = []
            for (var i = 8; i <= 18; i++) {
                if (this.attributions[i] != undefined) {
                    this.horraires.push(this.attributions[i])
                } else {
                    this.horraires.push(i)
                }

            }
        },

        updateAtt(att) {
            console.log(this.attributions)

            this.ord.attributions.push(att)


            this.attributions[att.horraire] = {
                id: att.id,
                nom: att.client.nom,
                prenom: att.client.prenom
            };

            console.log(this.attributions)

            this.displayHorraire() 


        }


    }
}