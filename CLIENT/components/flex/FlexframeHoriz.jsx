var Radium = require('radium');
var React = require('react');
var Color = require('color');

var styles = {
  parent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', //left
    alignItems: 'stretch',
    alignContent: 'stretch',
    border: '3px solid red'
  }

};

module.exports = Radium(React.createClass({
  render: function() {
    return (
        <div style={[styles.parent, flex:{this.props.ratio}]}>
        {this.props.children}
      </div>
    );
  }
}));
