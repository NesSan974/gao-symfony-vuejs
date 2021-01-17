

import Axios from 'axios'




export default {

    props:{
        clients:{
            default:function(){
                return []
            },
        },
        horraire:{
            default:function(){
                return []
            },
        },
        ord:{
            default:function(){
                return {}
            },
        
        },
        date:{
            default:function(){
                return []
            },
        
        },
    },

    data () {
        return{
            dialog: false,
            clientName:'',
            }
    },

    created() {        

    },

    methods:{

        

        addAttribution () {

            var i =0
            var find = false


            while ( find == false && i < this.clients.length -1 ) {

                if ( this.clientName == this.clients[i].prenom ) {
                    find = true
                    

                }else{
                    i++
                }
                
            }

            Axios
            .post("api/attribution/add", {
                date: this.date,
                ordinateur_id:this.ord.id,
                client_id: this.clients[i].id,
                horraire: this.horraire

            })
            .then( ({data}) => {
                this.$emit('add', data.data)
            })

        },
    }
}