const app = Vue.createApp({
    data(){
        return {
            result: 0,
        }
    },
    watch:{
        resultComputed(newResult,oldResult){
            if(newResult != oldResult)
            {
                this.breakTimer = true;
                setTimeout(() => {
                    console.log("Delayed for 5 second.");
                    this.result = 0;
                }, 5000);
            }
        }
    },
    computed:{
        resultComputed(){
            if(this.result < 37)
                return 'Not there yet';
            else if(this.result > 37)
                return 'Too much!';
            else
                return this.result;
        }
    },
    methods:{
        add(num){
            this.result += num;
        }
    }
});

app.mount('#assignment');
