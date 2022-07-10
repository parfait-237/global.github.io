const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "parfait",
    password: "4334",
  });

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });
 