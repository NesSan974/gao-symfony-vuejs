import ordinateur from './components/ordinateur.vue';
import modalAddOrd from './components/modalAddOrd.vue';


import Axios from 'axios'


export default {
    components: {
        ordinateur,
        modalAddOrd,
    },

    data () {
        return{
            ordinateurs:[],
            date: new Date().toISOString().substr(0, 10),
            modal: false,
            clients:[]
        }
    },
    

    created() {

        this.ordList()
        this.getClients()

    },

    methods:{

        getClients(){
            Axios.get("api/clients/show").then( ({data}) => {
                
                this.clients=data.data
                
            })
        },

        dateUpdate(){

            this.ordinateurs=[]
            this.ordList()

        },

    	ordList(){
            
	    	Axios
	  		.post('/api/ordinateur/show', {'date' : this.date})
	  		.then(response => {

                console.log(response.data)

                for (var i = response.data.length - 1; i >= 0; i--) {
                    this.ordinateurs.push( response.data[i] )
                    
                }
                
              } )
              
    	},

        updateOrd (nom){
            this.ordinateurs.push({nom: nom})
            //console.log(nom)
        },



    }
}
