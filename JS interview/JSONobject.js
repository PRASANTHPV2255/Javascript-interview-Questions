
//JSON
//A JSON (JavaScript Object Notation) object is a lightweight data interchange format that's easy for humans to read and write and easy for machines to parse and generate. It is primarily used to transmit data between a server and a web application as text.

  //Structure of a JSON Object
    //A JSON object is enclosed in curly braces {} and contains a collection of key/value pairs, where each key is a string and the value can be a string, number, boolean, array, another object, or null. Here’s an example:
    const person ={
      "name": "John Doe",
      "age": 30,
      "isStudent": false,
      "courses": ["Math", "Science"],
      "address": {
        "street": "123 Main St",
        "city": "Anytown"
      }
    }

    // Accessing data
    console.log(person.name); // Output: Jane Doe
    console.log(person.courses[1]); // Output: History

  //Uses of JSON Objects
    //Data Interchange: JSON is commonly used for exchanging data between a web server and a client. For example, when you request data from a web API, the server often responds with JSON.

    //Configuration Files: JSON is often used to store configuration settings in applications. Many modern software systems use JSON for their configuration files due to its simplicity and readability.

    //Storing Data: JSON can be used to store data in a lightweight format, such as in NoSQL databases like MongoDB, which use JSON-like documents.

    //Data Serialization: JSON is used to serialize and deserialize data, making it easy to convert data structures into a JSON string and vice versa. This is useful for persisting data or transmitting it over a network.

