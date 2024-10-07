
const intArrList=[1,10,5,-17,-1,67,3,0,4,8,9];

let length=intArrList.length;
let temp;

for(i=0;i<length;i++){
  for(j=i+1;j<length;j++){
    if(intArrList[j]>intArrList[i]){
      temp=intArrList[i];
      intArrList[i]=intArrList[j];
      intArrList[j]=temp
    }
  }
  }
  console.log(`Array in Descending order : ${intArrList}`);