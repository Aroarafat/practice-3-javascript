function getfactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const myfactorial = getfactorial(6);
console.log(myfactorial);