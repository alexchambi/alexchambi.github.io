new Vue({
    el:"main",
    
    data:{
        datos:[],
        filtro: "",
        activar: 0
    },
    mounted(){
        this.cargarPersonas();
    },
    methods:{
        cargarPersonas(){
            var url=("https://randomuser.me/api/?results=100");
            axios.get(url)
            .then((respuesta) => { 
                //console.log(respuesta);
                this.datos = respuesta.data.results;
            });
        }
    },
    computed: {
        filtrarPersonas(){
            return this.datos.filter((filtrar) => filtrar.name.first.includes(this.filtro));
        }
    }
});