const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/statisztika', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_m'
  })
  
  connection.connect()
  
  connection.query('SELECT * from statisztika', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows);
    res.send(rows);
  })
  
  connection.end()


  
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})