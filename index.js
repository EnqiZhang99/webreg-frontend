const express = require('express'); 
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
