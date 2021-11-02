function descendingOrder(n){
    var stringNumber = n.toString();
    var arr = stringNumber.split('');
    var result = arr.sort(function(a, b){return b - a});
    var stringresult = result.join();
  
    stringresult= stringresult.replace(/,/g,"");
  
    return parseInt(stringresult)
  
  }