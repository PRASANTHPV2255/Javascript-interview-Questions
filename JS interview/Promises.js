
//Synchronous and Asynchronous code
  //Synchronous operation
    //Synchronous code in JavaScript (and in general programming) refers to code that is executed sequentially, one step at a time. Each operation waits for the previous one to complete before moving on to the next. This means that tasks are performed one after the other, in the order they appear in the code, without any overlap in execution.
    //1. Sequential Execution: Each statement is executed one after the other.
    //2. Blocking: If a task takes a long time to complete, it blocks the execution of subsequent tasks until it finishes.
    //3. Predictable Order: The order of execution is predictable and matches the order of the code.

    //Ex:-
    console.log('start');
    for (let i = 0; i < 5; i++) {
      console.log(i);   
    }
    console.log('finished');
    //This code run one by one its only run when the line of code run after the previous line of code execute successfully.

  //Asynchronous operation
    //Asynchronous code allows for operations to run independently of the main program flow. This means that certain tasks can be executed without blocking the execution of other tasks, enabling a more efficient and responsive program.

    //*Code allows multiple tasks to run independently, using constructs like callbacks, promises, and async/await. This approach helps avoid blocking by allowing the program to continue running other tasks while waiting for asynchronous operations to complete.

    //Ex:-
    // console.log('async operation start');
    // setTimeout(()=>{
    //   console.log('hello');
    // },1000);
    // console.log('async operation end');

    //Here the setTimeOut is a asynchronous operation it will not block the code while the the code take a time to execute.

    //#Javascript execute synchronous code first and then execute asynchronous code.


  //Q:What is the output
    // console.log('start');

    // function impAction(name) {
    //   setTimeout(()=>{
    //     return `The name is ${name}`
    //   },1000);
    // }
    // const msg=impAction('prasanth');
    // console.log(msg);
    // console.log('End');

    //Here start will print and encounter the function and call the function,but the function is asynchronous operation the setTimeOut will not return value instantly there for the meg variable will print undefined and print the end msg.
    //To solve this problem we need to use callbacks

      // console.log('start');

      // function impActions(name,callbackFun) {
      //   setTimeout(()=>{
      //     return callbackFun(`The name is ${name}`);
      //   },1000);

      // }
      // impActions('prasanth',mssg);

      // function mssg(msg){
      //   console.log(msg);
      // }

      // console.log('End');

    //Q: What is callBack Functions
      //A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are a fundamental aspect of asynchronous programming in JavaScript, allowing the execution of code to continue while waiting for an operation (like a network request or timer) to complete.

      //Characteristics of Callback Functions
        //1.Passed as Arguments: A callback function is passed as an argument to another function.
        //2.Executed Later: It is invoked or executed after a certain event or operation has occurred.
        //3.Higher-Order Functions: The function that accepts a callback is known as a higher-order function.

        //EX:1-
        // function greet(name, callback) {
        //   console.log('Hello ' + name);
        //   callback();
        // }
        
        // function sayGoodbye() {
        //   console.log('Goodbye!');
        // }
        
        // greet('Alice', sayGoodbye);

        // //EX:2-
        // function sample(num1,num2,callback) {
        //   let sum=num1+num2;
        //   console.log('sample function');
        //   callback(sum)
        // }

        // function sampleFunction2(sum) {
        //   setTimeout(() => {
        //     console.log(sum);
        //   }, 1000);
        // }
        // sample(25,25,sampleFunction2)


  //Promises
    //Promises in JavaScript are objects that represent the upcoming completion or failure of an asynchronous operation and its resulting value.Promises provide a way to work with asynchronous code in a more synchronous fashion.
    //The promises help to avoid deeply nested callbacks, or "callback hell."
    //1.Pending: The initial state, neither fulfilled nor rejected.
    //2.Fulfilled: The operation completed successfully ,the resolve will be called.
    //3.Rejected: The operation failed.the reject will be called

    console.log('start');

    const myPromise=new Promise((resolve,reject)=>{
      // Asynchronous operation
       const success=false;
      if(success){
        resolve('Operation successful')
      } else {
        reject('operation failed')
      }

        // setTimeout(()=>{
        //   if(success){
        //     resolve('Operation successful')
        //   } else {
        //     reject('operation failed')
        //   }
        // },2000)

      });

    console.log(myPromise);
    myPromise.then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })

    //Then and catch help us to get the result or the error

    //then Method
      //The then method is used to handle a fulfilled promise. It takes two optional arguments: a callback for the fulfilled case, and a callback for the rejected case.

    //catch Method
      //The catch method is used to handle a rejected promise.

  //Chaining Promises
    //Promises can be chained to perform a sequence of asynchronous operations. Each then call returns a new promise, allowing for chaining.

      const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Data fetched');
        }, 1000);
      });
      
      // fetchData.then((result) => {
      //     console.log(result); // Outputs: 'Data fetched'
      //     return 'Processing data';
      //   })
      //   .then((message) => {
      //     console.log(message); // Outputs: 'Processing data'
      //     return 'data processing successful'
      //   }).then((msg)=>{
      //     console.log(msg);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });


  //#Promise.all,promise.allSettled,promise.any,promise.race
    //21 min
    //Promise.all:-it will check all the promise we set if any one of the promise is rejected every promise will reject
    //promise.allSettled:it exactly like Promise.all but will show the failed promise and fulfilled promises.
    //promise.any:it only return fulfilled promise and ignore the rejected promise.
    //promise.race:it exactly like Promise.all but return the first promise that get fulfilled or rejected.


  //Promises with async and await
    //The async and await syntax provides a more readable way to work with promises, making asynchronous code look more like synchronous code.

   // How async and await Work
    //1.async Keyword:
      //*When you prefix a function with async, it automatically returns a promise, even if it doesn't explicitly return one.
      //*If the function returns a value, the promise is resolved with that value.
      //*If the function throws an error, the promise is rejected with that error.

    //2.await Keyword:
      //*The await keyword can only be used inside an async function.
      //*It pauses the execution of the async function until the promise is settled (either resolved or rejected).
      //*It returns the resolved value of the promise.
      //*If the promise is rejected, await throws the rejected value.

    //USing async and await
      function fetchDatas() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('Data fetched');
          }, 2000);
        });
      }
      
      async function processData() {
        console.log('Fetching data...');
        const data = await fetchDatas(); // Waits for the promise to resolve
        console.log(data); // Outputs: 'Data fetched'
        console.log('successfully data fetched');
      }
      // processData();

      
    //Error Handling with async and await
      //You can use try...catch blocks to handle errors in async functions:

      function fetchDataWithError() {
        return new Promise((resolve, reject) => {
          let data=false;
          if(data){
            resolve('data get success')
          } else{
            reject('Error fetching data')
          }
        });
      } 
      
      async function processDataWithError() {
        try {
          console.log('Fetching data...');
          const data = await fetchDataWithError(); 
          console.log(data); // This line is not reached if the promise is rejected
        } catch (error) {
          console.error(error); // Outputs: 'Error fetching data'
        } finally {
          console.log('Operation completed');
        }
      }
      
      // processDataWithError();

  //API fetching using async and await
      async function fetchDataApi(url) {
        try {
          // Step 2: Use fetch to make the API call
          const response = await fetch(url);
      
          // Step 3: Use await to wait for the response
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          // Step 4: Process the response
          const data = await response.json();
          console.log(data); // Outputs the JSON data to the console
      
        } catch (error) {
          // Step 5: Handle errors
          console.error('Error fetching data:', error);
        }
      }      
      // Example usage of API
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      // fetchDataApi(apiUrl);


  //Q: What is the output check the number is even or odd
      const promise1=new Promise((resolve,reject)=>{
        const num=2;
        if(num%2 == 0){
          resolve('even number')
        } else {
          reject('odd number')
        }
      })

      promise1.then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.error(err);
      })

  //Q: What is the output
    console.log('start');
    const promise2=new Promise((resolve,reject)=>{
      console.log(1);
      resolve(2)
    })

    promise2.then((res)=>{
      console.log(res);
    })
    console.log('End'); //o/p - start,1,end,2
    //This problem first start will print then 1 will print then end will print then 2 will print,here 1 print because promise will check whatever synchronous code inside of it and execute the synchronous code first then execute the asynchronous code.
    //*JS engine always execute synchronous code first the execute asynchronous code. 


  //Q:What is the output
    //This is a promise chaining
    function job(state) {
      return new Promise(function(resolve,reject){
        if(state){
          resolve('success')
        } else {
          reject('rejected')
        }
      })
    };

    let promise=job(true)

    promise
      .then((res)=>{
        console.log(res);
        return job(false)
      }).catch((err)=>{
        console.log(err);
        return 'Error caught'
      }).then((res)=>{
        console.log(res);
        return 'The promise is completed'
      }).then((res)=>{
        console.log(res);
      })
      //success
      //rejected
      //Error caught
      //The promise is completed

  //Q: Fetch api using async and await
    async function loadJson(url){
      let response = await fetch(url)

      if(response.status === 200){  //status code 200 is success
        let json=await response.json()
        console.log(json);
        
        return 'fetching api is success'
      } else {
        throw new Error('Api Error'+response.status)
      }
    }

    const api='https://jsonplaceholder.typicode.com/posts';

    loadJson(api).then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })

  //Q:What is a Polyfill? 46 min
    //A polyfill is a piece of code (typically JavaScript) that provides the functionality of a newer API on older browsers that do not natively support it. It essentially "fills in" the gaps for missing features, ensuring that code using modern features can still run in older environments.

   