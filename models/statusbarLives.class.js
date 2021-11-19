class StatusBarLives extends StatusBar{
    

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];
    percentage = 100;


    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 40;
        this.y = 60;
        this.width = 180;
        this.height = 40;
    }
}