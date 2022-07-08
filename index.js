const express = require('express');
const dotenv = require('dotenv')
var https = require('https');
var http = require('http');
dotenv.config()
const app = express();

app.get('/colors', (req, res, next) => {
    res.status(200).json([
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ])
})

//const PORT = process.env.PORT || 5001
//app.listen(PORT,() => console.log(`Server is running on this port ${PORT}`))

var options = {
    key: fs.readFileSync('/path/to/key.pem'),
    cert: fs.readFileSync('/path/to/cert.pem'),
    ca: fs.readFileSync('/path/to/ca.pem')
};
http.createServer(app).listen(80);
https.createServer(options, app).listen(443);