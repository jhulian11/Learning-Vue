function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

const app = Vue.createApp({
    data(){
        return {
            btnShowHideText: "Hide",
            inputTask: '',
            tasks: []
        };
    },
    computed:{
        isListHidden(){
            return this.btnShowHideText == "Show";
        }
    },
    methods:{
        addTask(){
            if(!isEmptyOrSpaces(this.inputTask)){
                this.tasks.push(this.inputTask);
                this.inputTask = '';
            }

        },
        showHideList(){
            if(this.btnShowHideText == "Hide")  
                this.btnShowHideText = "Show";
            else
                this.btnShowHideText = "Hide";
        },
        removeTask(idx){
            this.tasks.splice(idx, 1);
        },
    }
});

app.mount("#assignment");