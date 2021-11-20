class World {
    ctx;
    canvas;
    keyboard;
    coinsCounter = 0;
    //coins = [new Coins(), new Coins()];
    //bottles = [new Bottle(), new Bottle()];
    character = new Character();
    camera_x = 0;
    level = level1;
    statusBarBottels = new StatusBarBottels();
    statusBarCoins = new StatusBarCoins();
    statusBarLives = new StatusBarLives();
    bottleCounter = [];
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

        this.addToMap(this.statusBarBottels);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarLives);

        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
    
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


    addToMap(drawableObject){
        //console.log( typeof movableObject);
        //console.log(movableObject.otherDirection);
        if(drawableObject.otherDirection){
            this.flipImage(drawableObject);

        }
        if (!((drawableObject instanceof Bottle || drawableObject instanceof Coin) && drawableObject.wasTouched)) {
            drawableObject.draw(this.ctx);
            //drawableObject.drawFrame(this.ctx);
            
        }
        

        
         if(drawableObject.otherDirection){
            this.flipImageBack(drawableObject);
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
            this.checkCollisionsWithEnemies();  
            this.checkCollisionsWithCoins();
            this.checkCollisionsWithBottles();
            this.checkThrowableObjects();

        }, 200);
    }

    checkCollisionsWithEnemies(){

        this.level.enemies.forEach((enemy) =>{
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.statusBarLives.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionsWithCoins(){
        this.level.coins.forEach((coins) =>{
           if(this.character.isColliding(coins) && !coins.wasTouched){  
            coins.wasTouched = true;
            this.coinsCounter += 20;
            this.statusBarCoins.setPercentage(this.coinsCounter);
           }
        })
    }


    checkCollisionsWithBottles(){
        this.level.bottles.forEach((bottles) =>{
            if(this.character.isColliding(bottles) && !bottles.wasTouched){
                bottles.wasTouched = true;
                for (let i = 0; i < 20; i++) {
                    let variable = true;
                    this.bottleCounter.push(variable);
                    
                }
                this.statusBarBottels.setPercentage(this.bottleCounter.length);
                
             }
        })
    }

    checkThrowableObjects(){
        if(this.keyboard.SPACE && this.bottleCounter.length > 0){
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottleCounter = this.bottleCounter.slice(5, this.bottleCounter.length);
            this.statusBarBottels.setPercentage(this.bottleCounter.length);
            console.log(this.bottleCounter);
        }
    }


}