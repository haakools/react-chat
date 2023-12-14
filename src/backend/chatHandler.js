const express = require('express');
const axios = require('axios');



// setup backend server
var cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json()) // sets Content-Type to json

// Adding post endpoitn
app.post('/chat', async (req, res) => {
    const { message } = req.body
    console.log("Got message: ", message)

    // This will eventually send a post message 
    // to the model to retrieve information.
    res.send({ reply: 'Hello from the bot!'})
});


const port = 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});



