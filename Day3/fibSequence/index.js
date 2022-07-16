
function perfectSquare(num){
    return (num > 0 && (Math.sqrt(num)%1 == 0)) ? true : false;
}

let n = 2;
console.log(perfectSquare(n));
