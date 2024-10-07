
//Hoisting
function hoist(){
  console.log(a);

  var a=10;
}
hoist()

//after hoisting
function hoist(){
  var a;
  console.log(a);

   a=10;
}
hoist()


//Undefined
   //its because of the hoisting here the compilation time the variable declaration is moved top of their scope.using var the 

   //after hoisting the variable declaration is moved top not the initialization, and then it will run there is variable is declared the value is logged thats why its undefined
   //using let and const it will show us reference error it because of temporal dead zone.


   //Explicit binding
    //using call
    var name='john'
    var obj={
      name:'prasanth',
      secondName:this.name,
      display:function(age){
        console.log(this.name,age); //stark
        console.log(this.secondName);
      }
    }

    

    let newObj={name:'stark'};

    // obj.display(24)
    obj.display.call(newObj,34)
    //The call will provide a new context or obj for the function.

    //If we use arrow function the 'this' will always point the global object(or called as window obj)

    //The global obj or window obj always put var.


  //Infinite curring
    // console.log(add(5)(10)(5)(10)());

    function add(a){
      return function(b){
        if(b){
          return add(a+b)
        }
        return a
      }
    }

    console.log(add(10)(10)(10)());

    //What is the output
      //const result=calc.add(10).multiply(2).sub(2); this is called Method Chaining,Method chaining allows you to call multiple methods on an object in a single statement,

      const calc={
        total:0,
        add:function(n){
          this.total=this.total+n
          return this
        },
        multiply:function(n){
           this.total=this.total*n;
           return this
        },
        sub:function(n){
           this.total=this.total-n;
           return this
        }
      }

      const result=calc.add(10).multiply(2).sub(2)
      console.log(result.total);






    