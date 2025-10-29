function rectangularCreate(width, height, color){
    let colorUpper = color[0].toUpperCase() + color.slice(1);
    //console.log(colorUpper);
    
    
let result = {
width,
height,
color: colorUpper,
calcArea(){return width * height}
}
return result;

}
let rect =  rectangularCreate(4, 5, 'red');


console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());