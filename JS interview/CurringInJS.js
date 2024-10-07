
//Curring in Javascript
  //Example f(a,b) in f(a)(b)

  //Example 1:
    function add(a, b, c) {
      return a + b + c;
    }
    console.log(add(10,10,10)); 

    // Curried version of the add function
    function curriedAdd(a) {
      return function(b) {
          return function(c) {
              return a + b + c;
          };
      };
    }

    // console.log(curriedAdd(10)(10)(10)); //also do like this
    const add5And10 = curriedAdd(5)(10);
    console.log(add5And10(15)); // Outputs 30


  //Example 2 :
    function multiply(a, b) {
      return a * b;
    }

    // Curried version of multiply
    function curriedMultiply(a) {
      return function(b) {
          return a * b;
      };
    }

    const double = curriedMultiply(2); // Partially applied function
    console.log(double(5)); // Outputs 10
    // console.log(double(10)); // Outputs 20

    const triple = curriedMultiply(3); // Another partially applied function
    console.log(triple(5)); // Outputs 15
    // console.log(triple(10)); // Outputs 30


  //Q:1 -  What is Currying?
  // Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

  //Q:2 - why should we use carrying?
    //*Avoiding Repetition:- To avoid passing the same variable again and again.
    //* It makes a function pure which makes it expose to less errors and side effects.
    //*Improved Readability and Maintainability
    //*Function Reusability

  //Q:3 - sum(5)(4)(1)
    function sum(num1){
      return function(num2){
        return function(num3){
          return num1 + num2 + num3
          }
      }
    }
    console.log(sum(5)(3)(2)); 
    //#Advantage:Advantage of curring is we can pass arguments one by one.If we pass only one parameter it will show us the next parameter function we need to pass. In normal function argument "sum(10,20,30)" we need to pass in the same time.


  /*Q:4 - solve
    evaluate("sum")(4)(2)=>6
    evaluate("multiply")(4)(2)=>8
    evaluate("divide")(4)(2)=>2
    evaluate("subtract")(4)(2)=>2
    */

    function evaluate(operation) {
      return function(a){
        return function(b){
          if(operation === "sum"){
            return a + b;
          } else if(operation === "multiply"){
            return a * b;
          } else if(operation === "divide"){
            return a / b;
          }  else if(operation === "subtract"){
            return a - b;
          } else {
            return "invalid operation";
          }
        }
      }
    }
    // console.log(evaluate("multiply")(20)(20));
    const mul = evaluate("multiply")
    console.log(mul(10)(10)); //100
    console.log(mul(5)(10)); //50

    const SUM= evaluate("sum")
    console.log(SUM(500)(500)); //1000
    console.log(SUM(25)(25)); //50
    //# This is one of the use cases of currying, here "const mul = evaluate("multiply")" we pass multiply as a argument there for the mul variable always perform multiply.so we can reuse this in number of times

  //Q:5 - Infinite currying
   //add(1)(2)(3)(4).....(n);

   function add(a) {
    return function (b){
      if(b){
        return add(a+b);
      }
      return a;
    }
   }
   console.log(add(1)(2)(3)(4)(5)());
   //#In this question first '1' will pass and store into the 'a' parameter then it will return a function in that function our second argument '2' will store into b parameter then it will check the 'b' parameter have a value or not if the condition is true the condition will return the sum of add(a+b),here the add function parameter 'a' will be the sum of a+b.Then the next argument will pass the next argument will store 'b' parameter then check the 'b' have value or not if 'b' have value it will return add(a+b),then the a parameter will store the sum of a+b,Then last there is no value in b it will return a.now 'a' store the total.
