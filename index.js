const express = require('express'); // calls `express`, a node package, into the file; allows us to use `.get()`;
const app = express(); // declares the application for use
const port = 3000; // names the port

app.get('/welcome', (request, response) => { // `get` is a verb, and requires the patch to know what to look for
  response.send("📨 Here's the info you requested!")
}) // this block is creating the welcome url that will chain on to the server url

app.listen(port, () => console.log(`🌚 Listening on port ${port}`))

// this creates a server and tells you where the door is > port 3000
// the port allows the requests to pass between client and server
// the app *listens* to the door and waits for info to come through
// paths are defined on the server side
// `fetch()` is a front-end API
// express is a web framework for creating servers, and use of this package gives access/usage of the `get()` method
