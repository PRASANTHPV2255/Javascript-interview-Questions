
 //Q:5 - What is JSON.strigify and JSON.parse?
    //#JSON.strigify will change the object into string
    //#JSON.parse will change the sting into object
    //#What use of this:-The common use case of this storing data into our local storage.
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


  //Local Storage vs session Storage vs Cookies
    //The similarity between the three is all three of them being stored on the users actual computer browser.These stored data's are browser independent that mean if we store data in chrome it will not accessible in fireFox or any other browser it only accessible in chrome.

    //The Difference between Local Storage,session Storage,Cookies
      //LocalStorage and session storage are more likely similar but cookies are different and cookies can store only a much smaller amount of information.
      //Capacity:cookies:4kb,LocalStorage:10mb,session Storage:5mb

    //Accessability
      //cookies and localStorage are accessible in any windows of the browser.
      //session storage:-session storage is accessible in same tab if the tab is close the data will removed, session storage is for the one browsing session.

    //Storage Location
      //session storage:-stored in browser ,session storage is for the one browsing session.If the user is close the tab the data removed from the session storage.
      //localStorage:-stored in browser ,If we store data in browser using localStorage it will remain forever until the user delete data from the localStorage.
      //Cookies:-stored in browser and server,cookies are mainly used for session management, personalization, and tracking,cookies expire when we set a time frame in that time frame cookies will expires.When user req something from the sever the cookies will send a request to the server.

  //Session Storage
    sessionStorage.setItem('name','prasanth');

    const obj={name:'prasanth',age:24}
    sessionStorage.setItem('obj',JSON.stringify(obj))
    const sessionData=JSON.parse(sessionStorage.getItem('obj'))
    console.log(sessionData);
    // sessionStorage.clear()


  //cOOKIES
    document.cookie = 'name=prasanth; expires=' + new Date(2024,7,28).toUTCString() 
   
    //In cookies we can add expire date.in that expire date the will will be removed.    