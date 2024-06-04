function solteiro(){
var numIdade = document.getElementById('numIdade').value;
var maiorIdade, menorIdade;
maiorIdade = ((numIdade - 7) * 2) + 1;
menorIdade = (numIdade/2) + 7;

    if(menorIdade%2 != 0){
        numIdade = Math.floor(numIdade);
    }if(numIdade <= 12 || numIdade > 100){
        document.getElementById('resultado1').innerHTML = "Não pode namorar";
    }else{
        document.getElementById('resultado1').innerHTML = `Pode namorar alguem com ${numIdade} anos até ${maiorIdade} anos.`;
    }
}

function monogamico(){
    var numIdade1 = document.getElementById('numIdade1').value;
    var numIdade2 = document.getElementById('numIdade1').value;

    var idadeMin, idadeMax;
    idadeMax = Math.max(numIdade1, numIdade2);
    idadeMin = Math.min(numIdade1, numIdade2);

    var maiorIdade1, menorIdade1;
    maiorIdade1 = ((idadeMax - 7) * 2) + 1;
    menorIdade1 = (idadeMin/2) + 7;

    var maiorIdade2, menorIdade2;
    maiorIdade2 = ((idadeMax - 7) * 2) + 1;
    menorIdade2 = (idadeMin/2) + 7;
    
    // arredondamento
    if(menorIdade1%2 != 0){
        menorIdade1 = Math.floor(menorIdade1);
    }if(menorIdade2%2 != 0){
        menorIdade2 = Math.floor(menorIdade2);
    }if(maiorIdade1%2 != 0){
        maiorIdade1 = Math.round(maiorIdade1);
    }if(maiorIdade2%2 != 0){
        maiorIdade2 = Math.round(maiorIdade2);
    }
    if(menorIdade1 <= 12 || menorIdade2 > 100){
        document.getElementById('resultado2').innerHTML = "Não podem namorar";
    }if(maiorIdade1 <= 12 || maiorIdade2 > 100){
        document.getElementById('resultado2').innerHTML = "Não podem namorar";
    }else if(idadeMin >= menorIdade2){
        document.getElementById('resultado2').innerHTML = 'Podem namorar';
    }else{
        document.getElementById('resultado2').innerHTML = `Não podem namorar`;
    }
}

function trisal(){
    var numIdade3 = document.getElementById('numIdade3').value;
    var numIdade4 = document.getElementById('numIdade4').value;
    var numIdade5 = document.getElementById('numIdade5').value;
    var vetorIdades = [3];
    vetorIdades[0] = numIdade3;
    vetorIdades[1] = numIdade4;
    vetorIdades[2] = numIdade5;

    var max1, max2, max3, min1, min2, min3;
    min1 = (vetorIdades[0]/2) + 7;
    min2 = (vetorIdades[1]/2) + 7;
    min3 = (vetorIdades[2]/2) + 7;
    max1 = (vetorIdades[0] - 7) * 2;
    max2 = (vetorIdades[1] - 7) * 2;
    max3 = (vetorIdades[2] - 7) * 2;

    if(min1 %2 !=0){
        min1 = Math.floor(min1);
    }if(min2 %2 !=0){
        min2 = Math.floor(min2);
    }if(min3 %2 !=0){
        min3 = Math.floor(min3);
    }if(max1 %2 !=0){
        max1 = Math.round(max1);
    }if(min2 %2 !=0){
        max2 = Math.round(max2);
    }if(min3 %2 !=0){
        max3 = Math.round(min3);
    }
    if(max1 > 100 || max2 > 100 || max3 > 100){
        document.getElementById('resultado3').innerHTML = "Não pode namorar";
    }if(min1 < 13 || min2 < 13 || min3 < 13){
        document.getElementById('resultado3').innerHTML = "Não pode namorar";
    }else if(vetorIdades[0] >= min2 && vetorIdades[1] >= min3 && vetorIdades[2] >= min1){
        document.getElementById('resultado3').innerHTML = 'Podem namorar';
    }else{
        document.getElementById('resultado3').innerHTML = "Não pode namorar";
    }
}