class MovableObject {
    x = 120;
    y = 250;
    height= 150;
    width = 200;

    img;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }


    moveRight(){
        console.log('Moving Right');

    }

    moveLeft(){
        console.log('Moving Left');
    }
}