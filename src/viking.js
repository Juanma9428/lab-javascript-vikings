// Soldier
class Soldier {
    constructor(healt, strength){
        this.healt = healt
        this.strength = strength;
    }
        attack(){
            return this.strength;
        }
        reciveDamage(damage){
            this.healt -= damage;
        }
    
}


// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}
