const express = require('express'); // calls `express`, a node package, into the file; allows us to use `.get()`;
const app = express(); // declares the application for use
const port = 3000; // names the port

// visit localhost:3030/welcome to view this `get` in action
app.get('/welcome', (request, response) => { // `get` is a verb, and requires the '/welcome' path to know what to look for
  response.send("📨 Here's the info you requested!");
}) // this block is creating the welcome url that will chain on to the server url

// visit localhost:3030/yolo to view this `get` in action
app.get('/yolo', (request, response) => { // '/yolo' creates the path and tells the browser what to do when someone requests that url in their browser
  response.send("✨✨✨✨✨✨✨ 🌞 You may only live once, but you can have a good life while you're at it! 🌝 ✨✨✨✨✨✨✨");
})

// visit localhost:3030/user to view this `get` in action
app.get('/user', (request, response) => {
  response.send({
    name: '✨ nichelicorn 🦄',
    birthday: 'aDayInThePast',
    quote: 'I dwell in possiblities. – Emily Dickinson'
  });
})

app.listen(port, () => console.log(`🌚 Listening on port ${port}`))
// this creates a server and tells you where the door is > port 3000
// the port allows the requests to pass between client and server
// the app *listens* to the door and waits for info to come through

// paths are defined on the server side
// `fetch()` is a front-end API
// express is a web framework for creating servers, and use of this package gives access/usage of the `get()` method
// backend creates the JSON, and frontend uses the JSON
