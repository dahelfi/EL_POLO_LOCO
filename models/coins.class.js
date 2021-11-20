class Coin extends CollectableObject{

    wasTouched;

    constructor(){
        super().loadImage('img/8.Coin/Moneda1.png');
        this.x = 200 + Math.random() * 1500;
        this.y = 270;
        this.width = 150;
        this.height = 150;
        this.wasTouched = false;

    }



}