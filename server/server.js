const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors()); // Allow frontend requests

// Handle incoming messages from client
app.post('/send-message', (req, res) => {
    const { message } = req.body;  // Extract the message from the request

    console.log("Client says:", message);  // Log the message on the server

    // Respond back to the client
    res.json({ reply: `${message}` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
