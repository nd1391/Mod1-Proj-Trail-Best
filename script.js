class Character {
    constructor(name) {
    this.name = name;
    }
}

class Posse {
    constructor (name, type, health, spirit, money) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.spirit = spirit;
        this.money = money;
    }
}

const moonshiner = new Posse('Moonshiner', 'Moonshiner', '200', '150', '100')
const hunter = new Posse('Hunter', 'Hunter', '200', '100', '200')
const outlaw = new Posse('Outlaw', 'Outlaw', '100', '100', '200')