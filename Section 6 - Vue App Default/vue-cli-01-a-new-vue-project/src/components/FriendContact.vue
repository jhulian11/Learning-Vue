<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'  }} Details</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>


<script>

export default{
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone:'0123 4578 90',
                    email:"manuel@localhost.com"
            }
        };
    },
    methods:{
        toogleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};

</script>

