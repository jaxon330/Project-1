const express = require("express")
// const path = require("path")
const request = require("request")
const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  })

app.listen(process.env.PORT || 3000, function(req, res) {
    console.log("Server is running on port 3000");
})

module.exports = app