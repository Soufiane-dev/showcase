// routes/index.js
const showcaseRoutes = require('./showcase_routes');
module.exports = function(app, db) {
 showcaseRoutes(app, db);
 // Other route groups could go here, in the future
};
