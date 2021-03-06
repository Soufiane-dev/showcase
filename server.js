const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');


const port = process.env.PORT ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {

  if(err) return console.log(err)
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log("Welcome to ScreenDy V3 Showcase API");
    console.log('We are live on ' + port);
  });
})
