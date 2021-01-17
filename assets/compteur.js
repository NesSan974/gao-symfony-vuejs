import modalAddAttribution from './components/modalAddAttribution.vue';


export default {

    components:{
        modalAddAttribution
    },

    props:{
        horraires:{
            default:function(){
                return {}
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
        clients:{
            default:function(){
                return []
            },
        }
    },

    data () {
        return{
            msg:""
        }
    },

    created() {
        

    },

    methods:{

        addAttribution (att){
            //this.ordinateurs.push({nom: nom})
            this.$emit('updateAtt', att)
            
        }
    }
}