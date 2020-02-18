//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (constitution) => {
    if (constitution < 3) throw new Error('Ability scores must be at least 3');
    else if(constitution > 18) throw new Error('Ability scores can be at most 18');
    else return Math.floor((constitution - 10) / 2);
};

export class Character {
    constructor(){
        this.strength = Character.rollAbility();
        this.dexterity = Character.rollAbility();
        this.constitution = Character.rollAbility();
        this.intelligence = Character.rollAbility();
        this.wisdom = Character.rollAbility();
        this.charisma = Character.rollAbility();
        this.hitpoints = 10 + abilityModifier(this.constitution);
    }
    
    static rollAbility() {
        let dices = [];
        for(let i = 0; i < 4; i++){
            dices.push(parseInt((Math.random() * (6 - 1 + 1)), 10) + 1);
        }
        dices.sort();
        let score = dices[1] + dices[2] + dices[3];
        return score;
    }
}