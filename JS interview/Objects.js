
//What is Javascript objects
  //#In JavaScript, objects are a fundamental data type used to store collections of related data and functionality.
  //# An object can be thought of as a collection of key-value pairs

    const person = {  //This is called obj
      name: 'Alice',
      age: 30,
      greet: function() {
          console.log('Hello, my name is ' + person.name);
      }
    };

    console.log(person.name); // Outputs: Alice
    person.name='wonder Land'; //The name inside the obj is updated
    console.log(person.name); //// Outputs: wonder Land
    delete person.age; //The age property is deleted,The 'delete' operator in JavaScript is specifically used to remove properties from objects. It can only be used on objects
    console.log(person); //There is no age in this obj
    person.greet(); // Outputs: Hello, my name is Alice


  //Q:1 - How to add dynamic property into a object
    
    const property = "firstName";
    const name = "prasanth";

    const user = {
      [property] : name,  //we need to wrap the property name
    }
    console.log(user);
    console.log(user.firstName);


  //Q:2 - How to iterate through a object
    const data = {
      name:"prasanth",
      age:24,
      place:'calicut'
    }

    for(key in data){
      console.log(`${key} : ${data[key]}`);
      // console.log(data[key]);
    }

  //Q:3 - What is the output
    const obj = {
      a:"one",
      b:"two",
      a:"three"
    };
    console.log(obj); //Output {a: 'three', b: 'two'}
    //If the object have two key with the same name it will replace.  This because a key is repeated so it will take the latest updated value.

  //Q:4 - create a function multiplyByTwo(obj) that multiplies all the numeric property values of nums by 2;

    let nums= {
      a:100,
      b:50,
      title:"my num"
    }

    multiplyByTwo(nums)

    function multiplyByTwo(obj) {
      for(key in obj){
        if(typeof obj[key] === "number"){
          // console.log(`${key}= ${obj[key] * 2}`);
          obj[key] = obj[key] * 2;
        }
      }
    }
    console.log(nums);

  //Q:5 - What is JSON.strigify and JSON.parse?
    //#JSON.strigify will change the object into string
    //#JSON.parse will change the sting into object
    //#What is the use :-The common use case of this storing data into our local storage.
    const obj2 = {
      name:'prasanth',
      age:24
    }
    const strObj=JSON.stringify(obj2) //obj -> string
    console.log(strObj);
    console.log(strObj.name); //We cant access the name because its now string
    const BackToObj=JSON.parse(strObj); //string -> obj
    console.log(BackToObj);

  //LOCAL STORAGE
    //This is not a proper way to store obj into local storage
      localStorage.setItem('test',obj2) //If store the obj directly into the local storage it will show us [object Object].It because we didn't convert the obj into string."The local storage is only store string".

    //This is the right way to store obj into local storage
      localStorage.setItem('test',JSON.stringify(obj2)); //here we convert the obj into string and stored.

    //This is not right way to get the data from the local storage
      const storedData = localStorage.getItem('test')//Get the data from the local storage
      console.log(storedData); //The output will be string it because we store the obj into string form.we need to convert the string back to object
      
    //This is the right way to get the data from the local storage
      const strData=JSON.parse(localStorage.getItem('test')); //The we convert the string into object
      console.log(strData);
      
        
  //Q:6 - what is the output
    console.log([...'TIGER']); //output:['T', 'I', 'G', 'E', 'R']
    //USing spread operator in string the string will spread all over the array


  //Q:7 - what is the output
    const User = {name:'prasanth',age:24};
    const admin = {...User,place:'calicut'}
    console.log(admin); //{name: 'prasanth', age: 24, place: 'calicut'}

  //Q:8 - What is the output?
    const A={
      level:20,
      margin:50,
      name:'john'
    };
    
    const str=JSON.stringify(A,["margin","level"]);//It will only convert the property we give inside the array and it will ignore the other data.here 'name' will ignored.
    console.log(str); //output: {"margin":50,"level":20}


  //Q:9 - What is DESTRUCTURING in object
    //Destructuring is a way of extracting multiple values from arrays or properties from objects into distinct variables. This syntax makes it easier to work with complex data structures by breaking them down into simpler parts.

    //Object destructuring
      let destructuring = {
        names:'prasanth',
        age:24,
        place:'calicut'
      };

      const {names,age,place}=destructuring; //This destructure a obj
      console.log(names,age,place);
      //How rename the names 
      const {names:myname}=destructuring;
      console.log(myname);

    //Array destructuring
      const numbers = [1, 2, 3];
      const [first, second, third] = numbers;
      
      console.log(first); // Output: 1
      console.log(second); // Output: 2
      console.log(third); // Output: 3

    //Q:10 - How destructure the nested obj
    //What is nested object:A nested object in JavaScript is an object that contains another object as one of its properties. 
    let nestedObj= {
      fullName:{firstName:'prasanth',lastName:'Pv'},
      age:24,
      place:'calicut'
    };

    const {fullName:{firstName,lastName}} = nestedObj //This the way destructure the nest obj
    console.log(firstName,lastName);

  //Q:11 - what is object reference
    //assigning the same object to more than one property(variable or passed to a function).reference means copy of a object.but the reference of a obj represent same memory space there for we modify the reference of the obj it will modify the main obj too.
    //Ex:-
    const objj={name:'prasanth',age:24};

    const objj2=obj

    obj2.name='keerthana'
    console.log(objj2);
    console.log(objj);

    //To solve this we need to copy the object using Shallow Copy(spread operation) or Deep copy

    //In JavaScript, object referencing refers to the way that objects are handled and manipulated in memory. When you assign or pass an object to a variable or a function, you are working with a reference to that object, not a copy of the object itself. This means that changes made to the object through one reference will affect the object as seen through all references.
    
    //1. Reference Assignment
      //When you assign an object to a variable, the variable holds a reference to the object’s location in memory.

      const obj4 = { name: 'Alice' };
      const obj5 = obj4;

      obj5.name = 'Bob';

      console.log(obj4.name); // Outputs: Bob
      console.log(obj5.name); // Outputs: Bob

    //2. Mutability
      //Objects in JavaScript are mutable, meaning their properties can be changed after the object is created. When you modify an object through one reference, all references to that object reflect the changes.

      const personAge = { age: 25 };

      function updateAge(obj) {
          obj.age = 30;
      }

      updateAge(personAge);

      console.log(personAge.age); // Outputs: 30

    //3. Comparison
      //When comparing objects, JavaScript compares references, not the objects' content. Two variables are considered equal if they reference the same object.

      const obj6 = { name: 'Alice' };
      const obj7 = obj6;
      const obj8 = { name: 'Alice' };

      console.log(obj6 === obj7); // Outputs: true
      console.log(obj6 === obj8); // Outputs: false
      //In this example, obj6 and obj7 reference the same object and same memory space, so they are equal. However, obj8 is a different object and stored in different memory space so it is not considered equal to obj6.

    //4.Cloning Objects
      //To avoid issues with object references, you may need to create a copy of an object. There are several ways to do this:
        //Shallow Copy and Deep copy(using local storage)

        //Shallow Copy
          //A shallow copy creates a new object with the same properties, but nested objects are still referenced.
          
          const Obj1 = { name: 'Alice', address: { city: 'Wonderland' } };
          const Obj2 = { ...Obj1 };

          Obj2.name = 'Bob';
          // obj2.address.city = 'Elsewhere';

          console.log(Obj1.name); // Outputs: Alice
          console.log(Obj1.address.city); // Outputs: Elsewhere

        //Deep Copy
          let objex={
            name:'prasanth',
            age:24
          }

          const objClone=Object.assign({},objex); 
          objClone.name='Don' //It will not effect on the  main obj
          console.log(objex,objClone);

          //Another method for deep copying
            const objectClone=JSON.parse(JSON.stringify(objex))
            objectClone.name='JOHN WICK'
            console.log(objex,objectClone);


  //Q:12 - What is the outPut
    const value={number : 10};
    const x= {...value} //cloned the value obj
    function multiply(prams){
      return prams.number*=2
    }
    console.log(multiply(x)); //20
    console.log(multiply(x));//40
    console.log(value); //10 //No changes are add to the main obj
    console.log(multiply(value));//20
    console.log(x); //40
