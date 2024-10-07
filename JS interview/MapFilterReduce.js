//MAP-FILTER-REDUCE
  //map,filter,reduce are powerful array method.these are used iterate over an array and perform transformation or computation.

  //MAP
    //The map method is used to create a new array from the existing one,by applying function to each one of the element in the first array.

    const nums = [1,2,3,4,5];

    const multiply = nums.map((num,index,arr)=>{
      return num * 3;
    })
    console.log(multiply);

  //FILTER
    //The filter method create a new array from the existing array elements.we cannot modify the array element.

    //The filter method take each element in an array and it applies a conditional statement against it.If the condition returns true the element gets pushed into new output array.If the condition returns false the element does not pushed into output array.

    const number= [1,2,3,4,5,6];

    const evenNumbers = number.filter((num,i,array)=>{
      return num%2 === 0;
    })
    console.log(`Even number array:${evenNumbers}`);

  //REDUCE METHOD
    // The reduce() method in JavaScript is used to execute a reducer function on each element of the array, resulting in a single output value.

    //array.reduce(callback(accumulator, currentValue, index, array), initialValue);

    // 1:callback: A function that is executed on each element of the array, taking four arguments:
    // 2:accumulator: The accumulated value previously returned in the last invocation of the callback, or the initialValue, if supplied.
    // 3:currentValue: The current element being processed in the array.
    // 4:index (optional): The index of the current element being processed in the array.
    // array (optional): The array reduce was called upon.
    // 5:initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used, and the iteration will start from the second element.

    const num=[1,2,3,4,5];

    const sum=num.reduce((acc,curr,index,arr)=>{
      console.log(`Accumulator: ${acc}, Current Value: ${curr}`)
      return acc+curr;
    },0)
    console.log(sum);

    // Detailed Breakdown

    //1. Initial Call:  
    // accumulator: 0 (the initialValue)
    // currentValue: 1 (the first element of the array)
    // return: 0 + 1 = 1 (new accumulator)

    // 2.Second Call:
    // accumulator: 1 (result from the previous call)
    // currentValue: 2 (second element of the array)
    // return: 1 + 2 = 3 (new accumulator)

    // 3.Third Call:   
    // accumulator: 3 (result from the previous call)
    // currentValue: 3 (third element of the array)
    // return: 3 + 3 = 6 (new accumulator)

    // Fourth Call:   
    // accumulator: 6 (result from the previous call)
    // currentValue: 4 (fourth element of the array)
    // return: 6 + 4 = 10 (new accumulator)

    // Fifth Call:    
    // accumulator: 10 (result from the previous call)
    // currentValue: 5 (fifth element of the array)
    // return: 10 + 5 = 15 (final result)


//What is the difference between MAP AND FOREACH

    //MAP VS FOREACH
    // map() and forEach() are both array methods in JavaScript that allow you to iterate over array elements, but they serve different purposes and have different characteristics.

    //*Map return a new array with modified elements.
    //*forEach will modify the original array.If we try to create a new array using forEach.The output will be undefined.

    // When to Use
    //  * Use map() when you want to transform an array into a new array of equal length with modified elements.
    //  * Use forEach() when you want to perform side effects on each element of an array and do not need a new array as a result.

    const array=[1,2,3,4,5,6];

   const mapResult= array.map((arr)=>{
      return arr+2;
    })
    console.log(mapResult);

    array.forEach((arr,i)=>{
      array[i] = arr + 2; //it will modify the original array.
      return arr+2; //it will be undefined.
    })
    console.log(array);

let students=[
  {name:'john',age:55,rollNo:1},
  {name:'stark',age:63,rollNo:2},
  {name:'steve',age:29,rollNo:4},
  {name:'nike',age:52,rollNo:5},
]

  //Q:1 - return only name of the student in capital letter
    let names=[];
    for(i=0;i<students.length;i++){
      names.push(students[i].name.toUpperCase())
    }
    console.log(`using normal for loop${names}`);

    //Using map
      const namess= students.map((students)=>{
        return students.name.toUpperCase()
      })
      console.log(`using map:${namess}`);

  //Q:2 - return only student details those who age more than 50
    let details=[];
    for(i=0;i<students.length;i++){
      if(students[i].age > 50){
        details.push(students[i])
      }
    }
    console.log(details);
    // console.log(`using normal for loop:${JSON.stringify(details)}`);

    //--using filter
    const stdDetails=students.filter((std)=>{
      return std.age > 50 && std.rollNo>3;
    })
    console.log(stdDetails);

  //Q:3 - sum of age of the all students
    let Sum=0;
    for(i=0;i<students.length;i++){
      Sum=Sum+students[i].age;
    }
    console.log(`using normal for loop:${Sum}`);

   //--using reduce
    const studentAgeSum=students.reduce((acc,current)=>{
      return acc+current.age;
    },0);
    console.log(`using reduce method to calculate the sum of the age:${studentAgeSum}`);

  //Q:4 - return only names of the students age more than 30
    const stdNames=students.filter((std)=>std.age > 30).map((std)=>std.name);
    console.log(stdNames);
    //This is called chaining:we can chain other function in front of other function.

  //Q:5 - Return total age for the student with age grater than 60 after 20 age have been added to to those who age less than 60;

    const totalAge = students.map((std)=>{
      if(std.age < 60){
        std.age +=20;
      }
      return std
    }).filter((std)=>{return std.age > 60}).reduce((acc,stdData)=>{
      return acc + stdData.age;
    },0)
    console.log(totalAge);
    //This chaining,but forEach not allow chaining.


  