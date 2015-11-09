var React = require('react');
var Button = require('../components/button/Button.jsx');
var TextBox = require('../components/text/Textbox.jsx');
var Menu = require('../components/menu/Menu.jsx');
// var FlexFrame = require('../components/flex/Flexframe.jsx');

module.exports = React.createClass({
  render: function () {
    return(
      <div className="flexbox-parent-vert-top">

        <div className="flexbox-parent-horiz-left">
          <header className="flexbox-parent-vert-left fill-from-left">
            <TextBox className="flexbox-item-grow" fontSize="45px" fontWeight="bold">React Styling Sandbox</TextBox>
          </header>
        </div>

          <div className="flexbox-item flexbox-parent-horiz-center
          flexbox-item-grow">
              <div className="sandbox fill-from-center flexbox-item-grow">
                <Button>This is SOME button!</Button>
              </div>
              <div className="flexbox-item-grow fill-from-center">
                  backgroundColor: <input placeholder="put something here"></input>
              </div>
          </div>

          <footer className="flexbox-item footer">
              Footer
          </footer>
      </div>
    );
  }
});
