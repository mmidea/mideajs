function print(start, end){
let buf = "";
let sum = 0;
for(start; start <= end; start++){

buf = buf + start + " ";
sum += start
}

console.log(buf);
console.log(`Sum: ${sum}`);


}
print(5, 10);