const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


/*Statisztika-----------------------------------------------------------------------------------------------------*/
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
/*rendezések-----------------------------------------------------------------------------------------------------*/
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
/*értékelés-----------------------------------------------------------------------------------------------------*/
app.post('/ertekeles', (req, res) => {
  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_m'
  })
  
  connection.connect()
  let dt=new Date();
  let teljesdat=dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate();
  connection.query("INSERT INTO ertekeles  VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+teljesdat+"')", function (err, rows, fields) {
    //connection.query("INSERT INTO ertekeles  VALUES (NULL, 'wad', 'ddawda', '2022-01-06')", function (err, rows, fields) {  
  
    if (err) throw err
  
    console.log("Sikeres felvitel!")
    res.send("Sikeres felvitel!")
  })
  
  connection.end()
  

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