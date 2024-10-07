
//Call,Bind and Apply
  //In JavaScript, call, apply, and bind are methods that allow you to set the 'this' value inside a function, making them very powerful for managing the context in which functions execute.

  //Q:1 - What is call
   //The 'call' method calls a function with a given 'this' value and arguments provided individually.
   //The obj we passed inside the 'call' function  it will convert the object into current obj.

   var person = { name: 'Alice' };

   function greet(greeting) {
    console.log(this.name);
    return console.log(greeting + ', ' + this.name);
    
    }
    greet.call(person,'Hello'); // Outputs: Hello, Alice!
    //call method will pass person obj as 'this' context to the greet function.
    //Now greet function current object is person,the call method convert the 'person' obj into current obj.

  //Q:2 - What is apply
   //Apply work exactly the same as call works the only difference is that it takes all of these arguments in form of an array
    var obj={name:'prasanth'};

   function callMethod(greeting,age,place){
    return console.log(greeting,this.name+' '+age+' '+place);
   };

   callMethod.apply(obj,['Hello',24,'calicut'])
   //In using apply method we need to pass all argument in the form of array.
   //callMethod.apply(obj,['Hello',24,'calicut'])
    //The apply method is first 'obj' is the object we want to sent sent as a parent object and the array is we passed as a argument.we cannot pass arguments in one by one.

  //Q:3 - What is bind
   //The bind method creates a new function.we can reuse the function.
   var obj2={name:'john wick'};

   function bindMethod(place,age) {
    return console.log('name :'+this.name,'age :'+age,'place: '+place);
   }

   const fun=bindMethod.bind(obj2); //provide a function with current obj .
   fun('new york',45); //passing the arguments into the function bind method provided.
   fun('USA',40);

   //This bind method:The bind method provide us function with current obj .

  //Q:4 - What is the outPut?
    const Person={name:'tony stark'};

    function check(age){
      console.log(this.name,age);
    }

    check.call(Person,55);
    const newbind=check.bind(Person); //the bink method provide us the check function with current obj.
    newbind(60);

  //Q:5 - what is the output
    const sampleName='John snow';

    const sampleName2={sampleName:'usain bolt'}

    let obj3={
      sampleName:'prasanth',
      age:24,
      sampleFun:function(){
        return this.sampleName;
      }
    }

    console.log(obj3.sampleFun()); // o/p:prasanth --here the parent obj is obj3 and 'this' will access the parent obj.
    console.log(obj3.sampleFun.call(sampleName2)); //o/p: usain bolt --The call method will pass 'sampleName2' obj as a current obj to the sampleFun.

  //Q:6- Append an array to another array.  
    //concat
      const arr1=['a','b','c','d'];
      const arr2=[1,2,3,4];

      const newArr=arr1.concat(arr2);
      console.log(newArr);
      console.log(arr1);
      //Using concat method it will create a new array instead of modifying the original array

    //If We don't want to create a new array we want to modify the main array.
      const arr3=['a','b','c','d'];
      const arr4=[1,2,3,4];

      for(i=0;i<arr4.length;i++){
        arr3.push(arr4[i]);
      }
      console.log(arr3);

      //Other Method
      const arr5=['a','b','c','d'];
      const arr6=[1,2,3,4];

      arr5.push.apply(arr5,arr6);
      console.log(arr5);

  //Q:7 - Find the min/max number of the array
    const numArr=[5,8,9,10,15];

    let max=-Infinity; //For max number '-infinity'
    let min=Infinity;
    for(i=0;i<numArr.length;i++){
      if(numArr[i]>max){
        max=numArr[i];
      }
      if(numArr[i]<min){
        min=numArr[i]
      }
    }
    console.log(`min value: ${min},max value: ${max}`);


  //Q:8- Polyfill for call method