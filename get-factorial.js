function getfactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const myfactorial = getfactorial(6);
console.log(myfactorial);