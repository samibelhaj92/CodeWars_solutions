function digital_root(n) {
    var sumOfNums = 0;
    var arrOfNums = n.toString().split("").map(function(str) { 
      return parseInt(str); 
    });
    while (arrOfNums.length > 1) {
      sumOfNums = arrOfNums.reduce(function(a, b) { 
        return a + b;
      });
      arrOfNums = sumOfNums.toString().split("").map(function(str) { 
      return parseInt(str);
      });
    }
    return sumOfNums;
  }