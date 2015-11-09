var React = require('react');
var Radium = require('radium');

var styles = {
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  },
  li: {
    padding: '5',
    background: '#eee'
  },
  placeholder: {
    background: 'rgb(255,240,120)',
    ':before': {
      content: 'Drop here',
      color: 'rgb(225,210,90)'
    }
  }
};
var placeholder = document.createElement("li");
// placeholder.style.background = 'rgb(255,240,120)';

var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

module.exports = Radium(React.createClass({
  getInitialState: function() {
    return {data: colors};
  },
  dragStart: function(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';

    // Firefox requires calling dataTransfer.setData
    // for the drag to properly work
    e.dataTransfer.setData("text/html", e.currentTarget);
  },
  dragEnd: function(e) {

    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);

    // Update state
    var data = this.state.data;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
  },
  dragOver: function(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className == "placeholder") return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  },
  render: function() {
    var listItems = this.state.data.map(function(item, i) {
      return (
        <li style={styles.li}
        data-id={i}
        key={i}
        draggable="true"
        onDragStart={this.dragStart}>
        {item}
        </li>
    );
  }, this);
    return <ul style={styles.ul} onDragOver={this.dragOver}>{listItems}</ul>
  }
}));
