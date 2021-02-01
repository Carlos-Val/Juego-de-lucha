let selectPersonaje = (fighter) => {
    if(arrayTeamA.length < 3){
        //Introducimos luchador en el array A
        arrayTeamA.push(fighter);
        document.getElementById(fighter).className = "elegido";
        document.getElementById(fighter).onclick = "";

        if(arrayTeamA.length == 3){
            //Eliminamos a los personajes ya escogidos.
            for(let i = 0; i < arrayTeamA.length; i++){
                document.getElementById(arrayTeamA[i]).style = "visibility : hidden";
            };
        };


    }else if(arrayTeamB.length < 3){
        //Introducimos luchador en el array B
        arrayTeamB.push(fighter);
        document.getElementById(fighter).className = "elegido";
        document.getElementById(fighter).onclick = "";
    };

    console.log("El EQUIPO A: ", arrayTeamA);
    console.log("EL EQUIPO B: ", arrayTeamB);
};

let arrayTeamA = [];

let arrayTeamB = [];