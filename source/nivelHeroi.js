//Desafio 1 do Bootcamp da DIO
//Classificador de nível de Herói
let heroi = [["Célio Jr", 23001], ["Ghost", 5040], ["Grego", 7500]]
const info1 = "O herói de nome "
const info2 = " está no nível de "

for (let i = 0; i < heroi.length; i++) {
    if (heroi[i][1] <= 1000) {
        console.log(info1 + heroi[i][0] + info2 + "Ferro")
    } else if((heroi[i][1] >= 1001) && (heroi[i][1] <= 2000)) {
        console.log(info1 + heroi[i][0] + info2 + "Bronze")
    } else if((heroi[i][1] >= 2001) && (heroi[i][1] <= 5000)) {
        console.log(info1 + heroi[i][0] + info2 + "Prata")
    } else if((heroi[i][1] >= 5001) && (heroi[i][1] <= 7000)) {
        console.log(info1 + heroi[i][0] + info2 + "Ouro")
    } else if((heroi[i][1] >= 7001) && (heroi[i][1] <= 8000)) {
        console.log(info1 + heroi[i][0] + info2 + "Platina")
    } else if((heroi[i][1] >= 8001) && (heroi[i][1] <= 9000)) {
        console.log(info1 + heroi[i][0] + info2 + "Ascedente")
    } else if((heroi[i][1] >= 9001) && (heroi[i][1] <= 10000)) {
        console.log(info1 + heroi[i][0] + info2 + "Imortal")
    } else if(heroi[i][1] >= 10001) {
        console.log(info1 + heroi[i][0] + info2 + "Radiante")
    }
}