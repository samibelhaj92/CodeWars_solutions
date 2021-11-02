var getCount = function(sntnc){
    var vCount = 0,
     i = 0;
   while ( i < sntnc.length) {
   if(sntnc[i]== "a" || sntnc[i] == "e" || sntnc[i]=="i" ||  sntnc[i]== "o" || sntnc[i]=="u"){
     vCount++;
   }
   i++;
   }
 return vCount;
}