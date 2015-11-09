var Radium = require('radium');
var React = require('react');
var Color = require('color');

module.exports = Radium(React.createClass({
  getInitialState: function () {
    return {color: '#0074D9'};
  },
  render: function() {
    return (
        <button style={[
          this.state.color
        ]} >{this.props.children}</button>
    );
  }
}));


var styles = {
  base: {
    color: '#0074D9',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: Color('#0074D9').lighten(0.8).hexString()
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};
