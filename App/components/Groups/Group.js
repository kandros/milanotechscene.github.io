var React = require('react');

var Group = React.createClass({
  render: function() {
    return (
      <a href={this.props.groupInfo.url} target="_blank">
        <li className="group">
          <div className="group__logo">
            <img src={this.props.groupInfo.logo} />
          </div>
          <div className="group__info">
            <h2>{this.props.groupInfo.name}</h2>
            <p className="group__topics">{this.props.groupInfo.topics}</p>
          </div>
        </li>
      </a>
    )
  }
});

module.exports = Group;
