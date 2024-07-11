<template>
    <h2>
        Name: {{ name }}
    </h2>
    <h3>
        Age: {{ age }}
    </h3>
</template>

<script>
export default {
    props:{
        id:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
    },
    data(){
        return{
            
        }
    },
    methods:{

    }
}
</script>