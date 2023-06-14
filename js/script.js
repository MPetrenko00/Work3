//Рекурсия

function calcSumm(numOme, numTwo){
    if(numTwo === 1){
        return numOme;
    }else{
        return numOme * calcSumm(numOme,numTwo - 1);
    }
}
console.log(calcSumm(2,3))