var Mirror = require('./index');

var firstCharacter =['Damilola', 'joy', 'Boye', 'Grace'];//\'Adigun Oluwadamilola\' //''

let display = function(value){
    console.log(value)
};
if( firstCharacter.length == 0 ){
    Mirror.isEmpty(function(ERROR_MESSAGE){
    display(ERROR_MESSAGE)
});
}
else if (typeof firstCharacter == 'string' ){
Mirror.isString(firstCharacter, function(firstCharacter, fn){
    let wordArray =firstCharacter.split('');
    let reverseWordArray = wordArray.reverse();
    let result =reverseWordArray.join('');
    display(result);
});
}
else if (Object.prototype.toString.call(firstCharacter) === '[object Array]'){
Mirror.isArray(firstCharacter, function(){
    let wordReverse = firstCharacter.reverse();
    display(wordReverse)  
});
}
else{
    Mirror.undefined(function(ERROR_MESSAGE){
    display(ERROR_MESSAGE);
    });
}


           
    

