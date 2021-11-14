class MovableObject {
    x = 120;
    y = 250;
    height = 150;
    width = 200;
    imageCache = {};
    img;
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {

            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }


    moveRight() {
        console.log('Moving Right');

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;

        }, 1000 / 60);
    }

    playAnimation(images){

        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }
}