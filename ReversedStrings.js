function solution(str){
    let reverseString = '';
    for (var i = str.length-1; i >= 0; i--) {
      reverseString += str[i];
    }
    return reverseString;
 }