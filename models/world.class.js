class World {
    ctx;
    gameOver;
    canvas;
    keyboard;
    coinsCounter = 0;
    bottlesCounter = 0;
    spaceWasPressed;
    getItem_Sound = new Audio('audio/getItemSound.mp3');
    //coins = [new Coins(), new Coins()];
    //bottles = [new Bottle(), new Bottle()];
    character = new Character();
    camera_x = 0;
    level = level1;
    statusBarBottels = new StatusBarBottels();
    statusBarCoins = new StatusBarCoins();
    statusBarLives = new StatusBarLives();
    throwableObjects = [];
    constructor(canvas, keyboard) {
        
        this.ctx = canvas.getContext('2d');
        canvas.requestFullscreen();
        //this.ctx.requestFullscreen();
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.gameOver = false;
        this.SpaceWasPressed = false;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;

    }




    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusBarBottels);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarLives);
        if (this.gameOver) {
            this.addToMap(this.level.screens[1]);
        }


        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        //this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width);
        this.ctx.translate(-this.camera_x, 0);


        //draw wird immer wieder aufgerufen..
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });



    }




    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);

        })
    }


    addToMap(drawableObject) {

        if (drawableObject.otherDirection) {
            this.flipImage(drawableObject);

        }

        drawableObject.draw(this.ctx);


        if (drawableObject.otherDirection) {
            this.flipImageBack(drawableObject);
        }

    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }



    run() {
        setInterval(() => {
            this.checkAllCollisions();
            this.checkIfGameistOver();

        }, 100);
    }




    checkAllCollisions() {
        this.checkCollisionsWithEnemies();
        this.checkCollisionsWithCoins();
        this.checkCollisionsWithBottles();
        this.checkThrowableObjects();
        this.checkIfEnemiesWereHidden();
    }

    checkIfEnemiesWereHidden() {
        this.level.enemies.forEach((enemy, index) => {
            this.throwableObjects.forEach((bottles) => {
                if (enemy.isColliding(bottles)) {
                    if (enemy instanceof Endboss && !bottles.alreadyHit) {
                        this.fightTheEndboss(index, enemy);
                    } else if (enemy instanceof Chicken) {
                        this.level.enemies.splice(index, 1);
                    }
                    bottles.alreadyHit = true;
                }
            });
        });
    }

    fightTheEndboss(index, enemy) {

        if (enemy.energy <= 0) {
            this.level.enemies.splice(index, 1);

        } else {
            enemy.hit();
        }
    }

    checkCollisionsWithEnemies() {

        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarLives.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionsWithCoins() {
        this.level.coins.forEach((coins, index) => {
            if (this.character.isColliding(coins)) {
                this.getItem_Sound.play();
                this.level.coins.splice(index, 1);
                this.coinsCounter += 20;
                this.statusBarCoins.setPercentage(this.coinsCounter);

            }
        });
    }


    checkCollisionsWithBottles() {
        this.level.bottles.forEach((bottles, index) => {
            if (this.character.isColliding(bottles)) {
                this.getItem_Sound.play();
                this.level.bottles.splice(index, 1);
                this.bottlesCounter += 20;
                this.statusBarBottels.setPercentage(this.bottlesCounter);
            }
        })
    }

    checkThrowableObjects() {
        if (this.keyboard.SPACE && this.bottlesCounter > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);

            this.bottlesCounter -= 5;
            this.statusBarBottels.setPercentage(this.bottlesCounter);
        }
    }

    checkIfGameistOver() {
        if (this.character.energy <= 0) {
            this.gameOver = true;
        }
    }


}