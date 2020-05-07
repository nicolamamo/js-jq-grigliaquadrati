function assegna numero{
    $( ".quadrato" ).append( 'genera_random' )
}







function genera_random (min, max){
return Math.floor(Math.random() *(max-min+1)) + min;
}
