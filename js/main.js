
//Clases
class Guerrero {

    constructor(nombre,vida,fuerza,defensa){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte = Math.floor(Math.random() * 10);
        this.handicap = Math.floor(Math.random() * 5);
    };

    ataque(enemigo){
        enemigo.vida -= (this.fuerza  - this.defensa - this.handicap + this.suerte);
    };

    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.fuerza + this.suerte * 0.5 - this.defensa - this.handicap);
    };

    megaAtaque(enemigo){
        enemigo.vida -= (this.fuerza + this.suerte * 5);
    };
};
//Instancias y variables globales

let jugador1 = new Guerrero("Bu", 200,48,28);
let jugador2 = new Guerrero("Freezer", 200,43,26);
let jugador3 = new Guerrero("Krilin", 200,31,13);
let jugador4 = new Guerrero("Piccolo", 200,36,23);
let jugador5 = new Guerrero("Satan", 200,21,2);
let jugador6 = new Guerrero("Trunks", 200,39,18);
let jugador7 = new Guerrero("Vegeta", 200,46,23);
let jugador8 = new Guerrero("SonGoku", 200,50,30);

let j1 = "";

let j2 = "";

//traductor

let allplayers = {
    "Bu": jugador1,
    "Freezer": jugador2,
    "Krilin": jugador3,
    "Piccolo": jugador4,
    "Satan": jugador5,
    "Trunks": jugador6,
    "Vegeta": jugador7,
    "SonGoku": jugador8

}


//Funciones

let inicioGame = () => {

    let vidaInicial = 200;

    jugador1.vida = vidaInicial;
    jugador2.vida = vidaInicial;

    j1 = "";
    j2 = "";

    console.log(j1, j2);
    
};

let cambiaPantalla = (faseAhora,faseFutura) => {
    pantallaActual = document.getElementById(faseAhora);

    pantallaDestino = document.getElementById(faseFutura);

    // Aquí se cambia de pantalla

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "flex";
};
mensaje2.innerHTML = `¡¡ELIGE DOS GUERREROS PARA QUE LUCHEN HASTA LA MUERTE!!`;
let selectPersonaje = (personaje) => {

    

    if(j1 == ""){
        j1 = allplayers[personaje];

        document.getElementById(personaje).className = "foto2";
        document.getElementById(personaje).onclick = "";
    
    }else {
        j2 = allplayers[personaje];

        document.getElementById(personaje).className = "foto2";
        document.getElementById(personaje).onclick = "";

        
        //Se cargan los personajes en la pantalla2
        
           
            let showJugador1 = document.getElementById("guerrero1");
            let showJugador2 = document.getElementById("guerrero2");

            showJugador1.innerHTML = `<div><img class="guerrero1" src="img/${j1.nombre}.jpg"></div>`;
            showJugador2.innerHTML = `<div><img class="guerrero2" src="img/${j2.nombre}.jpg"></div>`;
            

            //Cambiar de pantalla porque ya tenemos a los guerreros elegidos

            resolveIn(100).then(delay => {
                cambiaPantalla("screen1","screen2");
            });
        

    };
};


let atacar = () => {
    //Funcion de ataque
    let live1 = document.getElementById("live1");
    let live2 = document.getElementById("live2");
    


    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);
    let megaHit = Math.floor(Math.random() * 20);
    
    if(turno == 0){
        if(megaHit == 18){
            console.log("SUPER COMBO");
            j1.megaAtaque(j2);
            
            
        }else if(especial == 4){
            console.log("KAME HAME");
            j1.ataqueEspecial(j2);
            
        }else{
            j1.ataque(j2);
            
        }
    }else{
        if(megaHit == 18){
            console.log("SUPER COMBO");
            j2.megaAtaque(j1);
            
        }else if(especial == 4){
            console.log("KAME HAME");
            j2.ataqueEspecial(j1);
            
        }else{
            j2.ataque(j1);
            
        }
    }
    live1.value = `${j1.vida}`;
    live2.value = `${j2.vida}`;
    console.log(j1.nombre + j1.vida);
    console.log(j2.nombre + j2.vida);

    let showWinner1 = document.getElementById("winner1");
    let showWinner2 = document.getElementById("winner2");
    let showWinnerName = document.getElementById("fraseWinner");
    
   

    if(j1.vida <= 0){
        
        resolveIn(10).then(delay => {
            cambiaPantalla("screen2","screen3");
        });
        showWinner2.innerHTML = `<div><img class="winner2" src="img/${j2.nombre}1.jpg"></div>`;
        showWinnerName.innerHTML = `${j2.nombre} WINS!!!`;
        
    }else if(j2.vida <= 0){
        
        resolveIn(10).then(delay => {
            cambiaPantalla("screen2","screen3");
        });
        showWinner1.innerHTML = `<div><img class="winner1" src="img/${j1.nombre}1.jpg"></div>`;
        showWinnerName.innerHTML = `${j1.nombre} WINS!!!`;
        
    };
    const reset = document.getElementById("resetButton");
    reset.addEventListener('click', () => {
        window.location.reload();
    });

};

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));