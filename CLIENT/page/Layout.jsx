var React = require('react');
var Menu = require('./components/menu/Menu.jsx');
var Footer = require('.components/footer/Footer.jsx');


module.exports = React.createClass({
  render: function () {
    return(
      <div className="page-wrap">
        <Menu/>
        <div className="content">10</div>
        <Footer/>
      </div>
    );
  }
});
