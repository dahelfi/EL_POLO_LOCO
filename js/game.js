let canvas;
let world;
let keyboard = new Keyboard();



function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    


    //character.src = '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png';
    //ctx.drawImage(character, 20, 20, 50, 150);
    console.log("Mein Charakter ist", world.character);
   
    


}


window.addEventListener("keydown", (e) =>{
    

    if(e.keyCode == 39){
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37){
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38){
        keyboard.UP = true;
    }   
    if(e.keyCoded == 40){
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32){
        keyboard.SPACE = true;
    }

    
});

window.addEventListener("keyup", (e) =>{

    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37){
        keyboard.LEFT = false;
    }
    if(e.keyCode == 38){
        keyboard.UP = false;
    }
    if(e.keyCode == 40){
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32){
        keyboard.SPACE = false;
    }
});