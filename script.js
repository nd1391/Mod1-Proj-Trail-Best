const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const myTitle = document.querySelector('#title')
const userName = document.querySelector('#input-name')
const userPosse = document.querySelector('#role')
let infoElement = document.getElementById("more-info");
let btnElement = document.getElementById("btn");
const drpDownElement = document.querySelector('.dropDown')
const gamePlayText = document.querySelector('.play-content')
const locName = document.querySelector('#welcome')
const endPic = document.querySelector('#pic')
const interactives = document.querySelector('.interactives')
let btn1,
btn2,
btn3,
btn4,
btn5;

const stations = {
    station1: {
        name: `Valley of Trials`,
        textContent: `<p id="p1">You arrive at the Valley of Trials, as the first leg of traveling has come to a screeching halt.  The sun is setting behind a beautiful view of the Valley of Trials, which you’ve named it in light of the road ahead.  How would you like to spend the night?
        </p>`,
        userTextInput: `<select name="role" id="role">
        <option selected disabled hidden>Whatcha Gunna Do</option>
        <option value="1">Hunt</option>
        <option value="2">Steal</option>
        <option value="3">Trade</option>
        <option value="4">Party</option>
    </select>`,
        userBtnInput: `<input type="button" id="station1Btn">`,
        img: ``,
    },
    station2: {
        name: `Lush Forest`,
        textContent: `You decide to make camp in the Lush Forest, and a very lush forest it indeed is!  This is as good a place as any to stop and make camp for rest.  You carve your name into a nearby tree and start a fire.  Which activity would you like to partake in here?`,
        userTextInput: `<input type="text" id="station2Act">`,
        userBtnInput: `<input type="button" id="station2Btn">`,
        img: ``,
    },
    station3: {
        name: `Middle of Nowehere`,
        textContent: `Time to stop in the Middle of Nowhere.  Serenity can be somewhat unsettling when you can’t even hear crickets in the distance.  Where are you?  While you assure the posse you’re not at all lost (you very well might be), you feel a bit of unease with how quiet your surroundings are.  What shall we all do?`,
        userTextInput: `<input type="text" id="station3Act">`,
        userBtnInput: `<input type="button" id="station3Btn">`,
        img: ``,
    },
    station4: {
        name: `Abandoned Town`,
        textContent: `You finally approach what looked like a bustling town from a distance.  Not a soul in sight however, and you’re none too bothered by that.  Most of the buildings have been destroyed and the only ones left standing are littered with wanted posters.  The Abandoned Town is no longer bustling, but will provide shelter for your posse.  What happened here?  As your curiosity escapes you, you ponder on what your posse can do here…`,
        userTextInput: `<input type="text" id="station4Act">`,
        userBtnInput: `<input type="button" id="station4Btn">`,
        img: ``,
    },
    station5: {
        name: `Quaint Crossroads`,
        textContent: `Aptly named the Quaint Crossroads, you arrive at a small junction of like-minded traders.  Imagine coming all this way and settling in a place like this?  While it may not be for you, the general public seems happy and secure.  How might you spend your time in this lowly village of merchants?`,
        userTextInput: `<input type="text" id="station5Act">`,
        userBtnInput: `<input type="button" id="station5Btn">`,
        img: ``,
    },
    station6: {
        name: `Journey Completed!`,
        textContent: `You did it, ${userName.value}!  You have completed the Oregon Trail in one piece!  Not many travelers make it this far, but here you stand with points in hand!  View your score below and give yourself a good ol' pat on the back!`,
        userTextInput: `<input type="text" id="station5Act">`,
        userBtnInput: `<input type="button" id="station5Btn">`,
        img: `<img src="https://i.imgur.com/X6eW9q2.png" alt="stooges">`,
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

//activity effects
actHunt = function () {
    this.health += 50;
    this.spirit += 20;
    this.money -= 10;
}

actParty = function () {
    this.health += 10;
    this.spirit += 50;
    this.money -= 10;
}

actSteal = function () {
    this.health -= 20;
    this.spirit -= 10;
    this.money += 50;
}

actTrade = function () {
    this.health += 10;
    this.spirit += 20;
    this.money += 30;
}
}
//creating posses
const moonshiner = new Posse('Moonshiner', 'Moonshiner', 200, 150, 100)
const hunter = new Posse('Hunter', 'Hunter', 100, 100, 200)
const outlaw = new Posse('Outlaw', 'Outlaw', 100, 300, 200)

class Sidekick {
    constructor(name,type,health,spirit,money) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.spirit = spirit;
        this.money = money;}

    govern = function () {
    this.health *= 0;
    this.spirit *= 0;
    this.money *= 0;
    }

    payote = function () {
        this.health += 100;
    this.spirit *= 5;
    this.money += 0;
    }

    extraHunt = function () {
        this.health += 50;
    this.spirit += 50;
    this.money += 0;
    }

    getGem = function () {
        this.health += 0;
    this.spirit += 0;
    this.money += 1000;
    }
}

