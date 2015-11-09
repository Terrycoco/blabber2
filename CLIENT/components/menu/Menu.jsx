var React = require('react');

var styles = {
  ul: {
  padding: '0',
  margin: '0'
  },
  li: {
    textDecoration: 'none',
    display: 'inline-block',
    width: '156px',
    height: '45px',
    textAlign: 'center',
    lineHeight: '300%'
  }
};

module.exports = React.createClass({
  render: function () {
    return (
          <ul className="flexbox-parent-horiz-left" style={styles.ul}>
              <li style={styles.li}><a rel="external" href="#" >Home</a></li>
              <li style={styles.li}><a rel="external" href="#">Inspiration</a></li>
              <li><a rel="external" href="#" style={styles.li}>Tutorials</a></li>
              <li><a rel="external" href="#" style={styles.li}>Freebies</a></li>
              <li><a rel="external" href="#" style={styles.li}>Resources</a></li>
          </ul>
    );
  }
});
