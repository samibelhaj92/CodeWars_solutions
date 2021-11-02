var countBits = function(n) {
    var counter = 0;
    while(n > 0){
      var binaryNumber = 1;
      while(binaryNumber*2 <= n){
        binaryNumber = binaryNumber * 2;
      }
      n -= binaryNumber;
      counter++;
    }
    return counter;
  };