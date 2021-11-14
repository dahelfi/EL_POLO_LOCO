class World {
    ctx;
    canvas;
    keyboard;
    character = new Character();
    camera_x = 0;
    level = level1;
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();

    }

    setWorld(){
        this.character.world = this;

    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        
        
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
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
            console.log("gespiegelt wird ausgeführt");
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        
        if(mo.otherDirection){
            console.log("nicht gespiegelt wird ausgeführt");
            mo.x = mo.x * -1;
            this.ctx.restore();
            
        }
        
    }
}