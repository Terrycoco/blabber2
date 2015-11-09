var React = require('react');
var Button = require('../components/button/Button.jsx');
var TextBox = require('../components/text/Textbox.jsx');
var FlexFramePage = require('../components/flex/FlexframePage.jsx');
var FlexFrameHoriz = require('../components/flex/FlexframeHoriz.jsx');
var FlexFrameVert = require('../components/flex/FlexframeVert.jsx');
var FlexFrameCenter = require('../components/flex/FlexframeCenter.jsx');


module.exports = React.createClass({
  render: function () {
    return(
      <FlexFramePage>
        <FlexFrameHoriz ratio="1">
        </FlexFrameHoriz>
        <FlexFrameHoriz ratio="3">
            <FlexFrameCenter>
              <TextBox>Centered Content</TextBox>
            </FlexFrameCenter>
            <FlexFrameVert>
              other stuff
            </FlexFrameVert>
        </FlexFrameHoriz>
      </FlexFramePage>
    );
  }
});
