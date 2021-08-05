function isleapyear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myyear = 3000;
const ismyyearleapyear = isleapyear(myyear);
console.log("is my year leap year", ismyyearleapyear);
const youryear = 25463;
const isyouryearleapyear = isleapyear(youryear);
console.log("is your year leap year", isyouryearleapyear);

