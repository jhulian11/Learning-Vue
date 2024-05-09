const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
    data() {
        return{
            roundCount: 0,
            specialAttackUsed: false,
            playerHealth: 100,
            monsterHealth: 100,
            winner: null,
            logs: []
        };
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth < 0)
                return {width: '0%'}

            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0)
                return {width: '0%'}
            return {width: this.playerHealth + '%'}
        },
        isSpecialAttackAvailable(){
            if(this.roundCount == 0)
                return false;

            if(!this.specialAttackUsed)
                return false;

            if(this.roundCount % 3 !== 0){
                this.specialAttackUsed = false;
                return true;
            }

            return true;
        }

    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = "draw";
            }
            else if(value <= 0){
                this.winner = "monster";
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = "draw";
            }
            else if(value <= 0){
                this.winner = "player";
            }
        },
    },
    methods:{
        startGame(){
            this.roundCount = 0;
            this.specialAttackUsed= false;
            this.playerHealth= 100;
            this.monsterHealth= 100;
            this.winner= null;
            this.logs = [];
        },
        attackMonster(){
            const damage = getRandomValue(5,16);;
            this.monsterHealth -= damage;
            this.addLogMessage('player',"attack", damage);
            this.attackPlayer();
            this.roundCount++;
        },
        attackPlayer(){
            const damage = getRandomValue(8,20);
            this.playerHealth -= damage;
            this.addLogMessage('monster',"attack", damage);
        },
        specialAtackMonster(){
            const damage = getRandomValue(11,26);
            this.monsterHealth -= damage;
            this.addLogMessage('player',"special attack", damage);
            this.attackPlayer();
            this.specialAttackUsed = true;
            this.roundCount++;
        },
        healPlayer() {
            const heal = getRandomValue(9,22);
            if(this.playerHealth + heal > 100)
                this.playerHealth = 100;
            else
                this.playerHealth += heal;
            
            this.addLogMessage('player',"heal", heal);
            this.attackPlayer();
            this.roundCount++;
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, action, value){
            this.logs.unshift({
                actionBy: who,
                actionType: action,
                actionValue: value
            });
        }
    }
});

app.mount('#game');