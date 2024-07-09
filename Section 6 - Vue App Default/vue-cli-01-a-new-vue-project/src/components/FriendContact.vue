<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''  }}</h2>
    <button @click="toogleFavorite">Toogle Favorite</button>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'  }} Details</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone: </strong>{{ phoneNumber }}</li>
        <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>


<script>

export default{
    props:{
        id:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required: true
        },
        emailAddress:{
            type: String,
            required: true
        },
        isFavorite:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    // emits: ['toggle-favorite'],
    emits: {
        'toggle-favorite': function(id){
            if(id){
                return true;
            }
        }
    },
    data(){
        return{
            detailsAreVisible: false,
        };
    },
    methods:{
        toogleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
            this.phoneNumber
        },
        toogleFavorite(){
            this.$emit('toggle-favorite', this.id);
        }
    }
};

</script>

