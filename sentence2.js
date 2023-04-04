

function sentence2(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (value == array[i]) {
            return i;}
       
        
    }
}
let array = [1, 2, 3];
let value=prompt('nhập số');
// if(sentence2(value,array)!=-1){
//     document.write(value +'số có nằm trong mảng')
// } else{
//     document.write(value+'số không nằm trong mảng')
// }

document.write(sentence2(value,array));
