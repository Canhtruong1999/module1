function sentence3(arr) {
    let vowel = ['a', 'o', 'e', 'u', 'i'];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (vowel.indexOf(arr[i]) != -1) {
            count += 1;
        }
    }
    if (count == 0) {
        return false;
    } else {
        return count;
    }
}
let b = ['a', 'd', 'v', 'e'];
console.log(sentence3(b));