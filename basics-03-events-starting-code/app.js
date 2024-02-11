const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    submitForm(){
      alert("Sub");
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    setName(e,lastName){
      this.name = e.target.value + " " + lastName;
    },
    addCounter(num){
      this.counter = this.counter + num;
    },
    subCounter(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
