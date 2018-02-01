const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

const port = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {

  if(err) return console.log(err)
  require('./app/routes')(app, database);
  server.listen(port, function() {
    console.log("App is running on port " + port);
});
})
