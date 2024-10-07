//var vs let vs const

  //Scope:-scope is certain region of program where define variable where exist.There is different type of blocks
  //eg:-global scope,block scope,function scope

  //Function Scope variable: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

  //Block Scope variable: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop.

  //Global scope variables:-Global variables are the variables we declare outside the function.we can access this variable in very scope or function.

  var b=10;
  function VAR(){
      var a=5;
      var a=20;
      var b=25;
  console.log(a);
  console.log(b);
  }
  console.log('global variable var'+':'+b);
  VAR();

  //Var:-var is a functional variable.we can redeclare the same variable name using var.

  //let and const:-let and const are introduce in ES6.let and const are cannot redeclare in the same scope.

  //let:-let is a block scope variables. we can only access inside the block scope and we cannot redeclare the variable.but we can reassign the variable with new value.

    let A=10;
    function LET(){
      let A=20;
      A=50;
      console.log(A);
    }
    console.log('global variable let'+':'+A);
    LET();

  //Const:-const are block scope.in const keyword we used to declare a variable we cannot redeclare the variable nor reassign a new value into the variable.

  const B=100;

  function CONST(){
    const B=50;
    // B=10;
    console.log(B);
  }
  console.log('global variable const'+':'+B);
  
  CONST();

  //Variable declaration and variable initializations

  //Variable Declaration:-A variable declaration is when you specify a type and an identifier but have not yet assigned a value to the variable.
    let k;
    console.log('k'+' '+k); //it will show undefined
    //in this condition variable is declared but not initialized
    var c;
    let d;
    // const e;
    c=10;
    d=20;
    console.log(`c:${c},d:${d}`);
    //we cannot declare variable using const without a value it will give us a error.
    // variable initializations:- A variable initializations is when you assign a value to a variable

  //HOISTING - variables
    // Hoisting is behavior in which variable and functions declares are moved to the top of their containing scope during the compilation phase.This means that you can use variables and functions before you declare them in your code.
    // it's important to note that only the declarations are hoisted, not the initializations.

    console.log(myVar); // undefined
    var myVar;
    myVar = 5;
    console.log(myVar); // 5

    myFunction(); // "Hello, world!"
    function myFunction() {
        console.log("Hello, world!");
    }
    //In the code above, the entire function declaration is hoisted to the top, so you can call 'myFunction' before it's defined in the code.

    //Let and Const

    // Variables declared with let and const are also hoisted, but they are not initialized. This means that accessing them before the declaration results in a ReferenceError. This behavior is called the "temporal dead zone."

    
    // console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
    let myLetVar = 5;
    
    console.log(myLetVar); // 5
    
    //Summary
    //* Variable Declarations: Hoisted but not initialized (var).
    //* Function Declarations: Entirely hoisted.
    //* let and const: Hoisted but in the temporal dead zone until  declared.


  //Q: What is Declaration,Initialization and Defining
    // * Declaration: Introducing a variable name in a scope.
    // * Initialization: Assigning an initial value to a variable.
    // *Defining: Declaring and initializing a variable in one step.

    
 
