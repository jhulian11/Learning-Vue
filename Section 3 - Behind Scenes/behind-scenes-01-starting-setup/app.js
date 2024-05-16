const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount('#app');


const app2 = Vue.createApp({
  data(){
    return{
      favoriteMeal: "Pizza"
    };
  }
});

app2.mount('#app2');

///
const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handlerr = {
  set(target, key, value){
    if(key == "message")
    {
      target.longMessage = value + "World";
    }

    target.message = value;
  }
};

const proxy = new Proxy(data, handlerr);
proxy.message = "hello!!!!!";

console.log(proxy.longMessage);
