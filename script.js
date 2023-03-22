const stations = {
    station1: {
        name: `Valley of Trials`,
        textContent: `You arrive at the Valley of Trials, as the first leg of traveling has come to a screeching halt.  The sun is setting behind a beautiful view of the Valley of Trials, which you’ve named it in light of the road ahead.  How would you like to spend the night?
        `,
        userInput: `<input type="text">`,
        img: ``,
    },
    station2: {
        name: `Lush Forest`,
        textContent: `You decide to make camp in the Lush Forest, and a very lush forest it indeed is!  This is as good a place as any to stop and make camp for rest.  You carve your name into a nearby tree and start a fire.  Which activity would you like to partake in here?`,
        userInput: `<input type="text">`,
        img: ``,
    },
    station3: {
        name: `Middle of Nowehere`,
        textContent: `Time to stop in the Middle of Nowhere.  Serenity can be somewhat unsettling when you can’t even hear crickets in the distance.  Where are you?  While you assure the posse you’re not at all lost (you very well might be), you feel a bit of unease with how quiet your surroundings are.  What shall we all do?`,
        userInput: `<input type="text">`,
        img: ``,
    },
    station4: {
        name: `Abandoned Town`,
        textContent: `You finally approach what looked like a bustling town from a distance.  Not a soul in sight however, and you’re none too bothered by that.  Most of the buildings have been destroyed and the only ones left standing are littered with wanted posters.  The Abandoned Town is no longer bustling, but will provide shelter for your posse.  What happened here?  As your curiosity escapes you, you ponder on what your posse can do here…`,
        userInput: `<input type="text">`,
        img: ``,
    },
    station5: {
        name: `Quaint Crossroads`,
        textContent: `Aptly named the Quaint Crossroads, you arrive at a small junction of like-minded traders.  Imagine coming all this way and settling in a place like this?  While it may not be for you, the general public seems happy and secure.  How might you spend your time in this lowly village of merchants?`,
        userInput: `<input type="text">`,
        img: ``,
    }

}


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
//creating posses
const moonshiner = new Posse('Moonshiner', 'Moonshiner', '200', '150', '100')
const hunter = new Posse('Hunter', 'Hunter', '100', '100', '200')
const outlaw = new Posse('Outlaw', 'Outlaw', '100', '300', '200')

//activity effect values
const huntHealthBoost = 50
const huntSpiritBoost = 20
const huntMoneyBoost = 10

//activity effects
const actHunt = function () {
    this.health += huntHealthBoost;
    this.spirit += huntSpiritBoost;
    this.money -= huntMoneyBoost;
}

const actParty = function () {
    this.health += 10;
    this.spirit += 50;
    this.money -= 10;
}

const actSteal = function () {
    this.health -= 20;
    this.spirit -= 10;
    this.money += 50;
}

const actTrade = function () {
    this.health += 10;
    this.spirit += 20;
    this.money += 30;
}

const pitStop1 = function () {

}

//CLICKING AND EVENTLISTENERS
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const myTitle = document.querySelector('#main-title')
const userName = document.querySelector('#input-name')
const userPosse = document.querySelector('#role')
// const btn = document.querySelector("#btn")
let infoElement = document.getElementById("more-info");
let btnElement = document.getElementById("btn");
const drpDownElement = document.querySelector('#role')
  
btnElement.addEventListener("click", () => {
    // if (drpDownElement.value !== "Choose Your role")
    myTitle.textContent = `${userName.value}'s ${userPosse.value} Gang`;
        
})

infoElement.addEventListener("click", () => {
    p1.textContent = `Moonshiner:
    A life of shine!  You’ve lived a full life of hard work already, yet eager for a journey.  Bootleggin’ ain’t what it used to be, at least not around these parts.  So you welcome the idea of finding settlement elsewhere.  Your hard life has made you and yours better suited than most for the travel, and there ain’t a group from here to Hutzaplutz that can top your hoedown!  The road awaits you like a freshly cracked bottle o’ nectar!`
    p2.textContent = `Hunter:
    Are you the hunter or hunted?  Killing sheep can be easy, so long as the sheep don’t fight back!  You’ve built your wealth from your expertise with animals.  But the livestock farm you helped raise is evolving with the next generation, and they’re not too fond of how well you wield a set of shears and a gun.  Legend has it that an old bear came out of hibernation and trashed a caravan selling a mysterious medical substance.  He’s been terrorizing small towns with no suitable hunters able to track him.  You’re tired of all the lame sheep jokes you get so you set out to show your mettle against this worthy foe.  You stutter in fear as you read the nickname the bear has been dubbed - C-C-Cain Bear!  
    `
    p3.textContent = `Outlaw:
    You’re young, dumb and full of… GUN!  Guns plural, to be sure, and much ammo in those guns.  The going is tough but you and your gang are tougher.  The road ahead excites you, and your success is only limited by how wild you dare to be.  Stealing is your trade, but you can handle anything!  Anything but the law, who’s rumored to be tracking down outlaws such as yourself.  If only you knew of their whereabouts…
    `
    infoElement.value = "Go Back"
    infoElement.addEventListener("click", () => {
        
    })
})

btn_element.addEventListener("click", () => {
    document.getElementById("text2")
        .innerHTML = "Task 2 is performed";
});