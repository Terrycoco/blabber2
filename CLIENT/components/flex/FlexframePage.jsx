var Radium = require('radium');
var React = require('react');
var Color = require('color');

var styles = {
  parent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignItems: 'stretch',
    alignContent: 'stretch',
    border: '3px solid black'
  }

};

module.exports = Radium(React.createClass({
  render: function() {
    return (
        <div style={[styles.parent]}>
        {this.props.children}
      </div>
    );
  }
}));
