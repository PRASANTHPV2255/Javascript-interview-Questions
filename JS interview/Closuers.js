
//CLOSURE
  //closure in JavaScript is a feature a function can reference variables in this outer scope from it's inner scope

  //# Every closure has three scope
    //1:Global scope
    //2:local scope
    //3:Lexical scope

  //Q: - What is Lexical scope
    var name='John wick'; //This is a Global scope variable

    function local(){
      //This is local scope
    }

    //#Lexical scope refers to the fact that an inner function has access to the variables and functions defined in its outer (enclosing) function, but the variables and functions defined in the inner function are not accessible to the outer function or any sibling functions. This concept is known as lexical (or static) scoping.

      function outerFunction() { //This is global scope
        let outerVariable = 'I am outside!';
        
        function innerFunction() {
            let innerVariable = 'I am inside!';
            console.log(outerVariable); // Inner function can access outerVariable
            console.log(innerVariable); // Inner function can access innerVariable
        }
        
        innerFunction();
        console.log(outerVariable); // Outer function can access outerVariable
        //console.log(innerVariable); // Error: innerVariable is not defined
      }
      
      outerFunction();

  //Q:What is Closure scope chain
      var x=100;

      function outerScope(){
        let outerScopeVar = 'outer scope variable'

        function innerFunctionOne(){
          let innerFunctionOneVar = 'This is Inner function One'
          
          function innerFunctionTwo(){
            console.log(`Global Scope variable: ${x}`);
            console.log(`This is outerScope function variable : ${outerScopeVar}`);
            console.log(`This is innerScope function variable : ${innerFunctionOneVar}`);
          }

          return innerFunctionTwo();
        }

        return innerFunctionOne();
      }

      outerScope()

    //#This is closure chaining : The inner function can access global variable and their outer scope function variables.

  //Q: What will be the answer it logged in the console?
      let count = 0;
      function printCount(){
        if(count === 0){
          let count = 1; //Shadowing the count variable
          console.log(count);
        }
        console.log(count);
      }
      printCount();

  //Q: write a function that would  allow you to do this?
      function base(num){
        console.log(num);
        function innerScop(innerNum){
         return console.log(num * innerNum);
        }
        return innerScop
      }
      let addSix=base(3) //This argument is store in base function params
      addSix(20) //This argument is store in the innerScope function params
      addSix(40)

      //#If we assign a function call in to a variable used to access the closure.
      //#Here if we call "base(2)"the argument is store into base function parameter.If we store base function into a variable like this "let addSix=base(2)" then we call "addSix(10)" in this condition the argument is stored into the inner function parameter.

    //Q : Time optimization
      function find(){
        let a = [];
        for(i=0; i < 1000000;i++){
          a[i]=i*i;
        }
        return function (index){
          console.log(a[index]);
        }
      }
      const closure=find();
      console.time("6");
      closure(6)
      console.timeEnd("6");

      // function sample(params) {
      //   let arr=[];
      //   for(i=0;i<10;i++){
      //     arr[i]=i*i;
      //     // return console.log();
      //   }
      //   console.log(arr);
      // }
      // sample()

    //Q: how would you use a closure to create a private counter?
      function counter(){
        var _counter = 0;

        function add(num){
          _counter+=num;
          return _counter
        }

        function retrive(){
          console.log(`Counter : ${_counter}`);
        }
        return {add,retrive};
      }

      const c = counter()
      c.add(10);
      c.add(20);
      c.retrive()

  //Q: what is the difference between closure and scope
    //#CLOSURE:-Whenever create a function with another inner function,The inner function is the closure.here we can use outer function variable in later time.
    //#SCOPE:- In JavaScript, "scope" refers to the context within which variables and functions are accessible. It defines the region of the code where a variable or function can be referenced. JavaScript has two primary types of scope: global scope and local scope. Local scope can be further divided into function scope and block scope.
    //Types of Scope
      //1:Global Scope
      //2:Function Scope
      //3:Block Scope
      