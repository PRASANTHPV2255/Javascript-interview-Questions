

// console.log(1+1);
// console.log('1'+'1');
// console.log('1'+1);
// console.log('1'-1);
// console.log('1'-'1');
// console.log(1+0);
// console.log(0+1);
// console.log(1-0);
// console.log(0-1);
// console.log(1*0);




//Recursion

function first(val){
  if(val > 10){
    console.log(val)
  }
  else{
    let num=val+10
    first(num)
  }
}

first(0)

//fibanocci

//1,1,2,3,5,8...

//let limit=parseInt(window.prompt('Enter the limit of fibonacci numbers'));
  
let a=1;
let b=1;
let c;

for(i=1;i<=10;i++){
  console.log(a);
  c=a+b;
  a=b;
  b=c;
}




