//Рекурсия

/*function calcSumm(numOme, numTwo){
    if(numTwo === 1){
        return numOme;
    }else{
        return numOme * calcSumm(numOme,numTwo - 1);
    }
}
console.log(calcSumm(2,3))*/

//Планирование setTimeout and setInterval

function showNumber(num){
    console.log(num);
    if(num < 5){
        setTimeout(showNumber, 1000, ++num);
    }
}
setTimeout(showNumber, 1000, 1);