class Endboss extends MovableObject{

    height = 400;
    width = 250;
    y = 60;
    hitPower = 25;
    energy = 100;


    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    constructor(){
        super().loadImage('img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 2200;
        this.live();


    }

    live(){
        this.animate();
        //this.moveRandom();

    }

    moveRandom(){
        this.speed = this.createRandomSpeed();
        if(this.createRandomDirection % 2 == 0){
            this.moveRight();
        }else{
            this.moveLeft();
        }

    }

    createRandomSpeed(){
        return 0.15 + Math.random() * 0.3;
    }

    createRandomDirection(){
        return Math.random() * 10;
    }

    animate(){

        setInterval(() =>{
            this.playAnimation(this.IMAGES_WALKING);
            
            }, 200);

    }



}