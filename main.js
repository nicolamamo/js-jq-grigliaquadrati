
for (var i = 0; i < 25; i++) {
    $('#griglia').append('<div class="quadrato"></div>');
}

function assegna_numero(){
    $( ".quadrato" ).each(function(){
        var numero = genera_random(1,10)
        console.log(numero);
        $(this).append(numero);
    });

}
assegna_numero();






function genera_random (min, max){
return Math.floor(Math.random() *(max-min+1)) + min;
}
