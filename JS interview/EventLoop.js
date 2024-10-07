
//"The event loop is a foundational concept in JavaScript that manages how asynchronous operations are handled in a single-threaded environment. JavaScript is inherently single-threaded, meaning it has only one call stack that processes function calls sequentially.

//Here’s how the event loop works:

   //1: Call Stack: JavaScript uses a call stack to track function calls. When a function is invoked, it’s added to the top of the stack (push operation). When the function completes, it’s removed from the stack (pop operation).

   //2: Event-driven Architecture: To handle asynchronous tasks (like timers, network requests, and callbacks), JavaScript relies on an event-driven model.

    //3:Task Queue: Asynchronous tasks, such as callbacks from setTimeout, setInterval, or I/O operations, are not executed immediately. Instead, they are placed in a task queue (also known as callback queue).

    //4:Event Loop: The event loop continuously checks two main components:
        //*Call Stack: If the call stack is empty and there are tasks waiting in the task queue, the event loop will dequeue tasks from the queue and push them onto the call stack for execution.
        //*Microtask Queue: Before dequeuing tasks from the task queue, the event loop checks for microtasks. Microtasks (e.g., promises, process.nextTick in Node.js) have higher priority and are executed before the next task from the task queue.
    //5:Execution Order: Tasks are processed in the order they were added to the task queue. This ensures that JavaScript remains non-blocking and can handle multiple operations concurrently.