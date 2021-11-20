class StatusBar extends DrawableObject{
    
    IMAGES = [];
    percentage = 100;

    
    setPercentage(percentage){
        this.percentage = percentage;
       
     
            let path = this.IMAGES[this.resolveImageIndexForLives()];
            this.img = this.imageCache[path];
        
 

        
    }


    resolveImageIndexForLives(){
        if(this.percentage <= 100 && this.percentage > 80){
            return 5;
        }else if(this.percentage <= 80 && this.percentage > 60){
            return 4;
        }else if(this.percentage <= 60 && this.percentage > 40){
            return 3;
        }else if(this.percentage <= 40 && this.percentage > 20){
            return 2;
        }else if(this.percentage <= 20 && this.percentage > 0){
            return 1;
        }else{
            return 0;
        }

    }

}