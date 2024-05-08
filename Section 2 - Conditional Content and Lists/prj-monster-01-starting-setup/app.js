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
        };
    },
    computed:{
        monsterBarStyles(){
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
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
    methods:{
        attackMonster(){
            const damage = getRandomValue(5,16);;
            this.monsterHealth -= damage;
            this.attackPlayer();
            this.roundCount++;
        },
        attackPlayer(){
            const damage = getRandomValue(8,20);
            this.playerHealth -= damage;
        },
        specialAtackMonster(){
            const damage = getRandomValue(11,26);
            this.monsterHealth -= damage;
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
            
            this.attackPlayer();
            this.roundCount++;
        }
    }
});

app.mount('#game');