// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === '' || obj === undefined ||  typeof(obj) === 'number' ) {
  	return obj.toString()
  }else if (obj === null) {
  	return 'null'
  }else if (typeof(obj) === 'boolean') {
  	return "" + obj
  }else if(typeof(obj) === 'string' ){
  	return '"'+obj.toString()+'"'
  }
var string = '{';
var final = ''
var keys ='';
var values ='';
var indexes = '';
var arrayStr = '[';



  if(Array.isArray(obj) ){
    
      if(obj.length === 0){
        console.log(obj.length)
        return '[]'
      }else {
        for (var key in obj){
        if (typeof(obj[key]) === 'string') {
           indexes= '"'+obj[key].toString()+'"'
           console.log(indexes)
        }else if (typeof(obj[key]) === 'object'){
        indexes= stringifyJSON(obj[key])
        }else if (typeof(obj[key]) === "undefined"){
        indexes= null
        }else{
          indexes= obj[key].toString()
      }

      arrayStr=arrayStr+ indexes + ','
      }
      arrayStr = arrayStr.slice(0,arrayStr.length -1)
      return arrayStr + ']'
    }
    }else{
      if(Object.values(obj).length === 0){
        return '{}'
      }
	for (var key in obj){
		
	
	if (typeof(obj[key])==='string') {
		values='"'+obj[key].toString()+'"'
    keys='"'+key.toString()+'"'
    string=string+keys+':'+values + ','
	}else if (typeof(obj[key]) === 'object') {
      values = stringifyJSON(obj[key])
      keys='"'+key.toString()+'"'
      string=string+keys+':'+values + ','
  
}else if (typeof(obj[key]) === 'function' || typeof(obj[key]) === "undefined") {
      string = '{{'
  }else{
		values = obj[key]
    keys='"'+key.toString()+'"'
    string=string+keys+':'+values + ','
	}
	

}
 final = string.substring(0,string.length -1)

return final + '}'

}

};


