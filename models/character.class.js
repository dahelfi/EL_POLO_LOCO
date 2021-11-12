class Character extends MovableObject{

    y = 170;
    speed = 10;
    width = 280;
    height = 230;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    world;
    
    

    constructor(){
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate(){

        setInterval(() =>{

            if(this.world.keyboard.RIGHT){
                console.log("rechts gedrückt");
                this.x += this.speed;
                this.otherDirection = false;
                console.log(this.otherDirection);
            }

            if(this.world.keyboard.LEFT){
                console.log("links gedrückt");
                this.x -= this.speed;
                this.otherDirection = true;
                console.log(this.otherDirection);
            }


        },1000/60);


        setInterval(() =>{

            if(this.world.keyboard.RIGHT  || this.world.keyboard.LEFT){
                this.x += this.speed;

                //Walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;

            }
           
    
        
        }, 50);

    }



  
    jump(){
        console.log("Jumping");
        
    }

}