const num1 = #
const num2 = #

let min = (num1 > num2) ? num1 : num2

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`LCM: ${min}`);
        break;
    }
    min++;
}
