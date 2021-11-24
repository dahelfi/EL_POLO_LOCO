class Level{
    screens;
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    level_end_x = 2200;

    constructor(screens, enemies, clouds, backgroundObjects, bottles, coins){
        this.screens = screens;
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }

}