class World {
    ctx;
    canvas;
    keyboard;
    //coins = [new Coins(), new Coins()];
    //bottles = [new Bottle(), new Bottle()];
    character = new Character();
    camera_x = 0;
    level = level1;
    statusBarBottels = new StatusBarBottels();
    statusBarCoins = new StatusBarCoins();
    statusBarLives = new StatusBarLives();
    throwableObjects = [];
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }

    setWorld(){
        this.character.world = this;

    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addToMap(this.statusBarBottels);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarLives);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        //this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width);
        this.ctx.translate(-this.camera_x, 0);
        

        //draw wird immer wieder aufgerufen..
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });

    }

    addObjectsToMap(objects){
        objects.forEach(o =>{
            this.addToMap(o);
        })
    }


    addToMap(mo){
        //console.log( typeof movableObject);
        //console.log(movableObject.otherDirection);
        if(mo.otherDirection){
            this.flipImage(mo);

        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        
         if(mo.otherDirection){
            this.flipImageBack(mo);
        }
        
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }



    run(){
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowableObjects();

        }, 200 );
    }

    checkCollisions(){

        this.level.enemies.forEach((enemy) =>{
            if(this.character.isColliding(enemy)){
                console.log('Collision with Charakter', this.character.energy);
                this.character.hit();
                this.statusBarLives.setPercentage(this.character.energy);
            }
        });

    }

    checkThrowableObjects(){
        if(this.keyboard.SPACE){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }


}