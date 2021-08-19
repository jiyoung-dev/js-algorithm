// 입력이 한줄일때 
// 1. 정수 하나인경우 
let fs = require('fs');
let input = Number(fs.readFileSync('dev/stdin'));

// 2. 공백으로 구분된 경우 
let input = fs.readFileSync('dev/stdin').toString().split(' ');

/* ------------------------------------------------------------- */

// 입력이 여러줄일때 
// 1. 예제 데이터의 개수가 주어진 경우 
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
let cnt = input[0]
let lines = []

for(let i=1; i<=cnt; i++){
  lines.push(input[i].split(' '))
}

console.log(lines);