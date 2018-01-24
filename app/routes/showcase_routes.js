// Showcase_Routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  // Concerning projects

  app.get('/showcaseApps/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('projects').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
  app.get('/showcaseApps/', (req, res) => {

    db.collection('projects').find({}).toArray((err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
app.post('/showcaseApps', (req, res) => {
    const project = { title: req.body.title, logo: req.body.logo, author: req.body.author, description: req.body.description, createdAt: req.body.createdAt, qrUrl: req.body.qrUrl };
    db.collection('projects').insert(project, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.put('/showcaseApps/:id', (req, res) => {
      const id = req.params.id;
      const details = { '_id': new ObjectID(id) };
      const project = {
        title: req.body.title,
        logo: req.body.logo,
        author: req.body.author,
        description: req.body.description,
        createdAt: req.body.createdAt,
        qrUrl: req.body.qrUrl
      };

      db.collection('projects').update(details, project, (err, result) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send(project);
        }
      });
    });
    app.delete('/showcaseApps/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('projects').remove(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Project ' + id + ' deleted!');
          }
        });
      });



      // Concerning Authors


      app.get('/authors/', (req, res) => {
        db.collection('authors').find({}).toArray((err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
      });

      app.post('/authors', (req, res) => {
          const author = { fullName: req.body.fullname, email: req.body.email};
          db.collection('authors').insert(author, (err, result) => {
            if (err) {
              res.send({ 'error': 'An error has occurred' });
            } else {
              res.send(result.ops[0]);
            }
          });
        });
        app.delete('/authors/:id', (req, res) => {
            const id = req.params.id;
            const details = { '_id': new ObjectID(id) };
            db.collection('authors').remove(details, (err, item) => {
              if (err) {
                res.send({'error':'An error has occurred'});
              } else {
                res.send('Author ' + id + ' deleted!');
              }
            });
          });
          app.put('/authors/:id', (req, res) => {
              const id = req.params.id;
              const details = { '_id': new ObjectID(id) };
              const author = {fullName: req.body.fullname, email: req.body.email};
              db.collection('authors').update(details, author, (err, result) => {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    res.send(author);
                }
              });
            });

        //Concering Screenshots

        app.get('/screenshots/', (req, res) => {
          db.collection('screenshots').find({}).toArray((err, item) => {
            if (err) {
              res.send({'error':'An error has occurred'});
            } else {
              res.send(item);
            }
          });
        });

        app.post('/screenshots', (req, res) => {
            const screens = {url1 : req.body.url1, url2 : req.body.url2 , url3 : req.body.url3};
            db.collection('screenshots').insert(screens, (err, result) => {
              if (err) {
                res.send({ 'error': 'An error has occurred' });
              } else {
                res.send(result.ops[0]);
              }
            });
          });
          app.delete('/screenshots/:id', (req, res) => {
              const id = req.params.id;
              const details = { '_id': new ObjectID(id) };
              db.collection('screenshots').remove(details, (err, item) => {
                if (err) {
                  res.send({'error':'An error has occurred'});
                } else {
                  res.send('Screenshot ' + id + ' deleted!');
                }
              });
            });

            app.put('/screenshots/:id', (req, res) => {
                const id = req.params.id;
                const details = { '_id': new ObjectID(id) };
                const screens = {url1 : req.body.url1, url2 : req.body.url2 , url3 : req.body.url3};
                db.collection('screenshots').update(details, screens, (err, result) => {
                  if (err) {
                      res.send({'error':'An error has occurred'});
                  } else {
                      res.send(screens);
                  }
                });
              });
          // Concerning store
          app.get('/store/', (req, res) => {
            db.collection('store').find({}).toArray((err, item) => {
              if (err) {
                res.send({'error':'An error has occurred'});
              } else {
                res.send(item);
              }
            });
          });

          app.post('/store', (req, res) => {
              const links = {
                Android: req.body.android,
                IOS : req.body.ios
              };
              db.collection('store').insert(links, (err, result) => {
                if (err) {
                  res.send({ 'error': 'An error has occurred' });
                } else {
                  res.send(result.ops[0]);
                }
              });
            });
            app.delete('/store/:id', (req, res) => {
                const id = req.params.id;
                const details = { '_id': new ObjectID(id) };
                db.collection('store').remove(details, (err, item) => {
                  if (err) {
                    res.send({'error':'An error has occurred'});
                  } else {
                    res.send('Store ' + id + ' deleted!');
                  }
                });
              });
              //////////////DELETE ALL STORE DOCUMENTS///////////////


               app.delete('/store', (req, res) => {
                  const id = req.params.id;
                  //const details = { '_id': new ObjectID(id) };
                  db.collection('store').remove();
                  console.log("All links are removed");
                });


              ////////////////////////////////////////



              app.put('/store/:id', (req, res) => {
                  const id = req.params.id;
                  const details = { '_id': new ObjectID(id) };
                  const links = {
                    android : req.body.android,
                    ios : req.body.ios
                    };
                  db.collection('store').update(details, links, (err, result) => {
                    if (err) {
                        res.send({'error':'An error has occurred'});
                    } else {
                        res.send(links);
                    }
                  });
                });
};
