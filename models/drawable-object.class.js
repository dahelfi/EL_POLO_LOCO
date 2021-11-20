class DrawableObject{

    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 200;
    


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

    draw(ctx) {

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken || this instanceof CollectableObject) {

            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

        }

    }

    isColliding(mo){
        return this.x + this.width > mo.x && 
        this.y + this.height > mo.y &&
        this.x < mo.x && 
        this.y < mo.y + mo.height;
    }

    

}