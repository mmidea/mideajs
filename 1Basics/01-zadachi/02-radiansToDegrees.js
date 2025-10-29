// Напишете програма, която чете ъгъл в радиани (десетично число) и го преобразува в градуси. Използвайте формулата: 
// градус = радиан * 180 / π. Числото π в Java програми е достъпно чрез Math.PI.

function radiansToDegrees(input){
    let radian = Number(input);
let gradus = radian * 180 / Math.PI;
console.log(gradus);

}
radiansToDegrees(["6.2832"]);