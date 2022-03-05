// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
  attack() {
    return this.strength;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    // this.saxonArmy[indexSaxon].receiveDamage(
    //   this.vikingArmy[indexViking].strength
    // );
    // if (this.saxonArmy[indexSaxon] > 0) {
    //   return `A Saxon has received ${this.vikingArmy[indexViking].strength} points of damage`;
    // } else {
    //   this.saxonArmy.splice(indexSaxon, 1);
    //   return `A Saxon has died in combat`;
    // }

    let indexV = Math.floor(Math.random() * this.vikingArmy.length);
    let indexS = Math.floor(Math.random() * this.saxonArmy.length);
    this.saxonArmy[indexS].receiveDamage(this.vikingArmy[indexV].strength);

    // let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    // let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    // this.saxonArmy[indexSaxon].receiveDamage(
    //   this.vikingArmy[indexViking].strength
    // );
  }
  saxonAttack() {}
  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
