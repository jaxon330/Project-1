const express = require("express")
const path = require("path")
const request = require("request")
const app = express()

app.use(express.static('public'));

app.get('/', function(req, res) {
    // res.sendFile(__dirname + '/index.html')
    res.send('Simon game')
   
})

app.listen(process.env.PORT || 3000, function(req, res) {
    console.log("Server is running on port 3000");
})