const player = (name, level) => {
let health = level * 2;
const getLevel = () => level;
const getName = () => name;
const die = () =>{
    //mostrar algo
};
const damege = X => {
    health -= X;
    if (health <= 0){
        die();
    }
};

const attack = enemy => {
    if (level < enemy.getLevel()){
        damege(1);
        console.log(`${enemy.getName()} has dameged ${name}`);
    }
    if (level >= enemy.getLevel()){
        enemy.damege(1);
        console.log(`${name} has dameged ${enemy.getName()}`);
    }
};
return {attack,damege,getLevel,getName};

}

const Katherine = player('Katherine',10);
const enemigo = player('Bill Gater',5);
Katherine.attack(enemigo);