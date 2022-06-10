const mysql = require('mysql')
require('dotenv').config()

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
  port: process.env.PORT
});

module.exports.connect = () => {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
}

module.exports.select = (query) => {
  con.connect(function(err) {
    if (err) throw err;
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      return result
    });
  });
}

module.exports.insert = (table, body) => {
  let objects = new Array()
  let _body = [body]
  let keys = Object.keys(body)
  for(let i = 0; i < _body.length; i++){
    let tempObject = new Array()
    for(let j = 1; j < keys.length; j++){
      tempObject.push(_body[i][keys[j]])
    }
    objects.push(tempObject)
  }
  let columns = "("
  console.log(objects)
  for(let i = 1; i < keys.length; i++){
    if(i < keys.length - 1){
      columns = columns + keys[i] + ","
    }else{
      columns = columns + keys[i] + ")"
    }
  }
  let query = `INSERT INTO ${table} ${columns} VALUES ?`
    
  con.query(query, [objects], function (err) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}
this.connect()
module.exports.update = (query) => {
  con.connect(function(err) {
    if (err) throw err;
    con.query(query, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");
    });
  });
}

module.exports.delete = (query) => {
  con.connect(function(err) {
    if (err) throw err;
    con.query(query, function (err, result) {
      if (err) throw err;
      console.log("1 record deleted");
    });
  });
}