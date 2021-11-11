let canvas;
let world;



function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    


    //character.src = '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png';
    //ctx.drawImage(character, 20, 20, 50, 150);
    console.log("Mein Charakter ist", world.character);
   
    


}