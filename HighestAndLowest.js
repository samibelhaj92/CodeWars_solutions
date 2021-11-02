function highAndLow(numbers){
    var split = numbers.split(' ');
    return "" + Math.max(...split) + " " + Math.min(...split);
  }