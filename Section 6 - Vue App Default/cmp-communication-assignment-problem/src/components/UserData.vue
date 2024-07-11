<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label for="Age">Age</label>
            <input type="number" v-model="enteredAge">
        </div>
        <button type="submit"> Add User</button>
    </form>
</template>

<script>
export default {
    emits:['add-user'],
    data(){
        return{
            enteredName:"",
            enteredAge:"",
        }
    },
    methods:{
        submitData(){
            this.$emit('add-user', {name: this.enteredName, age: this.enteredAge})
        }
    }
}
</script>