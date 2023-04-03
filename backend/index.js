const express = require('express');
const app = express();
const mysql = require('mysql2');

//const route = require('./route')

app.use(express.json());

//app.use('/', route)
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "pass987",
    database: "Orders_Managment",
  });

  db.connect((err)=>{
  if(err) throw err;
  console.log("DB connected");
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});