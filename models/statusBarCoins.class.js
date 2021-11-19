class StatusBarCoins extends StatusBar{

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
    ];

    percentage = 0;


    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 40;
        this.y = 30;
        this.width = 180;
        this.height = 40;
    }
    
}