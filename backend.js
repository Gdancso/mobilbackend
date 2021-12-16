const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000


app.use(cors())
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

app.get('/rend_pont', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_m'
  })
  
  connection.connect()
  
  connection.query('SELECT * from statisztika order by statisztika_pont desc', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows);
    res.send(rows);
  })
  
  connection.end()


  
})
app.get('/rend_halal', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_m'
  })
  
  connection.connect()
  
  connection.query('SELECT * from statisztika order by statisztika_halal desc', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows);
    res.send(rows);
  })
  
  connection.end()


  
})
app.get('/rend_ido', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_m'
  })
  
  connection.connect()
  
  connection.query('SELECT * from statisztika order by statisztika_ido desc', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows);
    res.send(rows);
  })
  
  connection.end()


  
})
app.get('/rend_date', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_m'
  })
  
  connection.connect()
  
  connection.query('SELECT * from statisztika order by statisztika_date desc', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows);
    res.send(rows);
  })
  
  connection.end()


  
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})