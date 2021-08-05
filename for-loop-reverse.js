function getfactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
const myfactorial = getfactorial2(6);
console.log(myfactorial);