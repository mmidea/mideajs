function solve(path){
    let index = path.lastIndexOf(".") + 1;
    //console.log(index);
    let extantion = path.substring(index);
    //console.log(extantion);
    let index2 = path.lastIndexOf("\\") +1;

    let fileName = path.substring(index2, index-1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extantion}`);
    
    
    
    
}
solve('C:\\Internal\\training-internal\\Template.pptx');