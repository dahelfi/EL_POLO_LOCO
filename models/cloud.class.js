class Cloud extends MovableObject{

    // 

    constructor(){
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;
        this.y = 70;
        this.width = 500;
        this.height = 150;
    }
}