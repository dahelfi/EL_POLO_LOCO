class Character extends MovableObject{

    y = 170;
    width = 280;
    height = 230;

    constructor(){
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
    }
  
    jump(){
        console.log("Jumping");
        
    }

}