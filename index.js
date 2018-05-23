var Mirror = {}
const ERROR ={
    NullValue: 'You cannot mirror an empty list',
    undefined: 'Your character is undefined'
};
Mirror.isEmpty= function(fn){
           return fn(ERROR.NullValue)
  }
Mirror.undefined= function(fn){
           return fn(ERROR.undefined)
  } 
Mirror.isString= function (character, fn){
       return fn(character, fn)
}
Mirror.isArray = function(character, fn){
    return fn(character, fn)
}
    
module.exports= Mirror;