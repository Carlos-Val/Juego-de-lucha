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
        enemigo.vida -= (this.fuerza + this.suerte - this.defense - this.handicap);
    };

    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.suerte * 0.5 - this.defense - this.handicap);
    };

    megaAtaque(enemigo){
        enemigo.vida -= (this.fuerza + this.suerte * 5);
    };
};
//Instancias y variables globales

let jugador1 = new Guerrero("Bu", 200,47,40);
let jugador2 = new Guerrero("Freezer", 200,42,38);
let jugador3 = new Guerrero("Krilin", 200,25,28);
let jugador4 = new Guerrero("Piccolo", 200,35,35);
let jugador5 = new Guerrero("Satan", 200,10,12);
let jugador6 = new Guerrero("SonGoku_niño", 200,38,31);
let jugador7 = new Guerrero("Vegeta", 200,45,35);
let jugador8 = new Guerrero("SonGoku", 200,50,46);

let j1 = "";

let j2 = "";

//Funciones

let inicioGame = () => {

    let vidaInicial = 200;

    jugador1.vida = vidaInicial;
    jugador2.vida = vidaInicial;

    j1 = "";
    j2 = "";

    console.log(j1, j2);
    
};

let cambiaPantalla = (fase1,fase2) => {
    let pantalla1 = document.getElementById(fase1);

    let pantalla2 = document.getElementById(fase2);

    // Aquí se cambia de pantalla

    pantalla1.style.display = "none";
    pantalla2.style.display = "block";
};

let selectPersonaje = (personaje) => {
    if(j1 == ""){
        j1 = personaje;

        document.getElementById(personaje).className = "foto2";
        document.getElementById(personaje).onclick = "";
    
    }else{
        j2 = personaje;

        document.getElementById(personaje).className = "foto2";
        document.getElementById(personaje).onclick = "";

        let mensaje = document.getElementById("mensaje");

        //Mensaje de lo que han elegido

        mensaje.innerHTML = `Has elegido el primer guerrero que es ${j1} y al segundo que es ${j2}`;

        //Se cargan los personajes en la pantalla2

        let showJugador1 = document.getElementById("guerrero1");
        let showJugador2 = document.getElementById("guerrero2");

        showJugador1.innerHTML = `<div><img class="estiloGuerrero" src="img/${j1}.jpg></div>`;
        showJugador2.innerHTML = `<div><img class="estiloGuerrero" src="img/${j2}.jpg></div>`;

        console.log(showJugador1.innerHTML);

        //Cambiar de pantalla porque ya tenemos a los guerreros elegidos

        resolveIn(1000).then(delay => {
            cambiaPantalla("screen1","screen2");
        });

    };
};