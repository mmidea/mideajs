function validation(obj){

    let methodsArr = [ "GET", "POST", "DELETE" , "CONNECT"];
    let versionsArr = [ "HTTP/0.9", "HTTP/1.0", "HTTP/1.1" , "HTTP/2.0" ];
    let MSGpattern = /[\<\>\\\&\'\"]/gm;
    let uriPattern = /[^a-zA-Z0-9.]/gm;

   
    if(obj.hasOwnProperty("method")){
        
        if(!methodsArr.includes(obj.method)){
           //console.log("throw error Invalid method"); 
           throw new Error(`Invalid request header: Invalid Method`);
        }

        
    }else{
        throw new Error(`Invalid request header: Invalid Method`);
        
    }




    if(obj.hasOwnProperty("uri")){
       let text = obj.uri;
       //if(!(obj.uri == "*")){}
       if(uriPattern.test(text)||(obj.uri == "")  ) {
        if(!(obj.uri == "*")){throw new Error(`Invalid request header: Invalid URI`);}
       }
    
    }else{
        throw new Error(`Invalid request header: Invalid URI`);
        
    }

    if(obj.hasOwnProperty("version")){
        //console.log("y");
        if(!versionsArr.includes(obj.version)){
           throw new Error(`Invalid request header: Invalid Version`); 
        }

        
    }else{
        throw new Error(`Invalid request header: Invalid Version`); 
        
    }
    
  
    if(obj.hasOwnProperty("message")){
        let text = obj.message;
       if(MSGpattern.test(text) ) {
        throw new Error(`Invalid request header: Invalid Message`); 
       }else{
        //console.log("minava message");
       }

    }else{
        throw new Error(`Invalid request header: Invalid Message`); 
        
    }

    return obj;
    
};

try {
    validation({

method: 'GrET',

uri: 'fgsdgds',

version: 'HTTP/1.1',

message: 'dfsdfsd'

})
    
} catch (error) {
   console.log(error);
    
}

