var Radium = require('radium');
var React = require('react');

module.exports = Radium(React.createClass({

  render: function() {
    return (
      <span style={[{
          fontSize: this.props.fontSize,
          fontWeight: this.props.fontWeight
        }, styles.base]} >
          {this.props.children}
      </span>
    );
  }

}));


var styles = {
  base: {
    background: 'rgba(0,0,0,0)',
    border: '1px solid black'
  }
};
