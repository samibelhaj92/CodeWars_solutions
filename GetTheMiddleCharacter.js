function getMiddle(s)
{
  switch (s.length%2){
  case 0 : return s.substring((s.length)/2-1 , (s.length)/2+1); 
      break ;
      default : return s.substring(Math.ceil(s.length/2)-1,Math.ceil(s.length/2));
      }
}