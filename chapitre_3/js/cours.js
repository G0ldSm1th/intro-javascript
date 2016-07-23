var meteo = prompt("Quel temps fait-il dehors ?");

switch (meteo) {
    case "soleil":
        console.log("sortez en t-shirt");
        break;
    case "vent":
        console.log("sortez en pull");
        break;
    case "pluie":
        console.log("sortez en blouson");
        break;
    case "neige":
        console.log("restez au chaud chez vous ");
        break;
    default:
        console.log("je n'ai pas compris !");
}