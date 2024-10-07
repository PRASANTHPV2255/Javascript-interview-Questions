

//Client Error Responses (400-499)
        // 400 Bad Request: The server cannot process the request due to a client error.
        // 401 Unauthorized: Authentication is required and has failed or has not yet been provided.
        // 403 Forbidden: The client does not have access rights to the content.
        // 404 Not Found: The server cannot find the requested resource.
        // Server Error Responses (500-599)
        // 500 Internal Server Error: A generic error message when the server encounters an unexpected condition.
        // 501 Not Implemented: The server does not support the functionality required to fulfill the request.
        // 502 Bad Gateway: The server received an invalid response from the upstream server.
        // 503 Service Unavailable: The server is not ready to handle the request, often due to being overloaded or down for maintenance.


  //Most Used Status Codes
  // Successful Responses (200-299)
  // 200 OK: The request was successful, and the response body contains the representation requested.
  // 201 Created: The request was successful, and a new resource was created as a result. This is typically the response sent after a POST request.
  // 204 No Content: The request was successful, but there is no content to send in the response body. This is typically used after a successful DELETE request.
  // Redirection Messages (300-399)
  // 301 Moved Permanently: The requested resource has been assigned a new permanent URI, and any future references to this resource should use one of the returned URIs.
  // 302 Found: The requested resource resides temporarily under a different URI. Since the redirection might be altered on occasion, the client should continue to use the request URI for future requests.
  // 304 Not Modified: Indicates that the resource has not been modified since the version specified by the request headers. The client can use a cached version of the resource.
  // Most Used Error Codes
  // Client Error Responses (400-499)
  // 400 Bad Request: The server could not understand the request due to invalid syntax. This is often due to malformed request syntax, invalid request message framing, or deceptive request routing.
  // 401 Unauthorized: The request requires user authentication. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.
  // 403 Forbidden: The server understood the request but refuses to authorize it. This is typically used when the server does not want to reveal exactly why the request has been forbidden, or when no other 4xx code is appropriate.
  // 404 Not Found: The server cannot find the requested resource. This is often the most encountered error, indicating that the requested resource is not available.
  // 405 Method Not Allowed: The method specified in the request is not allowed for the resource identified by the request URI.
  // 409 Conflict: The request could not be completed due to a conflict with the current state of the resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request.
  // 429 Too Many Requests: The user has sent too many requests in a given amount of time. This response is used for rate limiting.
  // Server Error Responses (500-599)
  // 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request. This is a generic error message, given when no more specific message is suitable.
  // 501 Not Implemented: The server does not support the functionality required to fulfill the request. This is the appropriate response when the server does not recognize the request method.
  // 502 Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
  // 503 Service Unavailable: The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.
  // 504 Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.