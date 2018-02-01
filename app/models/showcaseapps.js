module.exports = function getAppById(){
  const id = req.params.id;
  const details = { '_id': new ObjectID(id) };
  db.collection('projects').findOne(details, (err, item) => {
    if (err) {
      res.send({'error':'An error has occurred'});
    } else {
      res.send(item);
    }
  });
};
