
import modalAddOrd from './components/modalAddOrd.vue';

import Axios from 'axios'




export default {

    data () {
        return{
            dialog: false,
            ordiNom:'',
            }
    },

    created() {

        //console.log('Component modalAddOrd created.')

    },

    methods:{

        addOrdinateur () {

            Axios
            .post("api/ordinateur/add", {
                newOrd: this.ordiNom
            })
            .then( ({data}) => {
                this.$emit('update', data.newOrd)
            })

        }
    }
}