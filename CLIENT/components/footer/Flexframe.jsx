var React = require('react');
var Radium = require('radium');

module.exports = Radium(React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}));


var styles = {
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;              /* NEW, Spec - Opera 12.1, Firefox 20+ */
  flex-direction: row;   /*vertically spaced*/
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  border: 1px solid black;
}