const wolfie = new Sidekick('Ghost', 'Wolf', 250, 100, 0);
const native = new Sidekick('Running-Coyote', 'Apache', 100, 100, 0)
const law = new Sidekick('Sheriff Belfort', 'Lawman', 1, 0, 0)
const gem = new Sidekick('Sapphire', 'Gem', 0, 0, 0)

//CLICKING AND EVENTLISTENERS

  
btnElement.addEventListener("click", () => {
    // if (drpDownElement.value !== "Choose Your role")
    myTitle.textContent = `${userName.value}'s ${userPosse.value} Gang`;
    userName.remove();
    if (userPosse.value === "Hunter") {
        var theUser = hunter;
        console.log(theUser);
    }
    if (userPosse.value === "Outlaw") {
        var theUser = outlaw;
        console.log(theUser);
    }
    if (userPosse.value === "Moonshiner") {
        var theUser = moonshiner;
        console.log(theUser);
    }
    
    userPosse.innerHTML = stations.station1.userTextInput;
    infoElement.remove();
    gamePlayText.innerHTML = (stations.station1.textContent)
    locName.textContent = (stations.station1.name);
    btn1 = document.createElement('button')
    btn1.textContent = "Continue"
    btnElement.replaceWith(btn1)
        
        btn1.addEventListener("click", () => {
            gamePlayText.innerHTML = (stations.station2.textContent)
            locName.textContent = (stations.station2.name);
            if (userPosse.value == "1") {
                theUser.actHunt();                
            }
            if (userPosse.value == "4") {
                theUser.actParty();
            }
            if (userPosse.value == "2") {
                theUser.actSteal();
            }
            if (userPosse.value == "3") {
                theUser.actTrade();
            } console.log(theUser);
            btn2 = document.createElement('button')
            btn2.textContent = "Continue"
        btn1.replaceWith(btn2);
            
            btn2.addEventListener("click", () => {
                gamePlayText.innerHTML = (stations.station3.textContent)
                locName.textContent = (stations.station3.name);
                if (userPosse.value == "1") {
                    theUser.actHunt();
                    wolfie.actHunt();
                }
                if (userPosse.value == "4") {
                    theUser.actParty();
                }
                if (userPosse.value == "2") {
                    theUser.actSteal();
                }
                if (userPosse.value == "3") {
                    theUser.actTrade();
                }
                btn3 = document.createElement('button')
                btn3.textContent = "Continue"
            btn2.replaceWith(btn3);

                btn3.addEventListener("click", () => {
                    gamePlayText.innerHTML = (stations.station4.textContent)
                    locName.textContent = (stations.station4.name);
                    if (userPosse.value == "1") {
                        theUser.actHunt();
                        wolfie.extraHunt();
                    }
                    if (userPosse.value == "4") {
                        theUser.actParty();
                        native.payote();
                    }
                    if (userPosse.value == "2") {
                        theUser.actSteal();
                    }
                    if (userPosse.value == "3") {
                        theUser.actTrade();
                    }
                    btn4 = document.createElement('button')
                    btn4.textContent = "Continue"
                btn3.replaceWith(btn4);

                    btn4.addEventListener("click", () => {
                        gamePlayText.innerHTML = (stations.station5.textContent)
                        locName.textContent = (stations.station5.name);
                        if (userPosse.value == "1") {
                            theUser.actHunt();
                            wolfie.extraHunt();
                        }
                        if (userPosse.value == "4") {
                            theUser.actParty();
                        }
                        if (userPosse.value == "2") {
                            theUser.actSteal();
                            law.govern();
                        }
                        if (userPosse.value == "3") {
                            theUser.actTrade();
                        }
                        btn5 = document.createElement('button')
                        btn5.textContent = "Continue"
                    btn4.replaceWith(btn5);

                        btn5.addEventListener("click", () => {
                            if (userPosse.value == "1") {
                                theUser.actHunt();
                                wolfie.extraHunt();
                            }
                            if (userPosse.value == "4") {
                                theUser.actParty();
                            }
                            if (userPosse.value == "2") {
                                theUser.actSteal();
                                law.govern();
                            }
                            if (userPosse.value == "3") {
                                theUser.actTrade();
                                gem.getGem();
                            }
                            gamePlayText.innerHTML = (stations.station6.textContent)
                            locName.textContent = (stations.station6.name);
                            btn5.remove();
                            userPosse.remove()
                            endPic.style.display = "flex"
                            let sum = (theUser.health + theUser.spirit + theUser.money + 
                            wolfie.health + wolfie.spirit + 
                            native.health + native.spirit + 
                            gem.money) * law.health


                            ;
                            interactives.innerHTML = `<h3>Your score: ${sum}</h3>`

                        //     btn6 = document.createElement('button')
                        //     btn6.textContent = "Restart"
                        // btn5.replaceWith(btn6);
                        })
                    })
                })
            })
    })
    
})




