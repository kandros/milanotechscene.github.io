var React = require('react');
var normalizeGroup = require('./normalizeGroup.js');
var initWowAnimation = require('../../util/initWowAnimation.js');
var Group = React.createClass({
  componentDidMount: function() {
    normalizeGroup();
    initWowAnimation()
  },
  render: function() {
    return (
      <a href={this.props.groupInfo.url} target="_blank">
        <li className="wow fadeIn group">
          <div className="group__logo">
            <img src={this.props.groupInfo.logo} />
          </div>
          <div className="group__info">
            <h2 className="group__name">{this.props.groupInfo.name}</h2>
            <p className="group__topics">{this.props.groupInfo.topics}</p>
          </div>
        </li>
      </a>
    )
  }
});

module.exports = Group;
