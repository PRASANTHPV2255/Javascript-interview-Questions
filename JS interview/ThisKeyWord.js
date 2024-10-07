
//This KeyWord

  //Explain 'this' keyword
    //The 'this' keyword in JavaScript is a reference to the object that is currently executing the code. The value of 'this' depends on how a function is called, and it can change dynamically. Understanding how 'this' works is essential for working with object-oriented JavaScript.
    //Use Cases of this Keyword
      //1:Global Context
      //2"Object Method
      //3:Constructor Functions
      //4:Explicit Binding
      //5:Arrow Functions

  //Global Context
    a=5; //this is global variable
    console.log(this.a); //this will targeting the window object 
    console.log(this); //this will show us what is 'this' targeting now 
    //In the global execution context (outside of any function), this refers to the global object. In a browser, the global object is 'window'.

    b=10;
    function check() {
      console.log(this.b); //output:10  here this will targeting the global variable that mean 'this' is targeting the window object.it because the parent is window object
      console.log(this); //this will show us what is 'this' is targeting
    }
    check()
    //#'this' is inside function why 'this' targeting the window onj?
      //It because in this condition the parent is window object thats why 'this' is targeting window obj.

  //Object Method
    //What is 'this' keyword is inside a object
     //Normal function
      //When using var, the variable is added as a property to the global object. Therefore, this.a will correctly refer.
      //When using let or const, the variable is not added as a property to the global object. Therefore, this.a will be undefined.

      
      var name = 'john' 
      let user = {
        name:'prasanth',
        secondName:this.name,
        age:24,
        details:function(){
          console.log(this.name);
          console.log(this.secondName);
          console.log(this); //this log will show us what is 'this' targeting
        }
      }
      user.details() //output prasanth

    //When a function is called inside object and the function uses 'this' keyword the 'this' will target the user object it because the user object is the parent object not the window object.

    //Arrow function 
      //This keyword is using inside arrow function is completely different
      var name2='arjun'
      let user2 = {
        name2:'prasanth',
        age:24,
        details:()=>{
          console.log(this.name2); //arjun
          console.log(this); //this log will show us what is 'this' targeting
        }
      }
      user2.details() //output is arjun

      //Arrow functions do not have their own 'this' context. Instead, 'this' inside an arrow function 'this' will target the windows obj.

      //#If we want to use a arrow function and target the 'this' into parent obj.we ant to write the arrow function inside the normal function.
      const person1 = {
        name: 'Alice',
        greet: function() {
            const inner = () => {
                console.log(this.name);
            };
            inner();
        }
      };
    
      person1.greet(); // Outputs: Alice
      //In this example, 'this' inside the arrow function 'inner' refers to the 'this' value from 'greet', which is the 'person' object.


    //#If the function is nested the normal function 'this' will target the immediate parent
      //ex:-
        let person2 = {
          name:'John wick',
          age:24,
          details:{
            newName:'boogy Man',
            detailsFun:function(){
              console.log(this.newName,"and",person2.age); //boogy Man and undefined
              console.log(this);
            },
          }
        }
        person2.details.detailsFun()
      

        //this keyword is target their current parent obj.here detail is the parent obj for this. this is why we cannot access name outside the obj.


  //#this keyword perform inside class or a constructor
    //In JavaScript, the 'this' keyword plays a crucial role inside classes and constructors. It refers to the instance of the class that is being created or manipulated.

    //Using 'this' in Classes
      class users {
        constructor(name,age){
          this.name=name;
          this.age=age;
        }
        getDetails(){ //'this' inside of a function is point to everything inside of constructor
          console.log(`this is using class, name:${this.name},age:${this.age}`);
        }
      }
      const newUser= new users('Tonny',45) //it will creating a new obj from the above class Users.
      newUser.getDetails()

      //Using 'new',it will create a new empty object reference with global obj(here global obj is Users)


  //Q1: - what is the output
    const obj={
      name:'Tony stark',
      getName:function(){
        const name='prasanth';
        return console.log(this.name); //Tony stark
      }
    }
    obj.getName()
    //The 'this' keyword will target the parent object here the parent object is 'obj'.

    var n=25
    function names() {
      console.log(this.n);
    }
    names()

  //Q:2 - What is the output?
    const Obj={
      character:'mouse',
      normal:function(){ //here using normal function 'this' will target their parent obj. 
        return console.log(this.character); //mouse 
      },
      arrow:()=>{  //here arrow function not have their own 'this'.In arrow function this will target the window obj.here window obj ot have character variable this is why we get undefined.
        return console.log(this.character); //undefined  
      }
    }
    Obj.normal();
    Obj.arrow()


    //Q:3 - What is the output
      var calc={
        total:0,
        add(a){
          this.total+=a; // this.total = 0 + 5 = 5
          return this; // returns the calc object itself
        },
        multiply(a){
          this.total*=a; // this.total = 5 * 10 = 50
          return this; // returns the calc object itself
        },
        subtract(a){
          this.total-=a;  // this.total = 50 - 10 = 40
          return this; // returns the calc object itself
        }
      }
      console.log(calc.add(5).multiply(10).subtract(10)); //is an example of method chaining.Method chaining is a technique in which multiple methods are called on the same object in a single statement. This is made possible because each method returns the object itself (this), allowing the next method to be called on the same object.
     // Summary
      //*Method Chaining: Each method (add, multiply, subtract) modifies the total and returns the calc object, allowing for chaining.
      //*Operations: The methods are called in sequence, updating the total property step-by-step.