// infoElement.addEventListener("click", () => {
//     p1.textContent = `Moonshiner:
//     A life of shine!  You’ve lived a full life of hard work already, yet eager for a journey.  Bootleggin’ ain’t what it used to be, at least not around these parts.  So you welcome the idea of finding settlement elsewhere.  Your hard life has made you and yours better suited than most for the travel, and there ain’t a group from here to Hutzaplutz that can top your hoedown!  The road awaits you like a freshly cracked bottle o’ nectar!`
//     p2.textContent = `Hunter:
//     Are you the hunter or hunted?  Killing sheep can be easy, so long as the sheep don’t fight back!  You’ve built your wealth from your expertise with animals.  But the livestock farm you helped raise is evolving with the next generation, and they’re not too fond of how well you wield a set of shears and a gun.  Legend has it that an old bear came out of hibernation and trashed a caravan selling a mysterious medical substance.  He’s been terrorizing small towns with no suitable hunters able to track him.  You’re tired of all the lame sheep jokes you get so you set out to show your mettle against this worthy foe.  You stutter in fear as you read the nickname the bear has been dubbed - C-C-Cain Bear!  
//     `
//     p3.textContent = `Outlaw:
//     You’re young, dumb and full of… GUN!  Guns plural, to be sure, and much ammo in those guns.  The going is tough but you and your gang are tougher.  The road ahead excites you, and your success is only limited by how wild you dare to be.  Stealing is your trade, but you can handle anything!  Anything but the law, who’s rumored to be tracking down outlaws such as yourself.  If only you knew of their whereabouts…
//     `
//     infoElement.value = "Go Back"
//     infoElement.addEventListener("click", () => {
        
//     })
// })

// btn_element.addEventListener("click", () => {
//     document.getElementById("text2")
//         .innerHTML = "Task 2 is performed";
// });