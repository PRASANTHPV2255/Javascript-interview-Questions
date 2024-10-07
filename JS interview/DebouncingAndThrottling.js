
//Wha us Debouncing
  //It limits the execution of a function call and waits for a certain amount of time before it running it again.
  //Debouncing in JavaScript is a programming pattern used to ensure that a function is only executed once after a certain period of time.This is particularly useful for optimizing performance and improving user experience by limiting the number of times a function is called in response to events like scrolling, resizing, or typing.

 // Why Use Debouncing?
    // Performance Optimization: Prevents functions from being called excessively, which can degrade performance, especially in scenarios like window resizing or scrolling.
    // Reducing Redundant Operations: Ensures that a function is executed only once after the user has stopped performing an action, rather than multiple times while the action is being performed.

//What is Throttling 
  //Throttling is a technique to limit the execution of a event handler function,even the event triggers continuously due to user action(user action here scrolling).

  //Throttling in JavaScript is a technique used to limit the number of times a function is called over time. Unlike debouncing, which ensures that a function is only called after a specified period of inactivity, throttling ensures that a function is called at most once in a specified time period, regardless of how many times the event is triggered.

  //Why Use Throttling?
    //Performance Optimization: Reduces the number of times a function is executed, which can improve performance, especially for functions tied to high-frequency events like scrolling, resizing, or mouse movements.
    //Resource Management: Helps in managing and conserving system resources by ensuring that a function is not called excessively.
    //Consistency: Provides a more consistent rate of function execution, which can be important for certain tasks like updating a progress bar or handling animations.