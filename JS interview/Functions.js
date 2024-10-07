
//FUNCTIONS IN JAVASCRIPT
  //Different type of functions
    //1. Named Functions
    //2. Anonymous Functions
    //3. Arrow FUNCTION
    //4. Immediately Invoked Function Expressions (IIFE)
    //5. Callback Functions

  //Q:1 - What is function declaration?
    //#A function declaration defines a named function using the function keyword. Function declarations are hoisted, meaning they are moved to the top of their containing scope during the compilation phase.
    //Ex:-
    function greet() {
      console.log("Hello!");
    }

  //Q:2 - what is function expression?
    //* function is stored in a variable is called function expression.
    const exp = function (num){
      return num * num;
    }
    console.log(exp(5));

  //#Function Initialization
    //Function initialization typically refers to the point at which a function is assigned to a variable.
      //Ex:-
        //Normal Function
        // const Wreet = function() {
        //   console.log("Hello!");
        // };

        //Arrow function
        const Greet = () => {
          console.log("Hello!");
        };
        //function expressions and arrow functions are not hoisted, so they cannot be called before their initialization.

    //Function Definition
      //Function definition encompasses the complete details of a function, including its declaration and the code inside its body. It specifies what the function does.
      function greet() {
        console.log("Hello!");
        let sum=2+2
        console.log(sum);
      }
   
    //* The function which has no name is called anonymous function.This anonymous function  we can assign into the variable or we can pass as a callback.

  //Q:3 - what is first class function?
    //*First-Class Function: A function that can be treated like any other variable. This means you can pass it as an argument, return it from another function, assign it to a variable, etc.
    //These are the examples of first class function.
      //Assigned to variables
      //Passed as arguments to other functions
      //Returned from other functions

    function square(num){
      return num * num;
    }

    function display(fun){
      console.log('square'+':'+fun);
    }
    display(square(25))

  //Q:4 - what is IIFE(immediately invoke function expression)
    // (function imm(){
    //   console.log('This is immediately invoke function expression');
    // }());

  //Q:5 - what is closure
    //The ability of a function to access variables and function that are lexically out of its scope  are called closures. 
    function outerFunction() {
        let outerVariable = 'I am an outer variable';
    
        function innerFunction() {
            console.log(outerVariable); // Accessing outer variable
        }
    
        return innerFunction;
    }
    
    const myClosure = outerFunction();
    myClosure(); // Output: "I am an outer variable"
    
    
  //Q:6 - Params vs arguments

    function arr(prams){  //Parameter
      console.log(prams);
    }
    arr('This is argument'); //argument
    //Argument:- while we calling a function we pass a value is called argument.
    //Parameter:- we receive those value called parameter.


  //Q:7 - Spread and Rest operation

    //SPREAD:- The spread operator is used to expand elements or properties of an object.It is useful for copying arrays or objects, combining arrays or objects, and passing an array as arguments to a function. 
      //1: Copying array
        let arr1 = [1, 2, 3];
        let arr2 = [...arr1,4,5]; // arr2 is a copy of arr1 and 4,5
        console.log(arr2); // Output: [1, 2, 3, 4, 5]

        let objj={name:'prasasnthjb',age:25}
        let NewObj={...objj,place:'calicut'}
        // console.log(NewObj);
        // console.log(objj);
        
        

      //2: Combining Arrays:
        let arr3 = [1,2,3];
        let arr4 = [4,5,6];
        let compainedArray = [...arr3,...arr4];
        console.log(`This is a arr3,arr4 combined array: ${compainedArray}`);

      //3: Passing an Array as Function Arguments:
        function sum(a,b,c){
          return a + b + c;
        }
        let numbers = [100,100,100];
        console.log(sum(...numbers));

    //REST OPERATION:- The rest operator is used to collect multiple elements into a single array or to collect the remaining elements after some have been destructured. It is typically used in function parameter lists and destructuring assignments.

      //Out put based question
        function fu(x,y,z,...rest){
          console.log(x,y,z); //first 3 values
          console.log('Rest:',rest);//remaining values
        }
        fu(1,2,3,4,5,6,7,8);

        const [first, second, ...rest] = [1, 2, 3, 4, 5];
        console.log(first); // Output: 1
        console.log(second); // Output: 2
        console.log(rest); // Output: [3, 4, 5]

        const person = {
          names: 'John',
          age: 30,
          city: 'New York',
          country: 'USA'
        };
        
        const { names, ...rests } = person;
        console.log(names); // Output: John
        console.log(rests); // Output: { age: 30, city: 'New York', country: 'USA' }

  //Q: 8 - WHAT IS CALLBACK FUNCTION
    //#A callback function is a function that is passed as an argument to another function and is executed after some event or the completion of some task. This allows for greater flexibility and modularity in your code, as you can define different behaviors to be executed at different points in the program.

      //#Characteristics of Callback Functions
        // 1:Higher-Order Functions: A function that accepts another function as an argument or returns a function is called a higher-order function. The function passed as an argument is the callback function.
        // 2:Asynchronous Operations: Callbacks are often used to handle asynchronous operations like fetching data from a server, reading a file, or waiting for user interaction.
        // 3:Custom Behavior: Callbacks allow you to customize the behavior of a function by providing different callback functions.

    //#Example of predefined functions:-settimeout,map,reduce,filter

      //Example 1:-
        function outer(name){
          return console.log('hay this is '+name);
        }

        function secondFunction(callback) {
          const name = 'john wick';
          callback(name);
        }
        secondFunction(outer);

      //Example 2:-
        function multiplication(sum){
          return console.log(`This is multiplied sum: ${sum * sum}`);
        }

        function sumFunction(num,callback){
          let sum=num+num;
          callback(sum)
        }

        sumFunction(10,multiplication)

  //Q:What is arrow functions
      //#Arrow functions are introduced ES6 version of javascript.it is kind of similar to normal function but some way this work differently

      const add =(num)=>{
        console.log(num + num);
      }
      add(1000);

  //Q:What is The differences between arrow function and normal function.
    //1:Syntax
    //2:Implicit "return" keyword
        const arrow = (num) => console.log(num * num);
        arrow(8)
        //In this code there is no need of return.

    //3:Arguments object
      //we can use argument keyword in normal function but we can use argument in arrow function.
        function ArrCheck() {
          console.log(arguments); //This will not allow in arrow fun
        }
        ArrCheck('This is a argument')

    //4: "This" keyword
      //NORMAL FUNCTION
      // In normal functions, the value of this depends on how the function is called. If called as a method of an object, this refers to the object. If called in the global scope, this refers to the global object(or window obj)
        const obj = {
            value: 10,
            normalFunction: function() {
                console.log(this.value);
            }
          };
        obj.normalFunction(); // Output: 10

      //ARROW FUNCTION
        //Arrow functions do not have their own this. Instead, they inherit this from the enclosing lexical context at the time they are defined. This makes them particularly useful for callbacks and methods where you want to retain the context.
        var value=100;
        const obj2 = {
            value: 10,
            arrowFunction: () => {
                console.log(this.value);
            }
          };
          obj2.arrowFunction(); // Output: undefined 

    //5:Hoisting
      //#Normal Function:-Function declarations are hoisted to the top of their scope, meaning they can be called before they are defined in the code.
        console.log(normalFunction()); // Output: Hello
        function normalFunction() {
            return 'Hello';
        }
      //#Arrow Function:-Arrow function expressions are not hoisted. They behave like variables declared with 'let' or 'const'.

      console.log(arrowFunction()); // Throws ReferenceError: Cannot access 'arrowFunction' before initialization
      const arrowFunction = () => 'Hello';

    //5:Constructor: 
      //Normal functions can be used as constructors; arrow functions cannot.

    //6:Method Definitions: Normal functions are better suited for object methods where this is needed.

    //What is nested Function:A nested function in JavaScript is an function that contains another function as one of its properties. 

    ////What is nested object:A nested object in JavaScript is an object that contains another object as one of its properties. 