class AdventureHero {
    constructor(heroName, heroAge, heroType) {
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType;
        
    }

    timeToChoose() {
        this.attack
        switch (this.heroType) {
            case "warrior":
                this.attack = ("used a sword")
                break;
            case "mage":
                this.attack = ("used a spell")
                break;
            case "monk":
                this.attack = ("used martial arts")
                break;
            case "ninja":
                this.attack = ("used a shuriken")
                break;
        }
    }

    actionBattle() {
        console.log(`O ${this.heroType} attacked while ${this.attack} `);
    }
}

let resultOfBattle = new AdventureHero("InfinityHunt", "21", "mage");
resultOfBattle.timeToChoose();
resultOfBattle.actionBattle();
