class Bottle extends CollectableObject{

    schonBerührt = false;

    constructor(){
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = 200 + Math.random() * 1500;
        this.y = 270;
        this.width = 120;
        this.height = 120;
    }
}