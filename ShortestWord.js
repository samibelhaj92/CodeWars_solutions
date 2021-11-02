function findShort(s){
    var arr = s.split(' ')
    console.log(arr)
    var shortest = arr[0].length
    for(var i=0; i<arr.length; i++){
      if(shortest > arr[i].length){
        shortest = arr[i].length
      }
    }
    return shortest
  }