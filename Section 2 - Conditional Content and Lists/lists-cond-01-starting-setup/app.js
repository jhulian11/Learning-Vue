const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },
  computed: {
    goalEmpty() {
        return this.goals.length === 0;
    }
},
  methods:{
    addGoal(){
      console.log('aa', this.enteredGoalValue);
      
      if(this.enteredGoalValue !=  '')
        this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx){
      this.goals.splice(idx, 1);
    },
    // Nao chamar metodos direto no html usar computed properties
    isGoalsEmpty(){
      return this.goals.length === 0;
    }
  },
});

app.mount('#user-goals');
