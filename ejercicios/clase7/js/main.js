const nombres = ["Hugo", "Paco", "Luis"];
const numeros = [1,2,3,4,5,6,7,8,9,0,12,23,21,4,543,4,6];

function mayorQue(n){
    return (m) => m > n;
}

let mayorQueDoce = mayorQue(12);
console.log(mayorQueDoce(13));
console.log(mayorQueDoce(4));