const app = Vue.createApp({
    data(){
        return {
            alertText: 'Alert',
            output1: 'OUTPUT',
            output2: 'OUTPUT'
        }
    },
    methods: {
        showAlert(){
            alert(this.alertText);
        },
        changeOutput(e, outputOrder){
            if(outputOrder == 1)
                this.output1 = e.target.value;

            if(outputOrder == 2)
                this.output2 = e.target.value;
        }
    }
});

app.mount('#assignment');