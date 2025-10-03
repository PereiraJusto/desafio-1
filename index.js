let nome = "Rafael";
let xp = 10001;

switch (xp) {
    case <=1000:
        xp = "Ferro";
        break;
    case =>1001 && <=2000:
        xp = "Bronze";
        break;
    case =>2001 && <=5000:
        xp = "Prata"; 
        break;
    case =>5001 && <=7000:
        xp = "Ouro";
        break;
    case =>7001 && <=8000:
        xp = "Platina";
        break;
    case =>8001 && <=9000:
        xp = "Ascendente";
        break;
    case =>9001 && <=10000:
        xp = "Imortal";
        break;
    default:
        xp = "Radiante";
        break;
}
console.log("O Herói de nome " + nome + " está no nível de " + xp + ".")
