const app = Vue.createApp({
    data(){
        return{
            input1: "",
            input2: "",
            isVisible: true,
            visibleClass: '',
        }
    },
    computed: {
        paraClasses() {
            return{
                user1: this.input1 === "user1",
                user2: this.input1 === "user2",
                visible: this.isVisible,
                hidden: !this.isVisible,
            }
        }
    },
    methods:{
        toogleVisibility(){
            this.isVisible = !this.isVisible;
        },
        toogleVisible(){
            if(this.isVisible){
                this.isVisible = !this.isVisible
                this.visibleClass = 'visible';
            }
            else{
                this.isVisible = !this.isVisible
                this.visibleClass = 'hidden';
            }
        } 
    },
});

app.mount('#assignment');