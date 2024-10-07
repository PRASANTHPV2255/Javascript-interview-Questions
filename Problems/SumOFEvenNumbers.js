const arrList=[null,0,2,4,5,3,9,undefined,"nhoj","zyx",6,5,"","nhoj","zyx","cba"];


//Sum of even numbers
let len=arrList.length;
let sum=0;

for(i=0;i<len;i++){
  if(arrList[i]%2 === 0){
    sum=sum+arrList[i];
  }
}
console.log(`Sum of Even Numbers : ${sum}`);

//Reverse all string values
let StrArray=[];
let reverseArray=[];

for(i=0;i<len;i++){
  if(typeof(arrList[i]) === 'string'){
    StrArray.push(arrList[i])
  }
}
console.log(StrArray);
for(i=StrArray.length-1;i>=0;i--){
  reverseArray.push(StrArray[i])
  // console.log(StrArray[i]);
}
console.log(`Reversed array : ${reverseArray}`);


let arrayRev=[]

for(i=0;i<=StrArray.length-1;i++){

  let str=StrArray[i]
  let revStr='';
  for(j=str.length-1;j>=0;j--){
    revStr+=str[j];
  }
  if(arrayRev.includes(revStr)){
    continue;
  } else {

    arrayRev.push(revStr);
  }
}
console.log(arrayRev);
