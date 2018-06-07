var express = require('express')
var app = express()

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/'+'index.html');
})

app.get('/competence', function (req, res) {
    res.sendFile(__dirname+'/'+'competence.json');
  })
  

app.listen(3011, function () {
  console.log(__dirname)
  console.log('Example app listening on port 3011!')
})

