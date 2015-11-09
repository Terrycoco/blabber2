//these files are what is preprocessed for delivery in script to client

//stylesheets
// require('./stylesheets/grid.css');
// require('./stylesheets/menu.less');

require('./stylesheets/typography.less');
require('./stylesheets/colors.less');
require('./stylesheets/layout.less');
// require('./stylesheets/footer.css');

var React = require('react');
var App = require('./app/App.jsx');

// var Router = require('react-router');
// var Routes = require('./config/routes.jsx')
//
// Router.run(routes, Router.HistoryLocation, function(Handler) {
//   React.render(<Handler/>, document.body);
// });

React.render(<App/>, document.body);
