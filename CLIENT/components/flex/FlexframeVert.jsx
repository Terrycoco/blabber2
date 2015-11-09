var Radium = require('radium');
var React = require('react');
var Color = require('color');

var styles = {
  parent: {
    display: 'flex',
    flexDirection: 'column', //vertically
    justifyContent: 'flex-start',  //vertically
    alignItems: 'stretch',  //horizontal
    alignContent: 'stretch', //horizontal space
    border: '3px solid black',
    flex: '1',
    overflow: 'auto'
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
